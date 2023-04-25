import React from "react";
import { PrismicRichText } from "@prismicio/react";
import BannerBlock from "../../components/BannerBlock";
/**
 * @typedef {import("@prismicio/client").Content.BannerSlice} BannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BannerSlice>} BannerProps
 * @param { BannerProps }
 */
const Banner = ({ slice }) => (
  <section>
    <BannerBlock
      image={slice.primary.banner}
      title={slice.primary.title}
      link={slice.primary.id_link}
    />
  </section>
);

export default Banner;
