import React from "react";
import { PrismicRichText } from "@prismicio/react";
import ContactBlock from "components/ContactBlock";
/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param { ContactProps }
 */
const Contact = ({ slice }) => (
  <ContactBlock
    title={slice.primary.title}
    address={slice.primary.address}
    phoneNumber={slice.primary.phone_number}
    image={slice.primary.image}
    blockId={slice.primary.block_id}
  />
);

export default Contact;
