import React, { useState, useEffect } from 'react'
import styles from '../styles/Header.module.css'
import cv from '../images/cv.svg'
import email from '../images/email.svg'
import linkedin from '../images/linkedin.svg'
import Link from 'next/link'
import hamburger from '../images/hamburgerLogo.svg'

export default function Header() {
	let [toggle, setToggle] = useState(false)

	function handleClick() {
		setToggle(false)
	}

	useEffect(() => {
		function handleToggle(e) {
			if (
				e.target.className !== 'Header_nav__lyM1u' &&
				e.target.className !== 'Header_navLink__3LgeJ' &&
				e.target.className !== 'Header_hamburger__1sb8r'
			) {
				setToggle(false)
			}
		}

		document.addEventListener('mousedown', handleToggle)

		return () => {
			document.removeEventListener('mousedown', handleToggle)
		}
	})
	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<div className={styles.overlay} />
				<div className={styles.links}>
					<div className={styles.linksSub}>
						<div className={styles.aContainer}>
							<a
								className={styles.a}
								href="https://1drv.ms/b/s!Any2Z6OIuSuhvv5vn0Sjeo6-ZEBrUg?e=9NRsih"
								target="_blank">
								<img src={cv} className={styles.icon} />
							</a>
						</div>
						<div className={styles.aContainer}>
							<a className={styles.a} href="mailto:aiacuone@gmail.com">
								<img src={email} className={styles.icon} />
							</a>
						</div>

						<div className={styles.aContainer}>
							<a
								className={styles.a}
								href="https://www.linkedin.com/in/adrian-iacuone/"
								target="_blank">
								<img src={linkedin} className={styles.icon} />
							</a>
						</div>
					</div>
					<img
						className={styles.hamburger}
						src={hamburger}
						onClick={() => setToggle(!toggle)}
					/>
				</div>
			</div>
			{toggle && (
				<div className={styles.nav}>
					<Link href="/">
						<a className={styles.navLink} onClick={handleClick}>
							HOME
						</a>
					</Link>
					<Link href="/aboutMe">
						<a className={styles.navLink} onClick={handleClick}>
							ABOUT ME
						</a>
					</Link>
					<Link href="/skills">
						<a className={styles.navLink} onClick={handleClick}>
							SKILLS
						</a>
					</Link>
					<Link href="/projects">
						<a className={styles.navLink} onClick={handleClick}>
							PROJECTS
						</a>
					</Link>

					<Link href="/contactMe">
						<a className={styles.navLink} onClick={handleClick}>
							CONTACT ME
						</a>
					</Link>
				</div>
			)}
		</div>
	)
}
