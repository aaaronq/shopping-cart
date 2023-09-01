import { useState } from "react";
import "../App.css";
import Header from "./Header";
import { useOutlet } from "react-router-dom";

function App() {
	const outlet = useOutlet();
	return (
		<>
			<Header />
      <main>
			{outlet || (
				<div className="welcome container">
					<h1>Welcome to the shop!</h1>
				</div>
			)}
      </main>
		</>
	);
}

export default App;
