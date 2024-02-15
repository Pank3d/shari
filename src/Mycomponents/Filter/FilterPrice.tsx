import React, { useState } from 'react'
import HidePriceFilter from './HidePriceFilter';


function FilterPrice() {
  const [hideFilt, setHideFilt] = useState<boolean>(false)
  const [hideMer, setHideMer] = useState<boolean>(false);
  const [hideOrg, setHideOrg] = useState<boolean>(false);

  

  return (
    <div className="bg-slate-300">
      <h1 className="text-5xl">Фильтры</h1>
      <div className="price_filter">
        <div className="flex mb-4">
          <h2 className="price">Price</h2>
          <button
            onClick={() => setHideFilt(!hideFilt)}
            className="hide_button"
          >
            <img src="./src/assets/CaretDown.jpg" alt="" />
          </button>
        </div>
        <div className="filters-input">
          {!hideFilt ? <HidePriceFilter /> : <></>}
        </div>
      </div>
      <div className="flex mb-4">
        <h1 className="filter_zag">Мероприятие</h1>
        <div className="price_filter">
          <button onClick={() => setHideMer(!hideMer)} className="hide_button">
            <img src="./src/assets/CaretDown.jpg" alt="" />
          </button>
        </div>
      </div>
      {!hideMer ? (
        <div className="cont-for-input-and-li">
          <ul className="">
            <li className="list_item">
              <input className="checkbox mr-2 mt-3  " type="checkbox" />
              Выписка
            </li>
            <li className="list_item">
              <input className="checkbox mr-2 mt-3 " type="checkbox" />
              Свадьба
            </li>
            <li className="list_item">
              <input className="checkbox mr-2 mt-3 " type="checkbox" />
              Выпускные
            </li>
            <li className="list_item">
              <input className="checkbox mr-2 mt-3 " type="checkbox" />
              День влюбленных
            </li>
            <li className="list_item">
              <input className="checkbox mr-2 mt-3 " type="checkbox" />
              Фотозона
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
      <div className="flex mb-4">
        <h1 className="filter_zag">Оригинальные решения</h1>
        <div className="price_filter">
          <button onClick={() => setHideOrg(!hideOrg)} className="hide_button">
            <img src="./src/assets/CaretDown.jpg" alt="" />
          </button>
        </div>
      </div>
      {!hideOrg ? (
        <div className="cont-for-input-and-li">
          <ul className="list">
            <li className="list_item">
              <input
                className="checkbox checkbox mr-2 mt-3  "
                type="checkbox"
              />
              Коробка сюрприз с шарами
            </li>
            <li className="list_item">
              <input className="checkbox checkbox mr-2 mt-3 " type="checkbox" />
              Облака из шаров
            </li>
            <li className="list_item">
              <input className="checkbox checkbox mr-2 mt-3 " type="checkbox" />
              Светящиеся шары
            </li>
            <li className="list_item">
              <input className="checkbox checkbox mr-2 mt-3 " type="checkbox" />
              Ходячие фигурки
            </li>
            <li className="list_item">
              <input
                className="checkbox checkbox mr-2 mt-3 mb-5 "
                type="checkbox"
              />
              Фигурки из шаров
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
      <button className="allZero">
        Сбросить <img src="src/assets/allzero.jpg" alt="" />
      </button>
    </div>
  );
}

export default FilterPrice