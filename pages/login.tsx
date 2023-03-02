import Head from 'next/head'
import Image from 'next/image'

function Login() {
  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
      alt=''
        src="https://rb.gy/p2hphi"
        className="-z-10 !hidden opacity-60 sm:!inline"
        layout='fill'
      />
    </div>
  )
}

export default Login