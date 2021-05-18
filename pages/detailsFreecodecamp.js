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
				I was advised by close friends that work in the industry, that
				Freecodecamp was a solid choice, and after months of using Freecodecamp I agree.
				<br />
				<br />
				<b>What did I learn creating this project?</b>
				<br />
				The foundation of Javascript, React, CSS, HTML and SASS
				<br />
				<br />
				<b>What was the hardest part of Freecodecamp</b>
				<br />
				The Javascript algorithms were challenging. There were times
				that I felt like Freecodecamp did a very good job in leading you up to
				challenging exercises, and there we're times I felt like I was thrown in
				the deep end, resulting in hours of research.
			</p>
		</div>
	)
}
