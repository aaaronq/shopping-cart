import { Link } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {
	const [cart, setCart] = useState([]);
	return (
		<header>
			<h1> <Link className='link' to="/">Mall Grab</Link> </h1>
			<ul className="categories">
				<li><Link className='link' to="/mens">Men&apos;s</Link></li>
				<li><Link className='link' to="/womens">Women&apos;s</Link></li>
				<li><Link className='link' to="/jewelery">Jewelery</Link></li>
				<li><Link className='link' to="/electronics">Electronics</Link></li>
			</ul>
            <span><Link className="link" to="/cart">Cart</Link></span>
		</header>
	);
};

export default Header;
