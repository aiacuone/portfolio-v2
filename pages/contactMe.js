import React from 'react'
import Head from 'next/head'
import styles from '../styles/ContactMe.module.css'
import phone from '../images/phone.svg'
import linkedin from '../images/linkedin_grey.svg'
import email from '../images/email_grey.svg'
import cv from '../images/cv_grey.svg'
import Link from 'next/link'

export default function contactMe() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Contact Me - A.Iacuone</title>
			</Head>
			<Link href="/">
				<a className={styles.back}>Back</a>
			</Link>
			<h2 className={styles.title}>CONTACT ME</h2>
			<ul>
				<li className={styles.li}>
					<a
						className={styles.a}
						href="https://www.linkedin.com/in/adrian-iacuone/"
						target="_blank">
						<img src={linkedin} className={styles.icon} /> Linkedin
					</a>
				</li>
				<li className={styles.li}>
					<a
						className={styles.a}
						href="mailto:aiacuone@gmail.com"
						target="_blank">
						<img src={email} className={styles.icon} /> Email
					</a>
				</li>
				<li className={styles.li}>
					<a className={styles.a} href="">
						<img src={phone} className={styles.icon} />
						07 393 961 334
					</a>
				</li>
				<li className={styles.li}>
					<a
						className={styles.a}
						href="https://1drv.ms/b/s!Any2Z6OIuSuhvv5vn0Sjeo6-ZEBrUg?e=9NRsih"
						target="_blank">
						<img src={cv} className={styles.icon} /> CV
					</a>
				</li>
			</ul>
		</div>
	)
}
