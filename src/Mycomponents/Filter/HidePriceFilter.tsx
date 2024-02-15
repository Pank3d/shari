import React from "react";
import * as Slider from "@radix-ui/react-slider";

const HidePriceFilter = () => (
  <form>
    <div className="mb-4">
      <input
        type="text"
        className="bg-black text-white mr-5 rounded-sm w-16 "
      />
      <input
        type="text"
        className="bg-black text-white  rounded-sm pr-3 w-16"
      />
    </div>

    <Slider.Root
      className="SliderRoot  bg-black w-11 "
      defaultValue={[25, 75]}
      max={100}
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

export default HidePriceFilter;
