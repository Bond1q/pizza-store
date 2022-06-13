
import React, { useState, useEffect } from 'react';

export const useInput = (defaultValue: string, validation: RegExp) => {

	const [value, setValue] = useState(defaultValue)
	const [isCorrect, setIsCorrect] = useState(true)
	const [wasFocused, setWasFocused] = useState(false)
	const [canBeOrder, setCanBeOrder] = useState(false)

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputVal = e.target.value;
		setValue(inputVal)

	}
	const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		setWasFocused(true)
	}
	const correctionCheck = () => {
		if (wasFocused && !validation.test(value)) {
			setIsCorrect(false)
		} else {
			setIsCorrect(true)
		}
	}
	useEffect(() => {
		correctionCheck()
		setCanBeOrder(validation.test(value))
	}, [value, wasFocused])


	return { value, isCorrect, canBeOrder, onChange, onFocus, correctionCheck }

}