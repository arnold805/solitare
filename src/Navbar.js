import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

function Navbar({currentUser, setCurrentUser}) {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Solitare
          </Typography>
          
            <nav>
            <Button
              id='login'
              variant="outlined"
              to="/"
              component={RouterLink}
              sx={{ my: 1, mx: 1.5 }}
            >
              New Game
            </Button>
              <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/"
                component={RouterLink}
              >
                Home
              </Link>
              {/* <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/searches/new"
                component={RouterLink}
              >
                New Search
              </Link>
              <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/searches/saved"
                component={RouterLink}
              >
                Saved Searches
              </Link> */}
              <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/preferences"
                component={RouterLink}
              >
                Preferences
              </Link>

              {/* <Logout currentUser={currentUser} setCurrentUser={setCurrentUser}/> */}
            </nav>
          
        </Toolbar>
      </AppBar>
    </>
  );
}
 
export default Navbar;