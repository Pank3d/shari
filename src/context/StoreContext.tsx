import React from "react";
import genderStore from "../store/GenderStore";

export const StoreContext = React.createContext({
  genderStore: genderStore,
});

export const StoreGenderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={{ genderStore: genderStore }}>
      {children}
    </StoreContext.Provider>
  );
};