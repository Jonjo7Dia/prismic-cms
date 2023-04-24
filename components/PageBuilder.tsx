import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";

export const getStaticProps = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("page", "homepage");

  return {
    props: {
      page,
    },
  };
};

export default function Page({ page }: any) {
  return <SliceZone slices={page.data.slices} components={components} />;
}
