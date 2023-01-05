import type { AppProps } from 'next/app';
import { Header } from '../common/components/Header';
import './App.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}
