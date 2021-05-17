import React from 'react'
import styles from '../styles/Details.module.scss'
import Head from 'next/head'
import Link from 'next/link'

export default function detailsNoteTaker() {
	return (
		<div className='container'>
			<Head>
				<title>Note Taker Details</title>
			</Head>
			<Link href="/noteTaker">
				<a className='back_button'>Back</a>
			</Link>
			<h3 className={styles.title}>Note Taker: More Details</h3>
			<p className={styles.text}>
				<b>Why did I create this project?</b>
				<br />
				When I was first thinking about this project, I had the intention of challenging myself and using the CRUD system (create, read, update, delete). I felt like I had a good grasp of the basics of react, and wanted to express an idea that I had since the first time I saw an Javascript object.
				<br />
				<br />
				When I first saw a Javascript object, the first thing that came to mind was a folder, a folder that contain another folder and so on. Using this concept and my need for notes in my every day life, I wanted to develop an easy to use system that is focused towards mobile users.
				<br />
				<br />
				<b>What did I learn creating this project?</b>
				<br />
				This project challenged me in multiple ways.
				<br />
				<br />
				This projects challenged me to position elements correctly and comfortably for the user. I learnt alot about giving the user the ability to scroll, make selections, add, delete and edit elements using css positioning, displays and attributes likes margins and padding.
				<br />
				<br />
				The Crud system. I stayed true to implenting the CRUD system, as well as an in depth system, that is endless in terms of the amount that can be stored, as well as there be multiple types of information that can be stored.
				<br />
				<br />
				<b>What was the hardest part of this project?</b>
				<br />
				Object Oriented Programming. In React, Applying complicated object methods can be challenging and at times impossible. I found that implementing the Lodash Library made what I was trying to achieve possible. 
				<br />
				<br />
			</p>
		</div>
	)
}
