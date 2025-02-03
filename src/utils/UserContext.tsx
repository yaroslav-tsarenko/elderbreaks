'use client';

import React, { createContext, useContext } from 'react';
export type User = {
    _id: string;
    username: string;
    discordId: string;
    kick_username: string;
    discordAuth: boolean;
    email: string;
    points: number;
    role: 'admin' | 'user' | 'editor';
    dateAdded: string;
    avatarUrl: string;
    registerDate: string;
    statusLink: boolean;
    __v: number;
};
export const UserContext = createContext<User | undefined>(undefined);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ user, children }: { user: User; children: React.ReactNode }) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
