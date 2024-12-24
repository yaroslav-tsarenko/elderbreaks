import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { UserProvider } from '@/utils/UserContext';
import {BACKEND_URL} from "@/constants/url";

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

type WrappedComponentProps = {
    user: User;
};

export function authWrapper(Component: React.ComponentType<WrappedComponentProps>) {
    return async function WrappedComponent(props: Omit<WrappedComponentProps, 'user'>) {
        const cookieStore = await cookies();
        const token = cookieStore.get('app_session')?.value;

        if (!token) {
            redirect('/auth/login');
            return null;
        }

        const response = await fetch(`${BACKEND_URL}/user/getUser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            redirect('/auth/login');
            return null;
        }

        const user: User = await response.json();

        return (
            <UserProvider user={user}>
                <Component {...props} user={user} />
            </UserProvider>
        );
    };
}