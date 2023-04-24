import classes from "../styles/Hero.module.scss";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

interface HeroProps {
  title: any;
  description: any;
  src: string;
  alt: string;
}

export default function HeroBlock(props: HeroProps) {
  return (
    <div className={classes["hero-block"]}>
      <div className={classes["hero-block__background"]}>
        <Image
          src={props.src}
          alt={props.alt}
          className={classes["hero-block__background__image"]}
          width={1204}
          height={800}
        />
      </div>
      <div className={classes["hero-block__content"]}>
        <PrismicRichText field={props.title} />
        <div className={classes["hero-block__span"]}></div>
        <PrismicRichText field={props.description} />
      </div>
    </div>
  );
}
