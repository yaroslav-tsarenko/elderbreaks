'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

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

type UserContextType = {
    user: User | undefined;
    setUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}

export function UserProvider({ children, initialUser }: { children: React.ReactNode; initialUser?: User }) {
    const [user, setUser] = useState<User | undefined>(initialUser);

    useEffect(() => {
        if (!user && typeof window !== 'undefined') {
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}