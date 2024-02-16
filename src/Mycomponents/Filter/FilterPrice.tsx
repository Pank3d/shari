import{ useState } from 'react'
import HidePriceFilter from './HidePriceFilter';
import Meropriyatiya from '../Card/meropriyatiya';
import Resheniya from '../Card/Resheniya';


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
          {!hideFilt ? <HidePriceFilter/> : <></>}
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
      {!hideMer ? (<Meropriyatiya/>) : (
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
       <Resheniya/>
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