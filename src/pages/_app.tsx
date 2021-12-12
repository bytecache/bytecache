import '../styles/globals.css'
import type {AppProps} from 'next/app'
import classNames from "classnames";
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import {useState} from 'react';


function MyApp({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient())

    return <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            <header className={'layout-header'}>
                <main
                    className={classNames('max-w-screen-md', 'md:max-w-screen-xl', 'mx-auto', 'flex', 'items-center', 'justify-center', 'h-20')}>
                    <img className={classNames('shrink-0', 'w-{20}', 'h-{20}')} src="/Heart.png" alt=""/>
                    <ul className={classNames('flex', 'grow')}>
                        <li className={'ml-2.5'}>首页</li>
                        <li className={'ml-2.5'}>资源</li>
                        <li className={'ml-2.5'}>反馈</li>
                    </ul>
                    <ul className={'flex'}>
                        <li className={'ml-2.5'}>笔记</li>
                        <li className={'ml-2.5'}>用途</li>
                        <li className={'ml-2.5'}>关于</li>
                    </ul>
                </main>
            </header>
            <main className={'layout-main'}>
                <Component {...pageProps} />
            </main>
            <footer className={classNames('layout-footer')}>
                <main
                    className={classNames('max-w-screen-md', 'md:max-w-screen-xl', 'mx-auto', 'text-center', 'h-20', 'flex', 'items-center', 'justify-center')}>
                    <a
                        className={'text-brand2'}
                        href="https://github.com/bytecache"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by ByteCache
                    </a>
                </main>
            </footer>
        </Hydrate>
    </QueryClientProvider>
}

export default MyApp
