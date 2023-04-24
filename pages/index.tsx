import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import { components } from "../slices";
import { Navigation } from "../components/Navigation";

export default function Page({ nav_bar, page }: any) {
  return (
    <>
      <Navigation navigation={nav_bar} />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
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
