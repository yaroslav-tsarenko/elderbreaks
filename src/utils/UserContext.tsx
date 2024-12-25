
'use client';
import React, { createContext, useContext } from 'react';
export type User = {
    _id: string;
    username: string;
    discordId: string;
    discordAuth: boolean;
    email: string;
    role: 'admin' | 'user';
    dateAdded: string;
    __v: number;
};
export const UserContext = createContext<User | undefined>(undefined);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ user, children }: { user: User; children: React.ReactNode }) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
