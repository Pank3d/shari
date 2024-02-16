import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { getGender, getEvent, getReshenie } from "../../api/api";
import Card from "./Card";
import { ItemInter } from "../../type/type";
import { StoreContext } from "../../context/Context";

const CardForm = observer(() => {
  const [items, setItems] = useState<ItemInter[] | null>(null);
  const { genderStore, merStore, resheniyaStore } = useContext(StoreContext); // Добавьте resheniyaStore

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [genderRes, eventRes, reshenieRes] = await Promise.all([
          getGender(),
          getEvent(),
          getReshenie(),
        ]);

        let items = genderRes.data.map(
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
        console.error(error);
      }
    };

    fetchAll();
  }, []);

  const filteredItems = items?.filter((item) => {
    const isGenderMatch =
      (!genderStore.genderChildren &&
        !genderStore.genderMan &&
        !genderStore.genderWoman) ||
      (genderStore.genderChildren && item.typeGender === "Для детей") ||
      (genderStore.genderMan && item.typeGender === "Для него") ||
      (genderStore.genderWoman && item.typeGender === "Для нее");

    const isMerMatch =
      merStore.typeMer.length === 0 || merStore.typeMer.includes(item.typeMer);

    const isReshMatch = 
      resheniyaStore.resheniya.length === 0 ||
      resheniyaStore.resheniya.includes(item.typeResh);

    return isGenderMatch && isMerMatch && isReshMatch; 
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
