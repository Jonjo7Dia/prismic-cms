import classes from "../styles/dogBlock.module.scss";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

interface DogProps {
  title: any;
  description: any;
  images: any;
  alignRight: boolean;
  blockId: string | undefined;
}
interface image {
  dog_photo: { url: string; alt: string };
}
export default function DogBlock({
  title,
  description,
  images,
  alignRight,
  blockId,
}: DogProps) {
  const alignImagesRight = alignRight ? classes["dog-block--right"] : "";
  const removeMarginTop =
    blockId !== null && blockId !== "" ? "" : classes["dog-block--marginLess"];
  console.log(title, blockId);
  return (
    <section
      className={`slice-container ${classes["dog-block"]} ${alignImagesRight} ${removeMarginTop}`}
      id={blockId !== null ? blockId : ""}
    >
      {images != undefined && (
        <div className={classes["dog-block__images"]}>
          {images.map((item: image, index: number) => {
            return (
              <Image
                key={index}
                src={item.dog_photo.url}
                alt={item.dog_photo.alt}
                width={700}
                height={1000}
                className={classes["dog-block__images__dog-image"]}
              />
            );
          })}
        </div>
      )}
      <div
        className={`${classes["dog-block__content"]} ${
          alignRight ? classes["dog-block__content--right"] : ""
        }`}
      >
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
      </div>
    </section>
  );
}
