import { Roboto } from 'next/font/google'
import React, { Suspense, useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
})

const Header = React.lazy(() => import("child1/header"))
export default function App({ Component, pageProps }: AppProps) {
  return (

    <main className={`${roboto.className}`}>
      <h2>Shell App (Next 13 PORT 8080)</h2>

      <Suspense fallback={<div>loading...</div>}><Header /></Suspense>
      <Component {...pageProps} />
      
      
    </main>
  )
}