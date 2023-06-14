import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { white } from "theme";
import CyberWorldLogo from "assets/images/favicon-32x32.png";

function Header() {
  return (
    <AppBar
      sx={
        {
          // border: "2px solid #ffffff",
        }
      }
      position="static"
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 32px",
          gap: "411px",
          width: "100%",
          background: "#181818",
          boxShadow: "0px 4px 24px rgba(166, 225, 2, 0.5)",
          // border: "2px solid yellow",
          // center content vertically
          // alignItems: "center",
          alignContent: "center",


        }}
      >
        <Box
          sx={{
            // width: "15%",
            alignItems: "center",
            alignContent: "center",
            // border: "2px solid blue",
            padding: "0px 0px 0px 0px",
            // background: "#000000",
            margin: "0px 0px 0px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "7px 0px 0px 0px",

          }}
        >
          {/* add an icon that links to home */}
          <Link to="/">
            <Box 
              sx={{
                padding: "0px 0px 0px 0px",
                // border: "2px solid yellow",
              }}
              component={"img"}
              src={CyberWorldLogo}
              alt="CyberWorld Logo"
            />
          </Link>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
