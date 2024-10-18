import { Navigate, Route, Routes } from "react-router-dom";
import { EventsPage } from "../pages/EventsPage";
import { Navbar } from "../../ui/components/Navbar";

export const EventsRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/events" element={<EventsPage />} />
        <Route path='/' element={<Navigate to="/events" />} />
      </Routes>
    </>
  );
};
