import classes from "../styles/Hero.module.scss";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { useState } from "react";
import ScrollButton from "./ScrollButton";

interface HeroProps {
  title: any;
  description: any;
  src: string;
  alt: string;
  link: string | undefined;
}

export default function HeroBlock(props: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={classes["hero-block"]}>
      <div className={classes["hero-block__background"]}>
        <Image
          src={props.src}
          alt={props.alt}
          fill
          className={classes["hero-block__background__image"]}
          object-fit={"cover"}
          priority={true}
          onLoadingComplete={() => {
            setImageLoaded(true);
          }}
        />
      </div>
      {imageLoaded && (
        <div className={classes["hero-block__content"]}>
          <PrismicRichText field={props.title} />
          <div className={classes["hero-block__span"]}></div>
          <PrismicRichText field={props.description} />
        </div>
      )}
      {props.link != undefined && <ScrollButton link={props.link} />}
    </div>
  );
}
