import React from 'react'
import styles from '../styles/Details.module.scss'
import Head from 'next/head'


export default function detailsFreecodecamp() {
	return (
		<div className="container">
			<Head>
				<title>Freecodecamp Details</title>
			</Head>
			<a className="back_button" onClick={() => window.history.back()}>
				Back
			</a>
			<h3 className={styles.title}>Freecodecamp: More Details</h3>

			<p className={styles.text}>
				<b>Why did I use Freecodecamp?</b>
				<br />
				I have multiple close friends that are software developers, they all
				recommended me to use freecodecamp. Whilst I've never tried another
				bootcamp, I'm very confident that freecodecamp is high quality and very
				happy with my choice.
				<br />
				<br />
				<b>What did I learn creating this project?</b>
				<br />
				The foundation of Javascript, React, CSS, HTML and SASS
				<br />
				<br />
				<b>What was the hardest part of Freecodecamp</b>
				<br />
				The Javascript algorithms were challenging. At times, there were times
				that I felt like Freecodecamp did a very good job in leading you up to
				challenging exercises, and there we're times I felt like I was thrown in
				the deep end, resulting in hours of research.
				<br />
				<br />
			</p>
		</div>
	)
}
