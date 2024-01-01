import React, { FC } from 'react'
import styles from '../layouts/MainLayout.module.css'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Props } from '../interfaces/interface'




export const MainLayout: FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Aboutb - Yaniel</title>
                <meta name="description" content="Home App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>

        </div>
    )
}
