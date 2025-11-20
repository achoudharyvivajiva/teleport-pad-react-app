import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import { PatientIdentifierInformation } from "../pages/PatientIdentifierInformation/PatientIdentifierInformation";
import { FamilyAndFriend } from "../pages/FamilyAndFriend/FamilyAndFriend";
import VideoCall from "../pages/VideoCall/VideoCall";
import Connecting from "../pages/Connecting/Connecting";

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
          <Route path="/:id/video-call" element={<VideoCall />} />
          <Route path="/:id/connecting" element={<Connecting />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
