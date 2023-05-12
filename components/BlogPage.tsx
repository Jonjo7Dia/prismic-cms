import classes from "styles/blogPage.module.scss";
import BlogLink from "./blogComponents/BlogLink";
export default function BlogPage({ articles }: any) {
  console.log(articles);
  return (
    <div className={classes["blog-page"]}>
      {articles.map((article: any) => {
        return (
          <BlogLink
            uid={article.uid}
            title={article.data.blog_title}
            image={article.data.blog_image}
            date={article.data.publish_date}
            key={article.id}
          />
        );
      })}
    </div>
  );
}
