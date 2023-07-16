export interface JobProps {
    id?: number;
    company: string;
    logo: string;
    new: boolean;
    isNew?: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}

export interface ContextProps {
    jobsArray: JobProps[];
    setJobsArray: any
}