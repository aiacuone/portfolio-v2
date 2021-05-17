import React from 'react'
import styles from '../styles/Details.module.scss'
import Head from 'next/head'

export default function detailsCheapshark() {
	return (
		<div className="container">
			{' '}
			<Head>
				<title>Cheapshark Details</title>
			</Head>
			<a className="back_button" onClick={() => window.history.back()}>
				Back
			</a>
			<h3 className={styles.title}>Cheapshark: More Details</h3>
			<p className={styles.text}>
				<b>Why did I create this project?</b>
				<br />
				I wanted to incorporate the use of JSON files, as well as an API. I've
				learnt that both JSON files and API's play a large part in the industry
				and should be a tool in every Software Developers kit.
				<br />
				<br />
				<b>What did I learn creating this project?</b>
				<br />
				How to use JSON files and API's. To give myself an additional challenge,
				I created my own multiple range slider. I see myself as a front-end
				developer, and I thought that a front end developer should be able to
				create a multiple range slider
				<br />
				<br />
				<b>What was the hardest part of this project?</b>
				<br />
				Create the desired outcome with a restricted API. I found that public
				API's are not always free, aren not always easy to use and are not
				always versatile. For example, I wanted the API offers the ability to
				filter results using multiple attributes such as price, and amount of
				reviews, however it does not allow the ability to filter based on
				release date. To achieve the desired result, I needed to implement API
				filtering, as well as local filtering using Javascript code.
				<br />
				<br />
			</p>
		</div>
	)
}
