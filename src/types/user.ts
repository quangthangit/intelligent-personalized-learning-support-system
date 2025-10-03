import { Role } from "./role";

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    roles: Role[];
    accessToken: string;
    refreshToken: string;
    avatarUrl?: string;
    bannerUrl?: string;
    createdAt: Date;
    updatedAt?: Date;
    activated: boolean;
}