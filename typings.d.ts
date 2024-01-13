// common type definitions for all below type defintions
interface SanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

// for images
interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

// for pageInfo
export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

// for technologies known and to be used in work experience section as well
export interface Technology extends SanityBody{
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

// for skills same as above
export interface Skill extends SanityBody{
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

// for projects
export interface Project extends SanityBody{
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    linkToDocumentation: string;
    summary: string;
    technologies: Technology[];
}

// for work experience section
export interface Experience extends SanityBody{
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

// for social icons
export interface Social extends SanityBody{
   _type: "social";
   title: string;
   url: string; 
}
