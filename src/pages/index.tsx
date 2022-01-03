import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NorbertCseh</title>
        <meta name="description" content="Norbert Cseh Istvan personal website created with nextjs" />
        <link rel="icon" href="/me.jpg" />
      </Head>

      <main className={styles.main}>
        <Image src="/me.jpg" alt="Norbert Cseh in sleep" className={styles.imgaboutme} width={200} height={200} />
        <div className={styles.infocontainer}>
          <h1 className='text-3xl font-bold'>Hi, I'm Norbert Istvan Cseh.</h1>
          <h3 className='text-xl'>Software developer engineer in Test at <a href="https://www.logmein.com/">LogMeIn</a></h3>
        </div>
      </main>
    </div>
  )
}

export default Home
