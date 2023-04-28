import React from "react";
import { PrismicRichText } from "@prismicio/react";
import PuppyBlock from "components/PuppyBlock";
/**
 * @typedef {import("@prismicio/client").Content.PuppiesSlice} PuppiesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PuppiesSlice>} PuppiesProps
 * @param { PuppiesProps }
 */
const Puppies = ({ slice }) => (
  <PuppyBlock
    title={slice.primary.title}
    images={slice.items}
    blockId={slice.primary.block_id}
  />
);

export default Puppies;
