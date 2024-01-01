import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'
import { DarkLayout } from '../../layouts/DarkLayout';
import { ReactElement } from 'react';
const ContactPage = () => {
  return (
    <>
      <h1>Contact Page</h1>

      <h1 className='title'>
        Go to <Link href="/">Home</Link>
      </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/Contact.js</code>
      </p>
    </>

  )
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return (<MainLayout>
    <DarkLayout>{page}</DarkLayout>
  </MainLayout >)
}
export default ContactPage;
