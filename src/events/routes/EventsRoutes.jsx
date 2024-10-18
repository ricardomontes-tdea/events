import { Route, Routes } from "react-router-dom";
import { EventsPage } from "../pages/EventsPage";
import { Navbar } from "../../ui/components/Navbar";

export const EventsRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </>
  );
};
