import { BACKEND_URL } from '@/constants/url';
import { UserProvider } from './UserContext';
import { cookies } from 'next/headers';

export function authWrapper(Component: React.ComponentType<any>) {
    //Врапером треба обгорнути компонент, на якому ми хочемо мати доступ до контексту
    return async function WrappedComponent(props: any) {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        const response = await fetch(`${BACKEND_URL}/user/getUser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: 'no-store',
        });


        const user = await response.json();

        return (
            <UserProvider user={user.user}>
                <Component {...props} />
            </UserProvider>
        );
    };
}