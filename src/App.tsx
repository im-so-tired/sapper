import styles from "./App.module.scss"
import Field from "./components/field/Field"
import Header from "./components/header/Header"
import { useGame } from "./hooks/useGame"
import { GameProvider } from "./hooks/useGameContext"

function App() {
	const data = useGame()
	return (
		<GameProvider value={data}>
			<main className={styles.app}>
				<section className={styles.play_area}>
					<Header />
					<Field />
				</section>
			</main>
		</GameProvider>
	)
}

export default App
