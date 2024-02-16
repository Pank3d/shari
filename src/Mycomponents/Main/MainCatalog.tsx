import React, { useContext } from "react";
import { observer } from "mobx-react";
import CardForm from "../Card/CardForm";
import FilterPrice from "../Filter/FilterPrice";
import { StoreContext } from "../../context/Context";

const MainCatalog: React.FC = observer(() => {
  const { genderStore, merStore } = useContext(StoreContext);

  return (
    <div className="flex">
      <div className="">
        <FilterPrice />
      </div>
      <div className="ml-10 bg-slate-300 w-4/5 ">
        <div>
          <ul className="flex gap-5 pl-4">
            <li className="flex ">
              <input
                type="checkbox"
                onClick={() => genderStore.toggleGenderChildren()}
              />
              <p>для детей</p>
            </li>
            <li className="flex">
              <input
                type="checkbox"
                onClick={() => genderStore.toggleGenderMan()}
              />
              <p>для него</p>
            </li>
            <li className="flex">
              <input
                type="checkbox"
                onClick={() => genderStore.toggleGenderWoman()}
              />
              <p>для неё</p>
            </li>
            
          </ul>
          <CardForm />
        </div>
      </div>
    </div>
  );
});

export default MainCatalog;
