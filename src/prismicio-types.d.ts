// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Boxes → Boxes_group*
 */
export interface BoxesDocumentDataBoxesGroupItem {
  /**
   * block_size field in *Boxes → Boxes_group*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 0
   * - **API ID Path**: boxes.boxes_group[].block_size
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  block_size: prismic.SelectField<"0" | "1" | "2" | "full", "filled">;

  /**
   * page_tagline field in *Boxes → Boxes_group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: boxes.boxes_group[].page_tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  page_tagline: prismic.KeyTextField;

  /**
   * Page Title field in *Boxes → Boxes_group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: boxes.boxes_group[].page_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  page_title: prismic.KeyTextField;

  /**
   * page_desc field in *Boxes → Boxes_group*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: boxes.boxes_group[].page_desc
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  page_desc: prismic.RichTextField;

  /**
   * page_image field in *Boxes → Boxes_group*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: boxes.boxes_group[].page_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  page_image: prismic.ImageField<never>;

  /**
   * page_body field in *Boxes → Boxes_group*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: boxes.boxes_group[].page_body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  page_body: prismic.RichTextField;
}

type BoxesDocumentDataSlicesSlice = BoxSlice;

/**
 * Content for Boxes documents
 */
interface BoxesDocumentData {
  /**
   * Boxes_group field in *Boxes*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: boxes.boxes_group[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  boxes_group: prismic.GroupField<Simplify<BoxesDocumentDataBoxesGroupItem>>;

  /**
   * Slice Zone field in *Boxes*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: boxes.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BoxesDocumentDataSlicesSlice> /**
   * Meta Description field in *Boxes*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: boxes.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Boxes*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: boxes.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Boxes*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: boxes.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Boxes document from Prismic
 *
 * - **API ID**: `boxes`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BoxesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BoxesDocumentData>, "boxes", Lang>;

export type AllDocumentTypes = BoxesDocument;

/**
 * Primary content in *Box → Primary*
 */
export interface BoxSliceDefaultPrimary {
  /**
   * block_size field in *Box → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 0
   * - **API ID Path**: box.primary.block_size
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  block_size: prismic.SelectField<"0" | "1" | "2" | "full", "filled">;

  /**
   * tagline field in *Box → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: box.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * title field in *Box → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: box.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * desc field in *Box → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: box.primary.desc
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  desc: prismic.RichTextField;

  /**
   * image field in *Box → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: box.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * body field in *Box → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: box.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for Box Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoxSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BoxSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Box*
 */
type BoxSliceVariation = BoxSliceDefault;

/**
 * Box Shared Slice
 *
 * - **API ID**: `box`
 * - **Description**: Box
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoxSlice = prismic.SharedSlice<"box", BoxSliceVariation>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BoxesDocument,
      BoxesDocumentData,
      BoxesDocumentDataBoxesGroupItem,
      BoxesDocumentDataSlicesSlice,
      AllDocumentTypes,
      BoxSlice,
      BoxSliceDefaultPrimary,
      BoxSliceVariation,
      BoxSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
