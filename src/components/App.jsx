import { useState } from "react";
import "../App.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function App() {
	const [cart, setCart] = useState([]);
	return (
		<>
			<Header cart={cart} />
      <main>
			<Outlet context={[cart, setCart]}/>
      </main>
		</>
	);
}

export default App;
