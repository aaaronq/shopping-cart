import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Products from "./components/Products.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
import Cart from "./components/Cart.jsx"
import Item from "./components/Item.jsx"
import Checkout from "./components/Checkout.jsx"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
    errorElement: <ErrorElement/>,
    children: [
      {
        index: true,
        element: <div className="welcome container"><div className="welcomeInfo"><h1>Welcome to the shop!</h1></div></div>
      },
      {
        path: "/mens",
        element: <Products type="men"/>,
        
      },
      {
        path: "/mens/:id",
        element: <Item/>
      },
      {
        path: "/womens",
        element: <Products type="women"/>,
      },
      {
        path: "/womens/:id",
        element: <Item/>
      },
      {
        path: "/jewelery",
        element: <Products type="jewelery"/>,
      },
      {
        path: "/jewelery/:id",
        element: <Item/>
      },
      {
        path: "/electronics",
        element: <Products type="electronics"/>,
      },
      {
        path: "/electronics/:id",
        element: <Item/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path:"/checkout",
        element: <Checkout/>
      }
    ]
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
