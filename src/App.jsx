import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Adduser from "./components/Adduser";
import Updateuser from "./components/Updateuser";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/user/add" element={<Adduser />}></Route>
          <Route path="edit/:id" element={<Updateuser />}></Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
