import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../context/providers/AuthProvider";
// import useCart from '../../../hooks/useCart';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="relative group">
        <Link to="/menu">Menu</Link>
        <ul className="absolute hidden group-hover:block bg-black bg-opacity-80 rounded-lg shadow-lg p-2 top-6">
          <li>
            <Link
              to="/order/Red Chili Powder"
              className="block px-3 py-1 rounded hover:bg-yellow-500 hover:text-black"
            >
              Chili
            </Link>
          </li>
          <li>
            <Link
              to="/order/Turmeric Powder"
              className="block px-3 py-1 rounded hover:bg-yellow-500 hover:text-black"
            >
              Turmeric
            </Link>
          </li>
          <li>
            <Link
              to="/order/Coriander Powder"
              className="block px-3 py-1 rounded hover:bg-yellow-500 hover:text-black"
            >
              Coriander
            </Link>
          </li>
          <li>
            <Link
              to="/order/Cumin Seeds"
              className="block px-3 py-1 rounded hover:bg-yellow-500 hover:text-black"
            >
              Cumin
            </Link>
          </li>
          <li>
            <Link
              to="/order/Cloves"
              className="block px-3 py-1 rounded hover:bg-yellow-500 hover:text-black"
            >
              Cloves
            </Link>
          </li>
          <li>
            <Link
              to="/order/Cinnamon"
              className="block px-3 py-1 rounded hover:bg-yellow-500 hover:text-black"
            >
              Garlic
            </Link>
          </li>
          <li>
            <Link
              to="/submenu2"
              className="block px-3 py-1 rounded hover:bg-yellow-500 hover:text-black"
            >
              Black Pepper
            </Link>
          </li>
          <li>
            <Link
              to="/submenu2"
              className="block px-3 py-1 rounded hover:bg-yellow-500 hover:text-black"
            >
              Bay Leaf
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/order/Red Chili Powder">Order Item</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      {user ? (
        <>
          <button className="btn btn-ghost" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}

      {/* {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}

      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )} */}
      <li className="hidden md:block">
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+ {cart.length}</div>
          </button>
        </Link>
      </li>

      {/* {user ? (
        <>
          <button className="btn btn-ghost" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )} */}

      {/* <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className="mr-3"></FaShoppingCart>
            <div className="badge badge-sm badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <button className="btn btn-ghost" onClick={handleLoogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )} */}
    </>
  );

  return (
    <div className="navbar bg-base-100 fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Forhad's Restaurent</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="md:hidden">
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
