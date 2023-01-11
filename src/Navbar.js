import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

function Navbar({currentUser, setCurrentUser}) {
  return (
    <div className="Navbar">
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
            <nav>
            <Button
              id='new-game'
              variant="outlined"
              to="/"
              component={RouterLink}
              sx={{ my: 1, mx: 1.5 }}
            >
              New Game
            </Button>
            <Button
              id='home'
              variant="outlined"
              to="/"
              component={RouterLink}
              sx={{ my: 1, mx: 1.5 , border: 1}}
            >
              Home
            </Button>
            <Button
              id='leaderboard'
              variant="outlined"
              to="/leaderboard"
              component={RouterLink}
              sx={{ my: 1, mx: 1.5 }}
            >
              Leaderboard
            </Button>
            <Button
              id='preferences'
              variant="outlined"
              to="/preferences"
              component={RouterLink}
              sx={{ my: 1, mx: 1.5 }}
            >
              Preferences
            </Button>
            </nav>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
 
export default Navbar;