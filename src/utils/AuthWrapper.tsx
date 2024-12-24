import { cookies } from 'next/headers';
import { UserProvider } from '@/utils/UserContext';
import { BACKEND_URL } from '@/constants/url';
import axios from 'axios';

export function authWrapper(Component: React.ComponentType<Record<string, unknown>>) {
    return async function WrappedComponent(props: Record<string, unknown>) {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        if (!token) {
            return (
                <UserProvider initialUser={undefined}>
                    <Component {...props} />
                </UserProvider>
            );
        }

        try {
            const response = await axios.get(`${BACKEND_URL}/user/getUser`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            const user = response.data.user;

            return (
                <UserProvider initialUser={user}>
                    <Component {...props} />
                </UserProvider>
            );
        } catch (error) {
            console.error('Fetch error:', error);
            return (
                <UserProvider initialUser={undefined}>
                    <Component {...props} />
                </UserProvider>
            );
        }
    };
}