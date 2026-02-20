import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import About from "./About/About";
import Location from "./Location/Location";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Separator from "./Separator/Separator";

function App() {
  return (
    <>
      <div className="page">
        <Nav />
        <Header />
        <Separator />
        <Products />
        <Separator />
        <About />
        <Separator />
        <Location />
        <Separator />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
