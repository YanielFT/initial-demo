
import { ReactElement } from 'react'
import { DarkLayout } from '../layouts/DarkLayout'
import { MainLayout } from '../layouts/MainLayout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>

      <h1>Home Page</h1>

      <h1 className="title">
        Go to <Link href="/about">About</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className='code'>pages/index.js</code>
      </p>

    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (<MainLayout>
    <DarkLayout>{page}</DarkLayout>
  </MainLayout >)
}