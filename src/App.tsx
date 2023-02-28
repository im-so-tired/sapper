import numberOne from "./assets/numbersToCount/1.jpg"
import numberTwo from "./assets/numbersToCount/2.jpg"
import numberThree from "./assets/numbersToCount/3.jpg"
import zero from "./assets/numbersToCount/0.jpg"

function App() {
	return (
		<div>
			<h1 className="underline">
				<span>Hello VK!!!</span>
				<div className="flex items-center">
					<img alt="number one" src={numberOne} />
					<img alt="number one" src={numberTwo} />
					<img alt="number one" src={numberThree} />
					<img alt="number one" src={zero} />
					<img alt="number one" src={numberThree} />
				</div>
			</h1>
		</div>
	)
}

export default App
