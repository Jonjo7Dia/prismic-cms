import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import { components } from "../slices";
import { Navigation } from "../components/Navigation";

export default function Page({ nav_bar, page }: any) {
  const children = (
    <SliceZone slices={page.data.slices} components={components} />
  );
  return <Navigation navigation={nav_bar}>{children}</Navigation>;
}

export async function getServerSideProps() {
  const client = prismic.createClient(sm.apiEndpoint);

  const [nav_bar, page] = await Promise.all([
    client.getByUID("nav_bar", "header"),
    client.getByUID("page", "homepage"),
  ]);

  return {
    props: {
      nav_bar,
      page,
    },
  };
}
