import React from "react";
import HeroBlock from "../../components/HeroBlock";
/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */

const Hero = ({ slice }) => (
  <HeroBlock
    title={slice.primary.title}
    description={slice.primary.description}
    alt={slice.primary.background.alt}
    src={slice.primary.background.url}
    link={slice.primary.next_block_id}
  />
);

export default Hero;
