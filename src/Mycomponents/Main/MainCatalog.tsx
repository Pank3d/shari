import CardForm from "../Card/CardForm";
import FilterPrice from "../Filter/FilterPrice"


function MainCatalog() {
  return (
    <div className="flex">
      <div className="">
        <FilterPrice />
      </div>
      <div className="ml-10 bg-slate-300 w-4/5 ">
        <div>
          <ul className="flex gap-5 pl-4">
            <li className="flex ">
              <input type="checkbox" />
              <p>для детей</p>
            </li>
            <li className="flex">
              <input type="checkbox" />
              <p>для него</p>
            </li>
            <li className="flex">
              <input type="checkbox" />
              <p>для неё</p>
            </li>
            <CardForm />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainCatalog