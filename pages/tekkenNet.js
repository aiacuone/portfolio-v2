import React from 'react'
import Head from 'next/head'
import styles from '../styles/Project.module.scss'
import Link from 'next/link'

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
				<h3>Languages</h3>
				<p>React, Javascript, HTML, CSS</p>
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
