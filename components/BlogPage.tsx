import classes from "styles/blogPage.module.scss";
export default function BlogPage({ articles }: any) {
  console.log(articles);
  return <div className={classes["blog-page"]}></div>;
}
