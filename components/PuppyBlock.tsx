import classes from "styles/puppyBlock.module.scss";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
interface image {
  puppy_image: {
    url: string;
    alt: string;
  };
}
interface PuppyProps {
  title: any;
  images: image[];
  blockId: string;
}

export default function PuppyBlock({ title, images, blockId }: PuppyProps) {
  const removeMarginTop =
    blockId !== null && blockId !== ""
      ? ""
      : classes["puppy-block--marginLess"];
  return (
    <section
      className={`slice-container ${classes["puppy-block"]} ${removeMarginTop}`}
      id={blockId !== null ? blockId : ""}
    >
      <div className={classes["puppy-block__title"]}>
        <PrismicRichText field={title} />
      </div>
      {images != undefined && (
        <div className={classes["puppy-block__images"]}>
          {images.map((item: image, index: number) => {
            return (
              <Image
                key={index}
                src={item.puppy_image.url}
                alt={item.puppy_image.alt}
                width={700}
                height={1000}
                className={classes["puppy-block__images__puppy-image"]}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
