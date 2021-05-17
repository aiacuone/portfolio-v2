import React from 'react'
import styles from '../styles/Details.module.scss'
import Head from 'next/head'
import Link from 'next/link'

export default function detailsTekkenNet() {
	return (
		<div className={ styles.container}>
			<Head>
				<title>Tekken Net Details</title>
			</Head>
			<Link href="/tekkenNet">
				<a className={styles.back}>Back</a>
			</Link>
			<h3 className={styles.title}>Tekken Net: More Details</h3>
			<p className={styles.text}>
				My first every project, which I'm very proud of. A tip I was given when
				starting Software Development, was that you're not going to become a
				good developer by just watching tutorials. The way to become a good
				programmer is to focus in on a problem that you have, and dive straight
				into the code, seeing how a computer can improve your problem.
				<br />
				<br />
				<b>Why did I create this project?</b>
				<br />
				Being a passionate Tekken player, I take a large amount of notes to
				constantly up my game. The problem with Tekken is that it is an
				extremely difficult game. Tekken has 50+ characters, each character
				having 80+ moves, all those moves having their own attributes and
				characteristics. Sound difficult? It is. This information isn't
				organised in a way that is easily accessed.As it stands, till this day
				there is no official way to view this information. The current, best way
				to view this information is Tekken enthusiast creator at
				<a
					href="https://rbnorway.org/t7-frame-data/"
					target="_blank"
					className={styles.a}>
					rbnorway
				</a>
				, and if you take the take to have a look at this website, you'll
				quickly realise that these moves are only displayed raw inside a table.
				<br />
				<br />
				My project Tekken Net, looks to simplify that problem by letting the
				user input various details based on a desired move they wish to view,
				and Tekken Net displays that information.
				<br />
				<br />
				<b>What did I learn creating this project?</b>
				<br />
				<br />
				Everything. This being my first project I learnt all the basics about
				React. To list a few would be hooks, state, useEffect, array methods(
				more specifically the the map method), and object methods. <br />
				<br /> The truth is, I actually created a working pure HTML version,
				which if you know anything about Software Development, is a bad idea. I
				had just learnt the basics of javascript, and got inpatient when I
				realised that learning a framework wasn't a quick process.
				<br />
				<br />
				<b>What was the hardest part of this project?</b>
				<br />
				Filtering and displaying information. I knew how to display information,
				I also knew how to filter information, but filtering the information and
				displaying the specific filtered information, I remember being
				challenging.
			</p>
		</div>
	)
}
