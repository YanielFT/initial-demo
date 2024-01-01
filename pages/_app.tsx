import { NextPage } from 'next'
import '../styles/globals.css'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element
}

type AppPropsWirhLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWirhLayout) {

  const getLayout = Component.getLayout || ((page) => page)

//  return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)

}

export default MyApp
