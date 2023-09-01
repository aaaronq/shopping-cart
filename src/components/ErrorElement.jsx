import { Link } from "react-router-dom";

const ErrorElement = () => {
	return (
		<main>
			<div className="container">
				<h1> An error has occured</h1>
				<h3>
					<Link to="/">Click here to go back</Link>{" "}
				</h3>
			</div>
		</main>
	);
};

export default ErrorElement;