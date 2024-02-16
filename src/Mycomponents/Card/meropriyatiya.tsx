import { useContext } from "react";
import { StoreContext } from "../../context/Context";
import { observer } from "mobx-react";

const Meropriyatiya: React.FC = observer(() => {
  const { merStore, genderStore } = useContext(StoreContext);

  const handleCheckboxChange = (type: string) => {
    merStore.toggleType(type);
  };

  return (
    <div>
      <div className="cont-for-input-and-li">
        <ul className="">
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3"
              type="checkbox"
              onClick={() => handleCheckboxChange("Выписка")}
            />
            Выписка
          </li>
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3"
              type="checkbox"
              onClick={() => handleCheckboxChange("Свадьба")}
            />
            Свадьба
          </li>
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3"
              type="checkbox"
              onClick={() => handleCheckboxChange("Выпускные")}
            />
            Выпускные
          </li>
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3"
              type="checkbox"
              onClick={() => handleCheckboxChange("День влюбленных")}
            />
            День влюбленных
          </li>
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3"
              type="checkbox"
              onClick={() => handleCheckboxChange("Фотозона")}
            />
            Фотозона
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Meropriyatiya;
