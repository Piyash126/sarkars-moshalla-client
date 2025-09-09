import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import PopularMenuItem from "./popularmenuItem/PopularMenuItem";

const RegularMenu = () => {
  const [menu = []] = useMenu();
  return (
    <div>
      <SectionTitle heading="regular menu" subHeading="From our menu" />
      <div className="grid md:grid-cols-2 gap-4">
        {menu.map((item) => (
          <PopularMenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RegularMenu;
