import { Routes as DomRoutes, Route } from "react-router-dom";
import { Home } from "@/pages/home";

export default function Routes() {
  return (
    <DomRoutes>
      <Route
        path="*"
        element={<Home />}
      />
    </DomRoutes>
  );
}
