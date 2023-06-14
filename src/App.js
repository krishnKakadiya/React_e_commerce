import "./App.scss";

/* laibrary*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* components */
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import AppContext from "./Utils/Context";

function App() {
  return (
    <Router>
      {/* <AppContext> */}
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
        <Footer />
      {/* </AppContext> */}
    </Router>
  );
}

export default App;
