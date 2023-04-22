// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Page Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.page_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    page_title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = BannerSlice | DogSlice | InformationSlice | PuppiesSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = PageDocument;
/**
 * Primary content in Banner → Primary
 *
 */
interface BannerSliceDefaultPrimary {
    /**
     * Title field in *Banner → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: banner.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Banner field in *Banner → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: banner.primary.banner
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
}
/**
 * Default variation for Banner Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Banner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BannerSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BannerSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Banner*
 *
 */
type BannerSliceVariation = BannerSliceDefault;
/**
 * Banner Shared Slice
 *
 * - **API ID**: `banner`
 * - **Description**: `Banner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BannerSlice = prismicT.SharedSlice<"banner", BannerSliceVariation>;
/**
 * Primary content in Dog → Primary
 *
 */
interface DogSliceDefaultPrimary {
    /**
     * Title field in *Dog → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: dog.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Dog → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: dog.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Align Right field in *Dog → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: dog.primary.align_right
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    align_right: prismicT.BooleanField;
}
/**
 * Item in Dog → Items
 *
 */
export interface DogSliceDefaultItem {
    /**
     * Dog Photo field in *Dog → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: dog.items[].dog_photo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    dog_photo: prismicT.ImageField<never>;
}
/**
 * Default variation for Dog Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Dog`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DogSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<DogSliceDefaultPrimary>, Simplify<DogSliceDefaultItem>>;
/**
 * Slice variation for *Dog*
 *
 */
type DogSliceVariation = DogSliceDefault;
/**
 * Dog Shared Slice
 *
 * - **API ID**: `dog`
 * - **Description**: `Dog`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DogSlice = prismicT.SharedSlice<"dog", DogSliceVariation>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * Title field in *Hero → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Hero → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.TitleField;
    /**
     * Background field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.background
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background: prismicT.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Information → Primary
 *
 */
interface InformationSliceDefaultPrimary {
    /**
     * Title field in *Information → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: information.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Information → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: information.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Information → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: information.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Image right field in *Information → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: true
     * - **API ID Path**: information.primary.image_right
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    image_right: prismicT.BooleanField;
}
/**
 * Default variation for Information Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Information`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InformationSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<InformationSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Information*
 *
 */
type InformationSliceVariation = InformationSliceDefault;
/**
 * Information Shared Slice
 *
 * - **API ID**: `information`
 * - **Description**: `Information`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InformationSlice = prismicT.SharedSlice<"information", InformationSliceVariation>;
/**
 * Primary content in Puppies → Primary
 *
 */
interface PuppiesSliceDefaultPrimary {
    /**
     * Title field in *Puppies → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: puppies.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in Puppies → Items
 *
 */
export interface PuppiesSliceDefaultItem {
    /**
     * Puppy image field in *Puppies → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: puppies.items[].puppy_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    puppy_image: prismicT.ImageField<never>;
}
/**
 * Default variation for Puppies Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Puppies`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PuppiesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PuppiesSliceDefaultPrimary>, Simplify<PuppiesSliceDefaultItem>>;
/**
 * Slice variation for *Puppies*
 *
 */
type PuppiesSliceVariation = PuppiesSliceDefault;
/**
 * Puppies Shared Slice
 *
 * - **API ID**: `puppies`
 * - **Description**: `Puppies`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PuppiesSlice = prismicT.SharedSlice<"puppies", PuppiesSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, BannerSliceDefaultPrimary, BannerSliceDefault, BannerSliceVariation, BannerSlice, DogSliceDefaultPrimary, DogSliceDefaultItem, DogSliceDefault, DogSliceVariation, DogSlice, HeroSliceDefaultPrimary, HeroSliceDefault, HeroSliceVariation, HeroSlice, InformationSliceDefaultPrimary, InformationSliceDefault, InformationSliceVariation, InformationSlice, PuppiesSliceDefaultPrimary, PuppiesSliceDefaultItem, PuppiesSliceDefault, PuppiesSliceVariation, PuppiesSlice };
    }
}
