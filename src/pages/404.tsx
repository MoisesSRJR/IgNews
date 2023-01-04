import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';

export default function NotFoundPage() {
    const { push } = useRouter();

    useEffect(() => {
        push('/');
    }, [push]);

    return <Fragment></Fragment>;
}
