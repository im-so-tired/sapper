import { FC } from "react"
import smile from "../../assets/emoticons/good.jpg"

const Smile: FC = () => {
	return (
		<button>
			<img alt="smile" src={smile} />
		</button>
	)
}

export default Smile
