import { useState } from "react";

const Resheniya = () => {
  const [korobka, setKorobka] = useState<boolean>(false);
  const [oblako, setOblako] = useState<boolean>(false);
  const [svet, setSvet] = useState<boolean>(false);
  const [figure, setFigure] = useState<boolean>(false);
  const [balons, setbalons] = useState<boolean>(false);

  return (
    <div className="cont-for-input-and-li">
      <ul className="list">
        <li className="list_item">
          <input
            className="checkbox checkbox mr-2 mt-3  "
            type="checkbox"
            onClick={() => setKorobka(!korobka)}
          />
          Коробка сюрприз с шарами
        </li>
        <li className="list_item">
          <input
            className="checkbox checkbox mr-2 mt-3 "
            type="checkbox"
            onClick={() => setOblako(!oblako)}
          />
          Облака из шаров
        </li>
        <li className="list_item">
          <input
            className="checkbox checkbox mr-2 mt-3 "
            type="checkbox"
            onClick={() => setSvet(!svet)}
          />
          Светящиеся шары
        </li>
        <li className="list_item">
          <input
            className="checkbox checkbox mr-2 mt-3 "
            type="checkbox"
            onClick={() => setFigure(!figure)}
          />
          Ходячие фигурки
        </li>
        <li className="list_item">
          <input
            onClick={() => setbalons(!balons)}
            className="checkbox checkbox mr-2 mt-3 mb-5 "
            type="checkbox"
          />
          Фигурки из шаров
        </li>
      </ul>
    </div>
  );
};

export default Resheniya;
