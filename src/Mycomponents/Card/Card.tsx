interface CardInterface {
  id:number,
  imageUrl:string,
  typeGender:string,
  typeMer:string,
  typeResh:string,
}

export const Card = ({
  imageUrl,
  typeGender,
  typeMer,
  typeResh,
}: CardInterface) => {
  return (
    <div className="grid grid-cols-1">
      <img src={imageUrl} alt="" />
      <p>{typeGender}</p>
      <p>{typeMer}</p>
      <p>{typeResh}</p>
    </div>
  );
};

export default Card