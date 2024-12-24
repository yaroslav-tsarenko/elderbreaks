'use client';

import axios from 'axios';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {BACKEND_URL} from '@/constants/url';
import {useUserContext} from '@/utils/UserContext';

export default function Callback() {

    const router = useRouter();
    const {setUser} = useUserContext();

    useEffect(() => {
        const handleAuthCallback = async () => {
            const searchParams = new URLSearchParams(window.location.search);
            const token = searchParams.get('token');
            if (!token) {
                router.push('/');
                return;
            }

            try {
                const response = await axios.get(`${BACKEND_URL}/user/getUser`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                });
                console.log(token);
                console.log("data user:", response.data);
                setUser(response.data.user);
                router.push('/account');
            } catch (error) {
                console.error('Authorization error:', error);
                router.push('/');
            }
        };

        handleAuthCallback();
    }, [router, setUser]);

    return <div>Processing...</div>;
}