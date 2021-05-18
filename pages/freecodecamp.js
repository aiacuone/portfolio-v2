import React from 'react'
import Head from 'next/head'
import styles from '../styles/Project.module.scss'
import Link from 'next/link'
import react from '../images/reactLogo.svg'
import javascript from '../images/javascriptLogo.svg'
import css from '../images/css.svg'
import html from '../images/html.svg'

export default function freecodecamp() {
	return (
		<div className="container">
			<Head>
				<title>Freecodecamp</title>
			</Head>
			<a className="back_button" onClick={() => window.history.back()}>
				Back
			</a>
			<h2 className={styles.title}>FREECODECAMP</h2>
			<div className={styles.subContainer}>
				<h3>Summary</h3>
				<p>
					Freecodecamp is a completely free online course that covers a broad
					range of areas in Software Development, in particular, Javascript. The
					course does a brilliant job in introducing the basics, before moving
					onto advanced areas.
				</p>
				<h3>Date Completed</h3>
				<p>February, 2021</p>
				<h3>Languages</h3>
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
				</ul>
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
				<a href="https://ibb.co/vVpgJz9" target="_blank">
					<button className={styles.button}>Certificate</button>
				</a>
			</div>
		</div>
	)
}
