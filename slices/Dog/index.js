import React from "react";
import { PrismicRichText } from "@prismicio/react";
import DogBlock from "../../components/DogBlock";
/**
 * @typedef {import("@prismicio/client").Content.DogSlice} DogSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DogSlice>} DogProps
 * @param { DogProps }
 */
const Dog = ({ slice }) => (
  <DogBlock
    title={slice.primary.title}
    description={slice.primary.description}
    alignRight={slice.primary.align_right}
    blockId={slice.primary.block_id}
    images={slice.items}
  />
);

export default Dog;
