import classes from "styles/contactBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

interface image {
  url: string;
  alt: string;
}

interface ContactProps {
  title: any;
  blockId: string;
  address: string;
  phoneNumber: string;
  image: image;
}
export default function ContactBlock({
  title,
  blockId,
  address,
  phoneNumber,
  image,
}: ContactProps) {
  return (
    <section
      className={`slice-container ${classes["contact-block"]}`}
      id={blockId}
    >
      <div className={classes["contact-block__title"]}>
        <PrismicRichText field={title} />
      </div>
      <div className={classes["contact-block__content"]}>
        <div className={classes["contact-block__info"]}>
          <p className={classes["contact-block__contact"]}>{address}</p>
          <Link
            href={`tel:${phoneNumber}`}
            className={classes["contact-block__contact"]}
          >
            {phoneNumber}
          </Link>
        </div>
        <div className={classes["contact-block__imageWrapper"]}>
          <Image
            height={500}
            width={500}
            src={image.url}
            alt={image.alt}
            className={classes["contact-block__img"]}
          />
        </div>
      </div>
    </section>
  );
}
