import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import st from './MakeOrder.module.scss'
import Modal from '../Modal/Modal';

interface MakeOrderProps {
	clearCart(): void;
}

const MakeOrder: FC<MakeOrderProps> = React.memo(({ clearCart }) => {
	const [isBtnActive, setIsBtnActive] = React.useState(false);
	const [isModalActive, setIsModalActive] = useState(false);
	const [inputs, setInputs] = React.useState([
		{ type: 'name', value: '', isCorrect: false },
		{ type: 'phone', value: '+38', isCorrect: false },
		{ type: 'location', value: '', isCorrect: false },

	])

	const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputVal = e.target.value;
		if (!/^\d+$/.test(inputVal[inputVal.length - 1])) {
			setInputs(inputs.map(input => {
				if (input.type === 'name') {
					input.value = inputVal
					input.value.trim() !== '' ? input.isCorrect = true : input.isCorrect = false
				}
				return { ...input };
			}))
		}
	}

	const onUserPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputVal = e.target.value;
		if (/^\d+$/.test(inputVal[inputVal.length - 1]) &&
			inputVal.length < 14 && inputVal.includes('+38')) {
			setInputs(inputs.map(input => {
				if (input.type === 'phone') {
					input.value = inputVal
					input.value.trim().length === 13 ? input.isCorrect = true : input.isCorrect = false
				}
				return { ...input };
			}))
		}
	}

	const onUserLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputVal = e.target.value;
		setInputs(inputs.map(input => {
			if (input.type === 'location') {
				input.value = inputVal
				input.value.trim() !== '' ? input.isCorrect = true : input.isCorrect = false
			}
			return { ...input };
		}))
	}

	const changeBtnActive = () => {
		let result = true;
		inputs.forEach(input => {
			if (!input.isCorrect) {
				result = false;
			}
		})
		setIsBtnActive(result)
	}

	const onOrderClick = () => {
		setIsModalActive(true)
	}

	React.useEffect(() => {
		if (isModalActive) {
			setTimeout(() => {
				clearCart();
			}, 1500)
		}
	}, [isModalActive])

	return (
		<>
			<h2 className={st.chapter}>Making an order</h2>
			<form>
				<input value={inputs.find(input => input.type === 'name')?.value}
					onChange={onUserNameChange}
					className={cn({ [st.error]: !inputs.find(input => input.type === 'name')?.isCorrect })}
					type="text" placeholder='Name'
					onBlur={() => changeBtnActive()}
				/>


				<input value={inputs.find(input => input.type === 'phone')?.value}
					className={cn({ [st.error]: !inputs.find(input => input.type === 'phone')?.isCorrect })}
					onChange={onUserPhoneChange} type="tel" placeholder='Phone'
					onBlur={() => changeBtnActive()}

				/>

				<input value={inputs.find(input => input.type === 'location')?.value}
					className={cn({ [st.error]: !inputs.find(input => input.type === 'location')?.isCorrect })}
					onChange={onUserLocationChange} type="text" placeholder='Street'
					onBlur={() => changeBtnActive()}

				/>
			</form>

			<div className={cn(st.orderBtn, { [st.isDisabled]: !isBtnActive })}>
				<button onClick={onOrderClick} disabled={!isBtnActive}  >Order</button>
			</div>
			<Modal
				isModalActive={isModalActive}
				setIsModalActive={setIsModalActive}
				children={<div>Thanks for order !!!</div>} />
		</>
	);
});

export default MakeOrder;