export interface JwtPayload {
    username?: string;
    email: string;
}


export interface LoginStatus {
    username: string;
    email: string;
    accessToken: any;
    expiresIn: any;
}


export interface RegistrationStatus {
    success: boolean;
    message: string;
}

export interface SocialProfile {
    id: string;
    name: { familyName: string, givenName: string, middleName: string };
    emails: { value: string }[];
    photos: { value: string }[];
    provider: "facebook" | "google";
}

// export interface GoogleProfile {
//     id: string;
//     name: { familyName: string, givenName: string, middleName: string };
//     emails: { value: string }[];
//     photos: { value: string }[];
// }
