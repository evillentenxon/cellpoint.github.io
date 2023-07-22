import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();


// const API = "https://jsonplaceholder.typicode.com/photos";

const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Cell Point",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Cell-point",
        image: "./images/about1.svg",
      },
    });
  };

  //  to get the api data
  // const getServices = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     dispatch({ type: "GET_SERVICES", payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // to call the api
  // useEffect(() => {
  //   getServices(API);
  // }, []);


  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };