import React from "react";
import merStore from "../store/MerStore";
import genderStore from "../store/GenderStore";
import resheniyaStore from "../store/ReshStore"; 

export const StoreContext = React.createContext({
  merStore,
  genderStore,
  resheniyaStore, 
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={{ merStore, genderStore, resheniyaStore }}>
      {children}
    </StoreContext.Provider>
  );
};
