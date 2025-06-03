
import LayoutDefault from "../Layout/LayoutDefault";
import Cart from "../Pages/Cart";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home";
import NoInfo from "../Pages/NoInfo";
import ListProduct from "../Pages/Products/inedx";

export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'product', element: <ListProduct/> },
      { path: 'cart', element: <Cart /> },
      { path: 'noinfo', element: <NoInfo /> },
      { path: '*', element: <Error404 /> },
    ]
  }
];

