import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import { components } from "../slices";
import { Navigation } from "../components/Navigation";

export async function Page({ navigation, page }: any) {
  console.log("hello");
  return (
    <>
      <Navigation navigation={navigation} />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function getStaticProps(params: any) {
  const client = prismic.createClient(sm.apiEndpoint);

  const [navigation, page] = await Promise.all([
    client.getByUID("nav_bar", "header"),
    client.getByUID("page", params.uid),
  ]);

  return {
    props: {
      navigation,
      page,
    },
  };
}
