import Banner from "../../banner/Banner";
import Category from "../../category/Category";
import FeaturedItem from "../../featured/FeaturedItem";
import RegularMenu from "../../regularMenu/RegularMenu";
import Reviews from "../../reviews/Reviews";
import Sample from "../../sample/Sample";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Sample></Sample>
      <RegularMenu></RegularMenu>
      <FeaturedItem></FeaturedItem>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
