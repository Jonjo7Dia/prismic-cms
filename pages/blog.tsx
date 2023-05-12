import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import { components } from "../slices";
import { Navigation } from "../components/Navigation";

export default function Page({ nav_bar, pages }: any) {
  const children = pages !== undefined && <div>hello</div>;
  return (
    <>
      <Navigation navigation={nav_bar} children={children} />
    </>
  );
}

export async function getServerSideProps() {
  const client = prismic.createClient(sm.apiEndpoint);

  const [nav_bar, pages] = await Promise.all([
    client.getByUID("nav_bar", "header"),
    client.getAllByType("article"),
  ]);

  return {
    props: {
      nav_bar,
      pages,
    },
  };
}
