import { useOutletContext } from "react-router-dom";

const CartItem = ({ item }) => {
    const [cart, setCart] = useOutletContext();
    function handleClick(){
        setCart(cart.filter((cartItem) => cartItem.id != item.id))
    }

	return (
        <div className="cartItem">
            <img src={item.image} alt={item.title} />
            <div className="cartItemInfo">
                <h2> {item.title}</h2>
                <h3> £{item.price}</h3>
                <button className="removeBtn" onClick={handleClick}> Remove from cart </button>
            </div>
        </div>
    )
};

export default CartItem;
