import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { use } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token)    {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    } 
  };



  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token)    {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    } 
  };

  const clearCart = async () => {
    setCartItems({});
    if (token) {
      try {
        await axios.post(url + "/api/cart/clear", {}, { headers: { token } });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchCart = async () => {
    try {
      const response = await axios.get(url + "/api/cart/get", {
        headers: { token }
      });

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
      const response = await axios.post(url+"/api/cart/get",{}, {headers:{token}});
      setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const localToken = localStorage.getItem("token");
      if (localToken) {
        setToken(localToken);
        await loadCartData(localToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    fetchCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    searchQuery,
    setSearchQuery,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
