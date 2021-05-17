import React from 'react'
import Head from 'next/head'
import styles from '../styles/Project.module.scss'
import Link from 'next/link'

export default function cheapshark() {
	return (
		<div className='container'>
			<Head>
				<title>Cheapshark</title>
			</Head>
			<a className="back_button" onClick={()=>window.history.back()}>
				Back
			</a>
			<h2 className={styles.title}>CHEAPSHARK</h2>
			<div className={styles.subContainer}>
				<h3>Summary</h3>
				<p>
					This App is demonstrating the use of fetching data from an API,
					specifically game deals across various online stores.
				</p>
				<h3>Languages</h3>
				<p>React, Javascript, HTML, CSS</p>
				<h3>Skills</h3>
				<p>Loops, Arrays, Array Methods, Objects, Object methods, Functions</p>
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
