import HeroNavigate from "../components/HeroNavigate";
import Shop from "../components/Shop/Shop";


const ShopPage = () => {

  return (
    <>
      <HeroNavigate parentLink="/shop" />
      <Shop />
    </>
  );
};

export default ShopPage;
