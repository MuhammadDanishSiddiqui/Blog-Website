import './App.css';
import Header from "./components/Header"
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router-dom"
import BlogDetail from "./components/PostDetail"
import CreateBlog from "./components/CreateBlog"
import UpdateBlog from "./components/UpdateBlog"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog/detail/:id" element={<BlogDetail />} />
        <Route exact path="/blog/create" element={<CreateBlog />} />
        <Route exact path="/blog/update/:id" element={<UpdateBlog />} />
      </Routes>

    </>
  );
}

export default App;
