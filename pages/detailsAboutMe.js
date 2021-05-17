import React from 'react'
import styles from '../styles/Details.module.scss'
import Head from 'next/head'
import Link from 'next/link'

export default function detailsAboutMe() {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Story</title>
			</Head>
			<Link href="/">
				<a className={styles.back}>Back</a>
			</Link>
			<h3 className={styles.title}>My Story</h3>
			<p className={ styles.text}>
				My love for computers goes further back than I can remember. I've always
				been drawn to anything with buttons and a screen. I always had a passion
				for Software Development, and after I graduated from high school, I took
				part in a Web Development course.
				<br /> <br />
				This was in 2006, myspace was beginning to fade, facebook had just
				started taking off, youtube had just been created and the world Software
				Development wasn't an industry that it is today. <br />
				<br />
				The consensus was that if you couldn't see yourself doing anything else,
				then keep going, however if you want to a healthy amount of money and job security, this
				wasn't the direction to go. As a result, I put my focus into being an
				electrician, which in Australia is a relatively high paying job.
				<br />
				<br />
				Time has passed, times have changed and I wish to finish what I started.
				<br />
				<br />I am friendly, hard working, self motivated and eager to learn. I
				understand what it is be a junior, and I also understand what is it be a
				senior having people work under you. I'm already coming from a
				technical background, which I think can only be a catalyst for me to
				grow in this industry.
			</p>
		</div>
	)
}
