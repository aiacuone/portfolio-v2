import React from 'react'
import Head from 'next/head'
import styles from '../styles/AboutMe.module.css'
import Link from 'next/link'

export default function aboutMe() {
	return (
		<div className={styles.container}>
			<Head>
				<title>About Me - A.Iacuone</title>
			</Head>
			<Link href="/">
				<a className={styles.back}>Back</a>
			</Link>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>ABOUT ME</h2>
				<p className={styles.subTitle}>a little</p>
			</div>
			<ul className={styles.ul}>
				<li className={styles.li}>
					<b>Name :</b> Adrian Iacuone
				</li>
				<li className={styles.li}>
					<b>Birth Date :</b> May 1987
				</li>
				<li className={styles.li}>
					<b>Location :</b> South-West London
				</li>
				<li className={styles.li}>
					<b>Nationality :</b> Australian
				</li>
				<li className={styles.li}>
					<b>Interests :</b> Computers & Technology, Gym, Music
				</li>
			</ul>
			<Link href="/detailsAboutMe">
				<p className={styles.storyButton}>My Story</p>
			</Link>
			<div className={styles.image} />
		</div>
	)
}
