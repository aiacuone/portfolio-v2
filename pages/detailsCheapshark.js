import React from 'react'
import styles from '../styles/Details.module.scss'
import Head from 'next/head'

export default function detailsCheapshark() {
  return (
    <div className="container">
      <Head>
        <title>Cheapshark Details</title>
      </Head>
      <a className="back_button" onClick={() => window.history.back()}>
        Back
      </a>
      <h3 className={styles.title}>Cheapshark: More Details</h3>
      <p className={styles.text}>
        <b>Why did I create this project?</b>
        <br />
        To gain experience using JSON files and REST API's. Both JSON files and
        API's play a large part in the industry and should be a tool in every
        Software Developers kit.
        <br />
        <br />
        <b>What did I learn creating this project?</b>
        <ul>
          <li>API's</li>
          <li>JSON files</li>
          <li>Async/Await functions</li>
          <li>Material UI drawer component</li>
          <li>React Resize Detector</li>
          <li>Lodash - Find, Debounce</li>
        </ul>
        <b>What challenges did I face creating this project?</b>
        <br />
        Implementing a system that has different ways of filtering for
        information. The API that im using for the project is not as versatile
        as it can be, for example the API does not allow for filtering based on
        release date, to rectify the issue I have allowed for local filtering,
        without the use of the API, and when the list of games filtered goes
        below a particular value, the app automatically fetches new results
        which then get added to the list. Due to the project being largely based
        on an API, it was important that I had full control over the functions I
        was using, therefore Async/Await functions were essential.
        <br />
        <br />
      </p>
    </div>
  )
}
