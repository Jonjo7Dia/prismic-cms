import React from "react";
import { PrismicRichText } from "@prismicio/react";
import InformationBlock from "../../components/InformationBlock";
/**
 * @typedef {import("@prismicio/client").Content.InformationSlice} InformationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InformationSlice>} InformationProps
 * @param { InformationProps }
 */
const Information = ({ slice }) => (
  <InformationBlock
    id={slice.primary.block_id}
    alignRight={slice.primary.image_right}
    image={slice.primary.image}
    title={slice.primary.title}
    description={slice.primary.description}
    right={slice.primary.image_right}
  />
);

export default Information;
