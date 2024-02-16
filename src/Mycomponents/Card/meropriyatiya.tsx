import { useContext } from "react";
import { StoreContext } from "../../context/Context";
import { observer } from "mobx-react";

const Meropriyatiya:React.FC = observer(() => {
  
const {merStore} = useContext(StoreContext)
  return (
    <div>
      <div className="cont-for-input-and-li">
        <ul className="">
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3  "
              type="checkbox"
              onClick={() => merStore.toggleVipiska()  }
            />
            Выписка
          </li>
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3 "
              type="checkbox"
              onClick={() => merStore.toggleSvadba()} 
            />
            Свадьба
          </li>
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3 "
              type="checkbox"
              onClick={() => merStore.toggleVipusk() }
            />
            Выпускные
          </li>
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3 "
              type="checkbox"
              onClick={() => merStore.toggleLoveDay() }
            />
            День влюбленных
          </li>
          <li className="list_item">
            <input
              className="checkbox mr-2 mt-3 "
              type="checkbox"
              onClick={() => merStore.toggleFhotoZone() }
            />
            Фотозона
          </li>
        </ul>
      </div>
    </div>
  );
}
)

export default Meropriyatiya;
