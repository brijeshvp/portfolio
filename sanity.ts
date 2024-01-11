// helper file for fetching info from sanity cms using GROQ query language

import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2023-01-14",
    useCdn: process.env.NODE_ENV === "production",
}

// set up the client for fetching sanity data in the getProps page functions
export const sanityClient = createClient(config);

// helper fn to fetch images from sanity cms
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)