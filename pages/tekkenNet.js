import React from 'react'
import Head from 'next/head'
import styles from '../styles/Project.module.scss'
import Link from 'next/link'
import react from '../images/reactLogo.svg'
import javascript from '../images/javascriptLogo.svg'
import css from '../images/css.svg'
import html from '../images/html.svg'
import illustrator from '../images/illustrator.svg'
import materialUi from '../images/materialUiLogo.svg'
import next from '../images/next.svg'

export default function tekkenNet() {
  return (
    <div className="container">
      <Head>
        <title>Tekken Net</title>
      </Head>
      <a className="back_button" onClick={() => window.history.back()}>
        Back
      </a>
      <h2 className={styles.title}>TEKKEN NET</h2>
      <div className={styles.subContainer}>
        <h3>Summary</h3>

        <p>
          Tekken, a game created 18+ years ago, with 50+ characters, each
          character having 80+ moves, with each move having their own
          characteristics and attributes. Tekken-Net provides and easy to use
          platform, with various ways to filter and search any move you wish.
        </p>
        <h3>Last Updated</h3>
        <p>September, 2021</p>
        <h3>Languages & Applications</h3>
        <ul>
          <li className={styles.li}>
            <img src={react} className={styles.icon} />
            React
          </li>
          <li className={styles.li}>
            <img src={javascript} className={styles.icon} />
            JavaScript
          </li>
          <li className={styles.li}>
            <img src={next} className={styles.icon} />
            Next JS
          </li>
          <li className={styles.li}>
            <img src={materialUi} className={styles.icon} />
            Material UI
          </li>

          <li className={styles.li}>
            <img src={css} className={styles.icon} />
            CSS
          </li>
          <li className={styles.li}>
            <img src={html} className={styles.icon} />
            HTML
          </li>
          <li className={styles.li}>
            <img src={illustrator} className={styles.icon} />
            Adobe Illustrator
          </li>
        </ul>

        <h3>Skills</h3>
        <p>
          Regex, Loops, Arrays, Array Methods, Objects, Object methods,
          Functions
        </p>
      </div>
      <Link href="/detailsTekkenNet">
        <button className={styles.button}>More Details</button>
      </Link>
      <div className={styles.tekken} />

      <div className={styles.buttonContainer}>
        <a href="https://aiacuone-tekkenet.netlify.app/" target="_blank">
          <button className={styles.button}>View</button>
        </a>
        <a href="https://github.com/aiacuone/Tekkenet" target="_blank">
          <button className={styles.button}>Github</button>
        </a>
      </div>
    </div>
  )
}
