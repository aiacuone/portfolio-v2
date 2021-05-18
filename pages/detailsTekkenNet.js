import React from 'react'
import styles from '../styles/Details.module.scss'
import Head from 'next/head'

export default function detailsTekkenNet() {
	return (
		<div className="container">
			<Head>
				<title>Tekken Net Details</title>
			</Head>
			<a className="back_button" onClick={() => window.history.back()}>
				Back
			</a>
			<h3 className={styles.title}>Tekken Net: More Details</h3>
			<p className={styles.text}>
				My first ever project, which I'm very proud of. A tip I was given when
				starting Software Development, was that you're not going to become a
				good developer by just watching tutorials. The way to become a good
				developer, is to focus in on a problem or idea that you have, and dive
				straight into the code, experimenting with how a computer can achieve
				your desired outcome.
				<br />
				<br />
				<b>Why did I create this project?</b>
				<br />
				Being a passionate Tekken player, I take a large amount of notes to
				constantly improve my game. Tekken has 50+ characters, each character
				having 80+ moves, all those moves having their own attributes and
				characteristics. Sound difficult? It is. This information isn't
				organised in a way that is easily accessed. At this time, there is no
				official way to view this information. The ideal way is by using a
				website created by a Tekken enthusiast at&nbsp;
				<a
					href="https://rbnorway.org/t7-frame-data/"
					target="_blank"
					className={styles.a}>
					rbnorway
				</a>
				. Within this website, you'll find that the moves are displayed in a raw
				data table.
				<br />
				<br />
				My project Tekken Net looks to simplify the problem by letting the user
				input various details based on a move they wish to view the details of,
				and Tekken Net displays the information.
				<br />
				<br />
				<b>What did I learn creating this project?</b>
				<br />
				<br />
				Everything. This being my first project I learnt all the basics about
				React. To list a few would be hooks, state, useEffect, array methods(
				more specifically the the map method), and object methods. <br />
				<br />
				<br />
				<b>What challenges did I face creating this project?</b>
				<br />
				Filtering and displaying information. I had the skills to filter
				information, as well as display information, but to display filtered
				information, at the time was challenging. 
			</p>
		</div>
	)
}
