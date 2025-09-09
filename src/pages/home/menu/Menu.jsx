import { Helmet } from "react-helmet-async";
import ClovesImg from "../../../assets/banner/banner1.jpg";
import TumericImg from "../../../assets/banner/banner2.jpg";
import CuminSeedsImg from "../../../assets/banner/banner3.jpg";
import CinnamonImg from "../../../assets/banner/banner5.jpg";
import {
  default as CorianderPowderImg,
  default as menuImg,
} from "../../../assets/banner/banner6.jpg";
import redchiliImg from "../../../assets/banner/redchili.jpg";
import Cover from "../../../components/shared/cover/Cover";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "./menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const RedChili = menu.filter((item) => item.name === "Red Chili Powder");
  const TurmericPowder = menu.filter((item) => item.name === "Turmeric Powder");
  const CuminSeeds = menu.filter((item) => item.name === "Cumin Seeds");
  const CorianderPowder = menu.filter(
    (item) => item.name === "Coriander Powder"
  );
  const BlackPepper = menu.filter((item) => item.name === "Black Pepper");
  const Cardamom = menu.filter((item) => item.name === "Cardamom");
  const Cloves = menu.filter((item) => item.name === "Cloves");
  const Cinnamon = menu.filter((item) => item.name === "Cinnamon");
  const MustardSeeds = menu.filter((item) => item.name === "Mustard Seeds");
  const FenugreekSeeds = menu.filter((item) => item.name === "Fenugreek Seeds");
  const GaramMasala = menu.filter((item) => item.name === "Garam Masala");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Moshall House || Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="today's Offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={RedChili}
        title="Red Chili Powder"
        Coverimg={redchiliImg}
      ></MenuCategory>
      <MenuCategory
        items={TurmericPowder}
        title="Turmeric Powder"
        Coverimg={TumericImg}
      ></MenuCategory>
      <MenuCategory
        items={Cinnamon}
        title="Cinnamon"
        Coverimg={CinnamonImg}
      ></MenuCategory>
      <MenuCategory
        items={CuminSeeds}
        title="Cumin Seeds"
        Coverimg={CuminSeedsImg}
      ></MenuCategory>
      <MenuCategory
        items={Cloves}
        title="Cloves"
        Coverimg={ClovesImg}
      ></MenuCategory>
      <MenuCategory
        items={CorianderPowder}
        title="Coriander Powder"
        Coverimg={CorianderPowderImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
