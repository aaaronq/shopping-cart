import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
	const error = useRouteError();
	return (
		<main>
			<div className="container">
				<h1> An error has occured</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
				<h3>
					<Link to="/">Click here to go back</Link>{" "}
				</h3>
			</div>
		</main>
	);
};

export default ErrorElement;
