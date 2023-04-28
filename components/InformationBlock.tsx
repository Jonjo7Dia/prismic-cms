import classes from "../styles/infoBlock.module.scss";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

interface image {
  url: string;
  alt: string;
}
interface InfoProps {
  title: any;
  description: any;
  image: image;
  id: string | undefined;
  right: boolean;
}
export default function InformationBlock({
  title,
  description,
  image,
  id,
  right,
}: InfoProps) {
  return (
    <section className={`slice-container ${classes["info-block"]}`} id={id}>
      <div
        className={`${classes["info-block__container"]} ${
          !right ? classes["info-block__container--reverse"] : ""
        }`}
      >
        <div
          className={`${classes["info-block__block"]} ${
            classes["info-block__content"]
          } ${!right ? classes["info-block__content--reverse"] : ""}`}
        >
          <PrismicRichText field={title} />
          <div className={classes["info-block__text"]}>
            <PrismicRichText field={description} />
          </div>
        </div>
        <div
          className={`${classes["info-block__block"]} ${classes["info-block__image"]}`}
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={1080}
            height={873}
            className={classes["info-block__img"]}
          />
        </div>
      </div>
    </section>
  );
}
