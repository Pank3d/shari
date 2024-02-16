import React from "react";
import merStore from "../store/MerStore";
import genderStore from "../store/GenderStore";

export const StoreContext = React.createContext({
  merStore,
  genderStore,
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={{ merStore, genderStore }}>
      {children}
    </StoreContext.Provider>
  );
};
