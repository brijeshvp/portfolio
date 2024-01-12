import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Social } from "../typings";

// create GROQ query
const query = groq`
    *[_type == "social"]
`;

type Data = {
  socials: Social[];
};

export const fetchSocials = async () => {
    const socials : Social[] = await sanityClient.fetch(query);

    return socials;
}