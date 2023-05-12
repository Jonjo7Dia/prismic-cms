import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "styles/blogLink.module.scss";
interface BlogProps {
  title: string;
  date: string;
  image: { url: string; alt: string };
  uid: string;
}

export default function BlogLink({ title, date, image, uid }: BlogProps) {
  const dateString: Date = new Date(date);
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <Link href={`/blog/${uid}`} className={classes["blog-link"]}>
      <div className={classes["blog-link__imageWrapper"]}>
        <Image
          src={image.url}
          alt={image.alt}
          width={450}
          height={330}
          className={classes["blog-link__image"]}
        />
      </div>
      <div className={classes["blog-link__info"]}>
        <h4 className={classes["blog-link__title"]}>{title}</h4>
        <p className={classes["blog-link__date"]}>
          {dateString.toLocaleDateString("en-US", dateOptions)}
        </p>
      </div>
    </Link>
  );
}
