import React from 'react'
import styles from '../styles/Details.module.scss'
import Head from 'next/head'

export default function detailsAboutMe() {
  return (
    <div className="container">
      <Head>
        <title>My Story</title>
      </Head>
      <a className="back_button" onClick={() => window.history.back()}>
        Back
      </a>
      <h3 className={styles.title}>My Story</h3>
      <p className={styles.text}>
        My love for computers goes back further than I can remember. I've always
        been drawn to anything with buttons and a screen. I've always had a
        passion for Software Development, and after I graduated from high
        school, I took part in a Web Development course.
        <br /> <br />
        This was in 2006, Myspace was beginning to fade, Facebook had just
        started taking off, Youtube had just been created and the world of
        Software Development wasn't the industry it is today. <br />
        <br />
        The general consensus at the time was that Software Development was a
        risky industry to pursue, and instead it was advised to get a job with
        better security and steady income. As a result, I put my focus into
        being an electrician, which in Australia is considered respectable.
        <br />
        <br />
        Time has passed, times have changed and I wish to finish what I started.
        <br />
        <br />I am friendly, hard working, self motivated and eager to learn. My
        experience thus far will show that I can work with all levels of staff,
        in high pressured environments and can provide leadership as needed. I'm
        coming from a technical background, which will act as a catalyst for me
        to grow in this industry.
      </p>
    </div>
  )
}
