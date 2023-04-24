import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import { components } from "../slices";

export default function Page({ page }: any) {
  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function getServerSideProps() {
  const client = prismic.createClient(sm.apiEndpoint);

  const page = await client.getByUID("page", "homepage");

  return {
    props: {
      page,
    },
  };
}
