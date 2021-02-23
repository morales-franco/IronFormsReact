import { Experience } from "./experience";

export interface User {
    name: string;
    surname: string;
    username:string;
    email: string;
    countryId: number;
    genderId: string;
    skills : string[];
    experiences : Experience[];
    comment: string;
}