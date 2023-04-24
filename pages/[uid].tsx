import * as prismic from "@prismicio/client";
import sm from "../sm.json";
export async function Page({ navigation, page }: any) {
  // The `navigation` document can be used here.
}

export async function getStaticProps({ params, previewData }: any) {
  const client = prismic.createClient(sm.apiEndpoint);

  const [navigation, page] = await Promise.all([
    client.getByUID("navigation", "header"),
    client.getByUID("page", params.uid),
  ]);

  return {
    props: {
      navigation,
      page,
    },
  };
}
