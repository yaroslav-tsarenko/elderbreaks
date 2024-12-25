'use client';
import axios from "axios"
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {BACKEND_URL} from "@/constants/url";

export default function Callback() {
    const router = useRouter();

    useEffect(() => {
        const handleAuthCallback = async () => {

            const searchParams = new URLSearchParams(window.location.search);
            const token = searchParams.get('token');
            console.log(searchParams);
            if (!token) {
                router.push('/auth/login');
                return;
            }

            try {

                await axios.get(`${BACKEND_URL}/user/getUser`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                });
                router.push('/account');

            } catch (error) {
                console.error('Authorization error:', error);
                router.push('/auth/login');
            }
        };

        handleAuthCallback();
    }, [router]);

    return <div>Processing...</div>;
}
