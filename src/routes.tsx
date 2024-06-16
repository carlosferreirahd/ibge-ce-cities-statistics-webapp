import { Routes as DomRoutes, Navigate, Route } from "react-router-dom";
import { Home } from "@/pages/home";
import { City } from "@/pages/city";

export default function Routes() {
  return (
    <DomRoutes>
      <Route
        path="/cidades"
        element={<Home />}
      />
      <Route
        path="/cidade/:cityId"
        element={<City />}
      />
      <Route
        path="*"
        element={<Navigate to="/cidades" replace />}
      />
    </DomRoutes>
  );
}
