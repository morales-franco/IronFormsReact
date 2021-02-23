import { Country } from "../../../../models/country";

export interface Props {
  countries: Country[];
}

export interface UserRegistrationFormData  {
    name: string;
    surname: string;
    username:string;
    email: string;
    emailConfirmation: string;
    countryId: number;
    genderId: string;
    comment: string;
    hasGitHub: boolean;
  };

