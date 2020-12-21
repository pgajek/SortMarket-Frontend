import "./Root.scss";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";

function Root() {
  return (
    <div className="root">
      <Nav />
      <Footer />
    </div>
  );
}

export default Root;
