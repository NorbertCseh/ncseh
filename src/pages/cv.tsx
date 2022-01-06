import type { NextPage } from 'next'
import styles from '../styles/Cv.module.css'

const CV: NextPage = () => {
  return (
    <div className={styles.cvpage}>
      <div className={styles.leftsection}>Left</div>
      <div className={styles.rightsection}>Right</div>
    </div>
  )
}

export default CV;
