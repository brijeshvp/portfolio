import { Experience } from "../typings";

export const fetchExperiences = async () => {
    // make call to backend(pages/api) to fetch results
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const data = await res.json();

    const experiences : Experience[] = data.experiences;

    return experiences;
}