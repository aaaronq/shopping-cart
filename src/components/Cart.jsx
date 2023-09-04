import { useOutletContext, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
	const [cart, setCart] = useOutletContext();
	const navigate = useNavigate();
	function handleClick() {
		navigate("/checkout")
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
					<h1 id="cartHeading"> Your Cart </h1>
					{cart.map((item) => 
						<CartItem key={item.id} item={item}/>
					)}
					<h3> Order total = £{cart.reduce((acc, cartItem) => acc += +cartItem.price, 0)}</h3>
					<button id="checkoutBtn" onClick={handleClick}> Checkout </button>
				</>
			)}
		</div>
	)	
};

export default Cart;