import styles from "./App.module.scss"
import Header from "./components/header/Header"
import Field from "./components/field/Field"

function App() {
	return (
		<main className={styles.app}>
			<section className={styles.play_area}>
				<Header />
				<Field />
			</section>
		</main>
	)
}

export default App
