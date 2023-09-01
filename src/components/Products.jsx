import { react, useState, useEffect } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Products = ({ type }) => {
	const [products, setProducts] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const parameter =
		type === "men"
			? "men's%20clothing"
			: type === "women"
			? "women's%20clothing"
			: type;

	useEffect(() => {
		fetch(
			`https://fakestoreapi.com/products/category/${parameter}?limit=6`,
			{ mode: "cors" }
		)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("server error");
				}
				return response.json();
			})
			.then((response) => setProducts(response))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [parameter]);

	if (error) return <p> A network error was encountered</p>;
	if (loading) return <p> Loading... </p>;


	return (
		<div className="products container">
			<h1>
				{type === "men"
					? "Men's clothing"
					: type === "women"
					? "Women's clothing"
					: type === "jewelery"
					? "Jewelery"
					: "Electronics"}
			</h1>
			<div id="productsGrid">
				{products.map((item) => 
					<Card key={item.id} item={item} />
				)}
			</div>
		</div>
	);
};

Products.propTypes = {
	type: PropTypes.string,
};

export default Products;
