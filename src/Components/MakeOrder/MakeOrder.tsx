import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import st from './MakeOrder.module.scss'
import Modal from '../Modal/Modal';
import { useInput } from './../../utils/hooks/useInput';

interface MakeOrderProps {
	clearCart(): void;
}

const MakeOrder: FC<MakeOrderProps> = React.memo(({ clearCart }) => {
	const [isBtnActive, setIsBtnActive] = React.useState(false);
	const [isModalActive, setIsModalActive] = useState(false);
	const userName = useInput('', /^[a-zA-Z\s]*$/)
	const userPhone = useInput('', /^\+?[1-9][0-9]{11,12}$/)
	const userLocation = useInput('', /./)

	React.useEffect(() => {
		setIsBtnActive(userName.canBeOrder && userPhone.canBeOrder && userLocation.canBeOrder)
	}, [userName.canBeOrder, userPhone.canBeOrder, userLocation.canBeOrder])

	const onOrderClick = () => {
		setIsModalActive(true)
	}

	React.useEffect(() => {
		if (isModalActive) {
			const timer = setTimeout(() => {
				clearCart();
			}, 1500)
			return () => clearTimeout(timer)
		}

	}, [isModalActive])

	return (
		<>
			<h2 className={st.chapter}>Making an order</h2>
			<form>
				<input
					value={userName.value}
					onChange={userName.onChange}
					onFocus={userName.onFocus}
					className={cn({ [st.error]: !userName.isCorrect })}
					type="text" placeholder='Name'
				/>

				<input
					value={userPhone.value}
					onChange={userPhone.onChange}
					onFocus={userPhone.onFocus}
					className={cn({ [st.error]: !userPhone.isCorrect })}
					type="tel" placeholder='Phone (+389999999999) '

				/>

				<input value={userLocation.value}
					onChange={userLocation.onChange}
					onFocus={userLocation.onFocus}
					className={cn({ [st.error]: !userLocation.isCorrect })}
					type="text" placeholder='Street'

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