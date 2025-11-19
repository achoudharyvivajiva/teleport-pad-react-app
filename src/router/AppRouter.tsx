import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import { PatientIdentifierInformation } from "../pages/PatientIdentifierInformation/PatientIdentifierInformation";
import { FamilyAndFriend } from "../pages/FamilyAndFriend/FamilyAndFriend";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/patient-identifier-information/:id"
            element={<PatientIdentifierInformation />}
          />
          <Route path="/:id/family-and-friend" element={<FamilyAndFriend />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
