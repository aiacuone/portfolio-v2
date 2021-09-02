import React from 'react'
import Head from 'next/head'
import styles from '../styles/Projects.module.scss'
import cheapshark from '../images/cheapsharkLogo.jpg'
import freecodecamp from '../images/freecodecampLogo.svg'
import tekkenNet from '../images/tekkennetLogo.svg'
import noteTaker from '../images/noteTakerLogo.svg'
import Link from 'next/link'

export default function projects() {
  return (
    <div className="container">
      <Head>
        <title>Projects - A.Iacuone</title>
      </Head>
      <a className="back_button" onClick={() => window.history.back()}>
        Back
      </a>
      <h2 className={styles.title}>PROJECTS</h2>
      <p className={styles.p}>
        These are my personal projects that I created independently. Click on
        the picture to view them.
      </p>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/tekkenNet">
            <img src={tekkenNet} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/noteTaker">
            <img src={noteTaker} className={styles.icon} />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/cheapshark">
            <img src={cheapshark} className={styles.icon} />
          </Link>
        </li>

        <li className={styles.li}>
          <Link href="/freecodecamp">
            <img src={freecodecamp} className={styles.icon} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
