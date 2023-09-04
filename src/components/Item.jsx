import { useLocation, useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

const Item = () => {
	const location = useLocation();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);
	const { id } = useParams();
    const [cart, setCart] = useOutletContext();

    function handleClick() {
        if (!cart.some((cartItem => cartItem.id === +id))){
            setCart([...cart, item]);
            return;
        }
        alert("Item already in cart");
    }

    if (location.state && !item) {
        setItem(location.state);
        setLoading(false);
    }

	useEffect(() => {
		if (!item) {
			fetch(`https://fakestoreapi.com/products/${id}`, {
				mode: "cors",
			})
				.then((response) => {
					if (response.status >= 400) {
						throw new Error("server error");
					}
					return response.json();
				})
				.then((response) => setItem(response))
				.catch((error) => setError(error))
				.finally(() => setLoading(false));
		}
	}, [item, id]);

    if (error) return <p> A network error was encountered</p>;
	if (loading) return <p> Loading... </p>;
    

	return (
		<div className="item">
            <img src={item.image} alt={item.description} />
            <div className="itemInfo container">
                <h2> {item.title}</h2>
                <h3> £{item.price}</h3>
                <h4> item = {item.description}</h4>
                <button id="addBtn" onClick={handleClick}> Add to cart </button>
            </div>
		</div>
	);
};

export default Item;
