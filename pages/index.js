import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import london from '../images/london.svg'
import react from '../images/reactLogo.svg'
import Link from 'next/link'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home - A.Iacuone</title>
			</Head>

			<div className={styles.subContainer1}>
				<div className={styles.nameContainer}>
					<div className={styles.photo} />
					<h4 className={styles.name}>Adrian Iacuone</h4>
				</div>
				<div className={styles.reactContainer}>
					<img src={react} className={styles.react} />
					<h4 className={styles.reactTitle}>React Developer</h4>
				</div>
			</div>
			<div className={styles.subContainer2}>
				<div className={styles.locationContainer}>
					<h4 className={styles.londonTitle}>London UK</h4>
					<img src={london} className={styles.london} />
				</div>
				<div className={styles.navContainer}>
					<Link href="/aboutMe">
						<p className={styles.nav}>ABOUT ME</p>
					</Link>

					<Link href="/skills">
						<p className={styles.nav}>SKILLS</p>
					</Link>

					<Link href="/projects">
						<p className={styles.nav}>PROJECTS</p>
					</Link>

					<Link href="/contactMe">
						<p className={styles.nav}>CONTACT ME</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
