import {groq} from "next-sanity"
import { sanityClient } from "../sanity";
import { Skill } from "../typings";

// create GROQ query
const query = groq`
    *[_type == "skill"]
`

type Data = {
    skills: Skill[]
}

export const fetchSkills = async () => {
    const skills : Skill[] = await sanityClient.fetch(query);

    return skills;
}