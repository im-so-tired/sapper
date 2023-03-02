import { GameProvider } from "./hooks/useGameContext"
import styles from "./App.module.scss"
import Header from "./components/header/Header"
import Field from "./components/field/Field"
import { useGame } from "./hooks/useGame"

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
