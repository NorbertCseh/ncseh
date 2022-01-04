import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NorbertCseh</title>
        <meta name="description" content="Norbert Istvan Cseh personal website created with Nextjs" />
        <link rel="icon" href="/me.jpg" />
      </Head>

      <main className={styles.main}>
        <Image src="/me.jpg" alt="Norbert Cseh in sleep" className={styles.imgaboutme} width={200} height={200} />
        <div className={styles.infocontainer}>
          <h1>Hi, I&apos;m Norbert Istvan Cseh.</h1>
          <h3>Software developer engineer in Test at <a href="https://www.logmein.com/" target="_blank" rel="noreferrer">LogMeIn</a></h3>
          <p>
            Slowly figuring out web development.
          </p>
          <p>
            You can find my personal GitHub profile <a href="https://github.com/NorbertCseh" target="_blank" rel="noreferrer">Here.</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
