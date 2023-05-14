import * as prismic from "@prismicio/client";
import sm from "../../sm.json";
import BlogPost from "components/blogComponents/BlogPost";
import { Navigation } from "components/Navigation";

export default function Article({ article, nav_bar }: any) {
  const children = <BlogPost data={article} />;
  return <Navigation navigation={nav_bar}> {children}</Navigation>;
}

export async function getServerSideProps({ params }: any) {
  const client = prismic.createClient(sm.apiEndpoint);
  const [nav_bar, article] = await Promise.all([
    client.getByUID("nav_bar", "header"),
    client.getByUID("article", params.uid),
  ]);
  return {
    props: {
      nav_bar,
      article,
    },
  };
}
