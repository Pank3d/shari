import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StoreContext } from "../../context/Context";

const Resheniya = observer(() => {
  const resheniya = [
    "Коробка сюрприз с шарами",
    "Облака из шаров",
    "Светящиеся шары",
    "Ходячие фигурки",
    "Фигурки из шаров",
  ];
  const { resheniyaStore } = useContext(StoreContext);

  return (
    <div className="cont-for-input-and-li">
      <ul className="list">
        {resheniya.map((reshenie) => (
          <li className="list_item" key={reshenie}>
            <input
              className="checkbox checkbox mr-2 mt-3"
              type="checkbox"
              checked={resheniyaStore.resheniya.includes(reshenie)}
              onChange={() => resheniyaStore.toggleReshenie(reshenie)}
            />
            {reshenie}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Resheniya;
