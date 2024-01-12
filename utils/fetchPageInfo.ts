import {groq} from "next-sanity"
import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";

// create GROQ query
const query = groq`
    *[_type == "pageInfo"][0]
`

type Data = {
    pageInfo: PageInfo
}

export const fetchPageInfo = async () => {
    const pageInfo : PageInfo = await sanityClient.fetch(query);

    return pageInfo;
}