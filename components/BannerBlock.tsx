import classes from "../styles/banner.module.scss";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import ScrollButton from "./ScrollButton";
interface image {
  url: string;
  alt: string;
}

interface BannerProps {
  title: any;
  link: string;
  image: image;
}
export default function BannerBlock({ title, link, image }: BannerProps) {
  return (
    <section className={classes["banner"]}>
      <Image
        src={image.url}
        alt={image.alt}
        fill
        className={classes["banner__image"]}
      />
      <div className={classes["banner__content"]}>
        <PrismicRichText field={title} />
      </div>
      {link != undefined && <ScrollButton link={link} />}
    </section>
  );
}
