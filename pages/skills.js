import React from 'react'
import Head from 'next/head'
import styles from '../styles/Skills.module.css'
import react from '../images/reactLogo.svg'
import javascript from '../images/javascriptLogo.svg'
import next from '../images/next.svg'
import lodash from '../images/lodash.svg'
import css from '../images/css.svg'
import html from '../images/html.svg'
import Link from 'next/link'

export default function skills() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Skills - A.Iacuone</title>
			</Head>
			<Link href="/">
				<a className={styles.back}>Back</a>
			</Link>
			<h2 className={styles.title}>SKILLS</h2>
			<div className={styles.subContainer}></div>
			<div className={styles.skills}>
				<ul className={styles.ul}>
					<li className={styles.li}>
						React
						<img className={styles.icon} src={react} />
					</li>
					<li className={styles.li}>
						Next JS
						<img className={styles.icon} src={next} />
					</li>
					<li className={styles.li}>
						Javascript
						<img className={styles.icon} src={javascript} />
					</li>

					<li className={styles.li}>
						Lodash
						<img className={styles.lodash} src={lodash} />
					</li>

					<li className={styles.li}>
						CSS
						<img className={styles.lodash} src={css} />
					</li>
					<li className={styles.li}>
						HTML
						<img className={styles.lodash} src={html} />
					</li>
					<li className={styles.li}>Object Oriented Programming</li>
				</ul>
			</div>
		</div>
	)
}
