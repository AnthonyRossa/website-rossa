import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import About from "./About/About";
import Location from "./Location/Location";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <div className="page">
        <Nav />
        <Header />
        <Products />
        <About />
        <Location />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
