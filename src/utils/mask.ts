import fillCell from "../assets/field/fill.png"
import flag from "../assets/field/flag.png"
import question from "../assets/field/question.png"

import zero from "../assets/field/numbers/0.png"
import one from "../assets/field/numbers/1.png"
import two from "../assets/field/numbers/2.png"
import three from "../assets/field/numbers/3.png"
import four from "../assets/field/numbers/4.png"
import five from "../assets/field/numbers/5.png"
import six from "../assets/field/numbers/6.png"
import seven from "../assets/field/numbers/7.png"
import eight from "../assets/field/numbers/8.png"
import mine from "../assets/field/mine.png"

export const Masks = {
	fill: fillCell,
	flag,
	question,
	opened: {
		"-1": mine,
		"0": zero,
		"1": one,
		"2": two,
		"3": three,
		"4": four,
		"5": five,
		"6": six,
		"7": seven,
		"8": eight,
	},
}
