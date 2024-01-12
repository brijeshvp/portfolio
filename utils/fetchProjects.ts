import {groq} from "next-sanity"
import { sanityClient } from "../sanity";
import { Project } from "../typings";

// create GROQ query
const query = groq`
    *[_type == "project"]{
        ...,
        technologies[] ->
    }
`
type Data = {
    projects: Project[]
}

export const fetchProjects = async () => {
    const projects : Project[] = await sanityClient.fetch(query);

    return projects;
}