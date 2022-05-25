import React from 'react';
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore"
import { db } from "./firebase"
import Header from './Components/Header/Header';
function App() {
	const pizzasRef = collection(db, "pizzas");

	// console.log(pizzas);

	// pizzas();
	// 	const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
	// 		console.log("Current data: ", doc.data());
	//   });
	// React.useEffect(() => {
	// 	const getPizzas = async () => {
	// 		const data = await getDocs(pizzasRef);
	// 		data.docs.map(doc => console.log(doc.data())
	// 		)
	// 		console.log(data);

	// 	}
	// 	getPizzas();
	// }, [])

	return (
		<div className="App">
			<Header />
		</div>
	);
}

export default App;
