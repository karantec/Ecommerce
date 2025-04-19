import { createContext, useContext, useState } from "react";
import {
  addToCart,
  getCart,
  removeFromCart,
  removeSingleItem,
} from "./api/CartService";
// import { displayCart } from "./Components/Order/Cart";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeSingleItem: () => {},
  removeFromCart: () => {},
  setCart: () => {},
  getCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ProducObj = {userId, productId, quantity}
  const addToCartHandler = async (productObj) => {
    // integrating add to cart route

    const data = await addToCart(productObj);

    // Set Cart state here and then pass it to cart page

    // setCart((prevCart) => {
    //   const existingItem = prevCart.find((item) => item.id === productObj.id);
    //   if (existingItem) {
    //     return prevCart.map((item) =>
    //       item.id === productObj.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     );
    //   }
    //   return [...prevCart, { ...productObj, quantity: 1 }];
    // });
  };

  // make API calls here
  // userObj = {userId, productId}
  const removeFromCartHandler = async (userObj) => {
    const data = await removeFromCart(userObj);

    // set cart state and then pass it to cart page
  };

  // userObj
  const removeSingleItemHandler = async (userObj) => {
    const data = await removeSingleItem(userObj);

    // set cart state and then pass it tocart page
  };

  // userObj - {userId}
  const getCartHandler = async (userObj) => {
    const data = await getCart(userObj);
    const dataItems = [...data.items];

    // displayCart(dataItems);

    setCart((prev) => {
      const updated = dataItems?.map((item) => {
        return {
          quantity: item?.quantity,
          realTimeTotalPrice: item?.realTimeTotalPrice,
          ...item?.product,
        };
      });
      return [...updated, ...prev];
    });

    // setCart((prev) => {
    //   return [...prev];
    // });
  };

  const cartContextValues = {
    cart: cart,
    setCart: setCart,
    addToCart: addToCartHandler,
    removeSingleItem: removeSingleItemHandler,
    removeFromCart: removeFromCartHandler,
    getCart: getCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
