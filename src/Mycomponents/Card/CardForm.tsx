  import React, { useContext, useEffect, useState } from "react";
  import { observer } from "mobx-react";
  import { getGender, getEvent, getReshenie } from "../../api/api";
  import Card from "./Card";
  import { ItemInter } from "../../type/type";
  import { StoreContext } from "../../context/Context";

  const CardForm = observer(() => {
    const [items, setItems] = useState<ItemInter[] | null>(null);
    const { genderStore, merStore } = useContext(StoreContext);

    useEffect(() => {
      const fetchAll = async () => {
        try {
          const [genderRes, eventRes, reshenieRes] = await Promise.all([
            getGender(),
            getEvent(),
            getReshenie(),
          ]);

          const items = genderRes.data.map(
            (item: { id: number }, index: string | number) => ({
              id: item.id,
              imageUrl: "src/assets/1.png",
              typeGender: genderRes.data[index].attributes.type,
              typeMer: eventRes.data[index]?.attributes.type,
              typeResh: reshenieRes.data[index]?.attributes.type,
            })
          );

          setItems(items);
        } catch (error) {
          console.log(error);
        }
      };

      fetchAll();
    }, []);

const filteredItems = items?.filter((item) => {
  if (
    !genderStore.genderChildren &&
    !genderStore.genderMan &&
    !genderStore.genderWoman &&
    (!merStore.typeMer || merStore.typeMer.length === 0)
  ) {
    return true;
  }
  if (genderStore.genderChildren && item.typeGender === "Для детей") {
    return true;
  }
  if (genderStore.genderMan && item.typeGender === "Для него") {
    return true;
  }
  if (genderStore.genderWoman && item.typeGender === "Для нее") {
    return true;
  }
  if (
    merStore.typeMer &&
    Array.isArray(merStore.typeMer) &&
    merStore.typeMer.includes(item.typeMer)
  ) {
    return true;
  }
  return false;
});


    return (
      <>
        {filteredItems?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            typeGender={item.typeGender}
            typeMer={item.typeMer}
            typeResh={item.typeResh}
          />
        ))}
      </>
    );
  });

  export default CardForm;
