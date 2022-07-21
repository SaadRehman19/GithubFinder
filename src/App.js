import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { GithubProvider } from "./Context/GithubContext";
import UseReducerPractise from "./components/Users/UseReducerPractise";

function App() {
  return (
    // <UseReducerPractise/>
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/about" element={<About />} />{" "}
              <Route path="/user/:login" element={<User />} />{" "}
              <Route path="/notfound" element={<NotFound />} />{" "}
              <Route path="/*" element={<NotFound />} />{" "}
            </Routes>{" "}
          </main>{" "}
          <Footer />
        </div>{" "}
      </Router>{" "}
    </GithubProvider>
  );
}
export default App;
