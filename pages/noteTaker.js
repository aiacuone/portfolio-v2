import React from 'react'
import Head from 'next/head'
import styles from '../styles/Project.module.scss'
import Link from 'next/link'
import react from '../images/reactLogo.svg'
import javascript from '../images/javascriptLogo.svg'
import css from '../images/css.svg'
import html from '../images/html.svg'
import illustrator from '../images/illustrator.svg'

export default function noteTaker() {
	return (
		<div className="container">
			<Head>
				<title>Note Taker</title>
			</Head>
			<a className="back_button" onClick={() => window.history.back()}>
				Back
			</a>
			<h2 className={styles.title}>NOTE TAKER</h2>
			<div className={styles.subContainer}>
				<h3>Summary</h3>
				<p>
					An application that gives the user the ability to Add, Delete and Edit
					Notes. The notes can be in multiple forms, such as text, images, videos. The notes can also be stored within folders that can be named and coloured for easy and efficient access.
				</p>
				<h3>Date Completed</h3>
				<p>April, 2021</p>
				<h3>Languages & Applications</h3>
				<ul>
					<li className={styles.li}>
						<img src={react} className={styles.icon} />
						React
					</li>
					<li className={styles.li}>
						<img src={javascript} className={styles.icon} />
						Javascript
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
