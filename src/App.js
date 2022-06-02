import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./stores/Home";
import StoreDetails from "./stores/StoreDetails";
function App() {
  const routes = (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:storeId" element={<StoreDetails />} />
      </Routes>
    </>
  );
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
