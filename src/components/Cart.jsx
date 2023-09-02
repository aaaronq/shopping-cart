import { useOutletContext } from "react-router-dom";

const Cart = () => {
	const [cart, setCart] = useOutletContext();
	function handleClick() {
		console.log("foo");
	}
	return (
		<div className="cart container">
			{cart.length === 0 ? (
				<>
					<h1> Your cart is empty!</h1>
					<h2> Add items to cart and they will be shown here</h2>
				</>
			) : (
				<>
					{cart.map((item) => 
						<h1 key={item.id}> {item.title} </h1>
					)}
					<button onClick={handleClick}> Checkout </button>
				</>
			)}
		</div>
	)	
};

export default Cart;