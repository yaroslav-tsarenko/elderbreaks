'use client';
import React, { createContext, useContext } from 'react';
type User = {
    _id: string;
    discordId: string;
    discordAuth: string;
    email: string;
    name: string;
    wallet: string;
    role: string;
    joined: string;
    ethAddress: string;
    btcAddress: string;
    username: string;
    stakeUsername: string;
};
export const UserContext = createContext<User | undefined>(undefined);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ user, children }: { user: User; children: React.ReactNode }) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
