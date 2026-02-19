import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SignInSide from "./login/SignInSide";
import Dashboard from "./dashboard/Dashboard";
import CrudDashboard from "./crud-dashboard/CrudDashboard";
import SideBar from "./SideBar/SideBar";
import AppTheme from "./shared-theme/AppTheme";

export default function App() {
  const [view, setView] = useState("login");

  const currentAppView = view === "crud" ? "crud" : "dashboard";

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      {view === "login" ? (
        <SignInSide onLoginSuccess={() => setView("dashboard")} />
      ) : (
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <SideBar
            currentView={currentAppView}
            onSelectView={(nextView) => setView(nextView)}
          />
          <Box sx={{ flex: 1 }}>
            {currentAppView === "dashboard" && <Dashboard />}
            {currentAppView === "crud" && <CrudDashboard />}
          </Box>
        </Box>
      )}
    </AppTheme>
  );
}
