import { useContext, useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import New from "./components/pages/New";
import { ThemeContext } from "./components/context/ThemeContext";
import Home from "./components/pages/Home";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/pages/Footer";


const App = () => {
  const [articles, setArticles] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Navbar setArticles={setArticles} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/general' element={<New country='us' category='general' articles={articles} setArticles={setArticles} />} />
        <Route path='/business' element={<New country='us' category='business' articles={articles} setArticles={setArticles} />} />
        <Route path='/entertainment' element={<New country='us' category='entertainment' articles={articles} setArticles={setArticles} />} />
        <Route path='/general' element={<New country='us' category='general' articles={articles} setArticles={setArticles} />} />
        <Route path='/health' element={<New country='us' category='health' articles={articles} setArticles={setArticles} />} />
        <Route path='/science' element={<New country='us' category='science' articles={articles} setArticles={setArticles} />} />
        <Route path='/sports' element={<New country='us' category='sports' articles={articles} setArticles={setArticles} />} />
        <Route path='/technology' element={<New country='us' category='technology' articles={articles} setArticles={setArticles} />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;