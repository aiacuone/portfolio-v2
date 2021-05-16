import React from 'react'
import Head from 'next/head'
import styles from '../styles/Project.module.css'
import Link from 'next/link'

export default function freecodecamp() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Freecodecamp</title>
			</Head>
			<Link href="/projects">
				<a className={styles.back}>Back</a>
			</Link>
			<h2 className={styles.title}>FREECODECAMP</h2>
			<div className={styles.subContainer}>
				<h3>Summary</h3>
				<p>
					Freecodecamp is a completely free online course that covers a broad
					range of areas in Software Development, in particular, Javascript. The
					course does a brilliant job in introducing the basics, before moving
					onto advanced areas.
				</p>
				<h3>Languages</h3>
				<p>React, Javascript, HTML, CSS</p>
				<h3>Skills</h3>
				<p>
					Regex, Loops, Arrays, Array Methods, Objects, Object methods,
					Functions. Please Refer to freecodecamp notes for all skills learnt.
				</p>
			</div>
			<Link href="/detailsFreecodecamp">
				<button className={styles.button}>More Details</button>
			</Link>
			<div className={styles.freecodecamp} />

			<div className={styles.buttonContainer}>
				<a
					href="https://freecodecamp-notes-portfolio.netlify.app/"
					target="_blank">
					<button className={styles.button}>View</button>
				</a>
			</div>
		</div>
	)
}
