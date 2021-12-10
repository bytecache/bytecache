import '../styles/globals.css'
import type {AppProps} from 'next/app'
import classNames from "classnames";

function MyApp({Component, pageProps}: AppProps) {
    return <>
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
        <Component {...pageProps} />
    </>
}

export default MyApp
