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
				To gain experience using JSON files and REST API's.
				I've learnt that both JSON files and API's play a large part in the
				industry and should be a tool in every Software Developers kit.
				<br />
				<br />
				<b>What did I learn creating this project?</b>
				<br />
				How to use JSON files and a REST API. To give myself an additional
				challenge, I created multiple range sliders from scratch, which can be found at
				the top of the application.
				<div className={styles.sliders} />
				To achieve this, I could have implemented ready made multiple range
				sliders from a library like Bootstrap, but instead created my own.
				<br />
				<br />
				<b>What was the hardest part of this project?</b>
				<br />
				To create the desired outcome with a restricted API. Whilst creating
				this application, I learnt API's are not always free,
				easy to use and are not always versatile. For example, I wanted to use
				the API to filter by the games release date, however it was not
				possible by only using the API. To achieve this, I
				needed to implement JavaScript code filtering. As a result, the final
				product is a hybrid between JavaScript filtering and API filtering.
				<br />
				<br />
			</p>
		</div>
	)
}
