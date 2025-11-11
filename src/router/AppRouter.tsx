import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import { PatientIdentifierInformation } from "../pages/PatientIdentifierInformation/PatientIdentifierInformation";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PatientIdentifierInformation/:id" element={<PatientIdentifierInformation/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
