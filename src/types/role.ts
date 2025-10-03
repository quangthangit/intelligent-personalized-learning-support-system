export interface Role {
    id : string,
    name : "ROLE_USER" | "ROLE_ADMIN" | "ROLE_GUEST",
    description : string,
}