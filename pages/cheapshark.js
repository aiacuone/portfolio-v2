import React from 'react'
import Head from 'next/head'
import styles from '../styles/Project.module.scss'
import Link from 'next/link'
import react from '../images/reactLogo.svg'
import javascript from '../images/javascriptLogo.svg'
import css from '../images/css.svg'
import html from '../images/html.svg'
import illustrator from '../images/illustrator.svg'

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
				<h3>Date Completed</h3>
				<p>March, 2021</p>
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
					REST API's, Loops, Arrays, Array Methods, Objects, Object methods,
					Functions
				</p>
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
