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
import lodash from '../images/lodash.svg'

export default function cheapshark() {
  return (
    <div className="container">
      <Head>
        <title>Cheapshark</title>
      </Head>
      <a className="back_button" onClick={() => window.history.back()}>
        Back
      </a>
      <h2 className={styles.title}>CHEAPSHARK</h2>
      <div className={styles.subContainer}>
        <h3>Summary</h3>
        <p>
          This App is demonstrating the use of fetching data from a REST API,
          specifically game deals across various online stores.
        </p>
        <h3>Last Updated</h3>
        <p>October, 2021</p>
        <h3>Languages, Libraries & Applications</h3>
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
            <img src={lodash} className={styles.icon} />
            Lodash
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
        <ul>
          <li>API's</li>
          <li>JSON files</li>
          <li>Async/Await functions</li>
          <li>Material UI drawer component</li>
          <li>React Resize Detector</li>
          <li>Lodash - Find, Debounce</li>
        </ul>
      </div>
      <Link href="/detailsCheapshark">
        <button className={styles.button}>More Details</button>
      </Link>
      <div className={styles.cheapshark} />

      <div className={styles.buttonContainer}>
        <a href="https://aiacuone-cheapshark-api.netlify.app/" target="_blank">
          <button className={styles.button}>View</button>
        </a>
        <a href="https://github.com/aiacuone/Cheapshark" target="_blank">
          <button className={styles.button}>Github</button>
        </a>
      </div>
    </div>
  )
}
