import React from 'react'
import Head from 'next/head'
import styles from '../styles/Project.module.css'
import Link from 'next/link'

export default function noteTaker() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Note Taker</title>
			</Head>
			<Link href="/projects">
				<a className={styles.back}>Back</a>
			</Link>
			<h2 className={styles.title}>NOTE TAKER</h2>
			<div className={styles.subContainer}>
				<h3>Summary</h3>
				<p>
					An application that gives the user the ability to Add, Delete and Edit
					Notes and Folders. Note Taker uses constructors to create the Notes
					and Folders, and using Lodash, places the data into the correct
					location.
				</p>
				<h3>Languages</h3>
				<p>React, Javascript, HTML, CSS</p>
				<h3>Skills</h3>
				<p>
					Lodash React Library, Objects, Object Methods, Arrays, Array Methods,
					Event Handlers, useEffect Hook, useRef Hook, useState Hook, SunEditor
					React Library, Timeouts.
				</p>
			</div>
			<Link href="/detailsNoteTaker">
				<button className={styles.button}>More Details</button>
			</Link>
			<div className={styles.noteTaker} />

			<div className={styles.buttonContainer}>
				<a href="https://aiacuone-note-taker.netlify.app/" target="_blank">
					<button className={styles.button}>View</button>
				</a>
				<a href="https://github.com/aiacuone/Note-Taker" target="_blank">
					<button className={styles.button}>Github</button>
				</a>
			</div>
		</div>
	)
}
