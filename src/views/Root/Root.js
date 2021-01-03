import "./Root.scss";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import Slider from "components/organisms/Slider/Slider";
function Root() {
  return (
    <div className="root">
      {/* <Nav />

      <Footer /> */}

      {/* <ProductCard
        rating={4}
        quantity={7}
        unit="szt"
        name="Fajna cegła"
        price={36.66}
        currency="PLN"
      /> */}
      <Slider />
    </div>
  );
}

export default Root;
