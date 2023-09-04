import { Link } from 'react-router-dom';

const Checkout = () => {
	return (
		<div className="checkout container">
			<h1> There is no real checkout </h1>
            <img src="../src/img/mike.png" alt="meme"/>
            <Link className='link' to="/"> Go back to the front page </Link>
		</div>
	);
};

export default Checkout;