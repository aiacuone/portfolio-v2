import React from 'react'
import Head from 'next/head'
import styles from '../styles/Skills.module.scss'
import react from '../images/reactLogo.svg'
import javascript from '../images/javascriptLogo.svg'
import next from '../images/next.svg'
import lodash from '../images/lodash.svg'
import css from '../images/css.svg'
import html from '../images/html.svg'
import illustrator from '../images/illustrator.svg'
import photoshop from '../images/photoshop.svg'
import object from '../images/object.svg'

export default function skills() {
	return (
		<div className="container">
			<Head>
				<title>Skills - A.Iacuone</title>
			</Head>
			<a className="back_button" onClick={() => window.history.back()}>
				Back
			</a>
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
						<img className={styles.tallIcon} src={lodash} />
					</li>
					<li className={styles.li}>
						Object-Oriented Programming
						<img className={styles.tallIcon} src={object} />
					</li>
					<li className={styles.li}>
						CSS
						<img className={styles.tallIcon} src={css} />
					</li>
					<li className={styles.li}>
						HTML
						<img className={styles.tallIcon} src={html} />
					</li>
					<li className={styles.li}>
						Adobe Illustrator
						<img className={styles.tallIcon} src={illustrator} />
					</li>
					<li className={styles.li}>
						Adobe Photoshop
						<img className={styles.tallIcon} src={photoshop} />
					</li>
				</ul>
			</div>
		</div>
	)
}
