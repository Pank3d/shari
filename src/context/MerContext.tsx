import React from "react";
import merStore from "../store/MerStore";

export const StoreContext = React.createContext({
  merStore: merStore,
});

export const StoreMerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={{ merStore: merStore }}>
      {children}
    </StoreContext.Provider>
  );
};
