import classes from "styles/blogPost.module.scss";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
export default function BlogPost({ data }: any) {
  const image = data.data.blog_image;
  const title = data.data.blog_title;
  const publishDate: Date = new Date(data.data.publish_date);
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const body = data.data.blog_body;
  return (
    <section className={`slice-container`}>
      <div className={classes["blog-post__image-wrapper"]}>
        <Image
          width={1400}
          height={800}
          src={image.url}
          alt={image.alt}
          className={classes["blog-post__hero-image"]}
          priority
        />
      </div>
      <h1 className={classes["blog-post__title"]}>{title}</h1>
      <p className={classes["blog-post__date"]}>
        {publishDate.toLocaleDateString("en-US", dateOptions)}
      </p>
      <div className={classes["blog-post__body"]}>
        <PrismicRichText field={body} />
      </div>
    </section>
  );
}
