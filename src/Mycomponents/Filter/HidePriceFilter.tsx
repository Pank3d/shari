import { ChangeEvent, useState } from "react";
import * as Slider from "@radix-ui/react-slider";



const HidePriceFilter = () => {
  const [values, setValues] = useState<number[]>([85, 5000]);

  const handleSliderChange = (value: number[]) => {
    setValues(value);
  };

  const handleInputChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      
      const newValues = [...values];
      newValues[index] = Number(event.target.value);
      setValues(newValues);
    };

  return (
    <form>
      <div className="mb-4">
        
        <input
          type="text"
          className="bg-black text-white mr-5 rounded-sm w-16 "
          value={values[0]}
          onChange={handleInputChange(0)}
        />
        <input
          type="text"
          className="bg-black text-white  rounded-sm pr-3 w-16"
          value={values[1]}
          onChange={handleInputChange(1)}
        />
      </div>

      <Slider.Root
        className="SliderRoot  bg-black w-11 "
        value={values}
        onValueChange={handleSliderChange}
        max={5000}
        min={85}
        step={1}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
    </form>
  );
};

export default HidePriceFilter;