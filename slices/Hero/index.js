import React from "react";
import { PrismicRichText } from "@prismicio/react";
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
  />
);

export default Hero;
