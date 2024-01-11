import { Social } from "../typings";

export const fetchSocials = async () => {
    // make call to backend(pages/api) to fetch results
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await res.json();

    const socials : Social[] = data.socials;

    return socials;
}