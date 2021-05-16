import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<div className="app">
				<Component {...pageProps} />
			</div>
			<footer />
		</>
	)
}

export default MyApp
