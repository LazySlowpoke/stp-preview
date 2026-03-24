import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    label: "Gallery",
    path: "/gallery",
    icon: <PhotoLibraryIcon />,
  },
  {
    label: "News",
    path: "/news",
    icon: <ArticleIcon />,
  },
  {
    label: "About",
    path: "/about",
    icon: <InfoIcon />,
  },
];

function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <Box
      sx={{
        width: 260,
        minHeight: "100vh",
        borderRight: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "background.paper",
        px: 2,
        py: 3,
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight="bold" sx={{ px: 1, mb: 3 }}>
          Splash Thomson
        </Typography>

        <List>
          {navItems.map((item) => {
            const isActive =
              item.path === "/gallery"
                ? location.pathname.startsWith("/gallery")
                : location.pathname === item.path;

            return (
              <ListItemButton
                key={item.label}
                selected={isActive}
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      <Box>
        <Divider sx={{ mb: 2 }} />
        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: 2,
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </ListItemButton>
      </Box>
    </Box>
  );
}

export default AppSidebar;