import AddEmployee from "./component/AddPeople";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ListPeople from "./component/ListPeople";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListPeople />} />
          <Route path="/pessoas" element={<ListPeople />} />
          <Route path="/add-pessoa" element={<AddEmployee />} />
          <Route path="/add-pessoa/:id" element={<AddEmployee />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;