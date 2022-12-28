import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { UseAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleTheme } = UseAppThemeContext();

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Trocar Tema
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
