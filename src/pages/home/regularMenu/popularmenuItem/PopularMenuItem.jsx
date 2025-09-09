import { FaBangladeshiTakaSign } from "react-icons/fa6";

const PopularMenuItem = ({ item }) => {
  const { name, price, recipe, description, netWeight, image } = item;
  return (
    <div className="grid grid-cols-12 gap-4 items-center p-2 shadow rounded-lg">
      <img
        src={image}
        alt={name}
        className="w-[120px] col-span-3"
        style={{ borderRadius: "0px 200px 200px 200px" }}
      />

      <div className="col-span-6">
        <h3 className="uppercase font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <p className="text-yellow-500 font-bold col-span-2 text-right flex justyfi-center items-center gap">
        <FaBangladeshiTakaSign /> {price}
      </p>

      <p className="text-red-500 font-medium col-span-1 text-right">
        {netWeight}
      </p>
    </div>
  );
};

export default PopularMenuItem;
