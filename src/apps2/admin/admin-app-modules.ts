import { PublicApp } from "@mongez/react-router";

export const adminApp: PublicApp = {
    name: "admin",
    path: "/admin",
    modules: [
        {
            name: "account",
            entry: ["/login"]
        }
    ]
};
