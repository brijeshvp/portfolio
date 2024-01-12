import {groq} from "next-sanity"
import { sanityClient } from "../sanity";
import { Experience } from "../typings";

// create GROQ query
const query = groq`
    *[_type == "experience"]{
        ...,
        technologies[] ->
    }
`

type Data = {
    experiences: Experience[]
}


export const fetchExperiences = async () => {
    const experiences : Experience[] =  await sanityClient.fetch(query);

    return experiences;
}