import React from 'react'
import styles from '../styles/Details.module.scss'
import Head from 'next/head'

export default function detailsNoteTaker() {
	return (
		<div className="container">
			<Head>
				<title>Note Taker Details</title>
			</Head>
			<a className="back_button" onClick={() => window.history.back()}>
				Back
			</a>
			<h3 className={styles.title}>Note Taker: More Details</h3>
			<p className={styles.text}>
				<b>Why did I create this project?</b>
				<br />
				When I was first thinking about this project, I had the intention of
				challenging myself and using the CRUD system (create, read, update,
				delete). I felt like I had a good grasp of the basics of react, and
				wanted to express an idea that I had since the first time I saw a
				Javascript object.
				<br />
				<br />
				When I first saw a Javascript object, the first thing that came to mind
				was a folder, a folder that contain another folder and so on. Using this
				concept and my need for notes in my every day life, I wanted to develop
				an easy to use system that could create and store any type of note.
				<br />
				<br />
				<b>What did I learn creating this project?</b>
				<br />
				This project challenged me to position elements correctly and
				comfortably for the user, using css positioning, displays and attributes
				likes margins and padding.
				<br />
				<br />
				I learnt alot about giving the user the ability to scroll within tight areas, pop up menus, and arranging
				elements in a way that are easily viewed and accessed.
				<br />
				<br />
				I learnt how to implement the CRUD system. I created a system that can
				continuously build upon itself, as well as a system that gives the user
				the ability to store multiple types of information.
				<br />
				<br />
				<b>What was the hardest part of this project?</b>
				<br />
				Object Oriented Programming. In Vanilla Javascript, applying complicated
				object methods can be challenging and at times impossible. I found that
				implementing the Lodash Library made what I was trying to achieve
				possible.
				<br />
				<br />
			</p>
		</div>
	)
}
