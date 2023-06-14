import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CyberWorldLogo from "components/icons/CyberWorld";
import { Link } from "react-router-dom";
import GitHubLogo from "../components/icons/GitHubLogo";
import TwitterLogo from "components/icons/TwitterLogo";
import UpworkLogo from "components/icons/UpworkLogo";

function Home() {
  return (
    <Box // outermost container
      sx={{
        // background color not quite black but almost
        background: "#181818",
        width: "100%",
        // minHeight: "100vh",
        // border: "2px solid blue",
      }}
    >
      <Box // horizontal alignment container
        sx={{
          margin: "none",
          padding: "none",
          border: "none",
          // background: "red",
          // border: "2px solid yellow",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // height: "100%",
          width: "100%",
          // minHeight: "100vh",
        }}
      >
        <Box // vertical alignment container
          sx={{
            margin: "32px",
            padding: "none",
            border: "none",
            background: "#181818",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box // cyberworld logo container
            sx={{
              margin: "0px 0px 0px 0px",

            }}
          >
            <CyberWorldLogo />
          </Box>
          

          {/* <Typography
            sx={{
              color: "#A6E102",
              fontFamily: "Ubuntu",
              fontSize: "2rem",
              textAlign: "center",
              margin: "0px 0px 0px 0px",
              padding: "0px 0px 0px 0px",
            }}
          >
            _Builders
          </Typography>

          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: "2rem",
              textAlign: "center",
              margin: "0px 0px 0px 0px",
              padding: "0px 0px 0px 0px",
              color: "#1E1E1E",
              mixBlendMode: "screen",
              border: "1px solid #000000",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            _Prophets
          </Typography>

          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: "2rem",
              textAlign: "center",
              margin: "0px 0px 0px 0px",
              padding: "0px 0px 0px 0px",
              color: "#1E1E1E",
              mixBlendMode: "screen",
              border: "1px solid #000000",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            _Soldiers
          </Typography> */}

          <Box // social link container
            sx={{
              margin: "32px 0px 0px 0px",
              padding: "none",
              // border: "2px solid yellow",
              background: "#181818",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box // social link container
              sx={{
                margin: "0px 0px 0px 0px",
                padding: "none",
              }}
            >
              <Link to="https://github.com/jaylong255">
                <GitHubLogo />
              </Link>
            </Box>

            <Box // social link container
              sx={{
                margin: "0px 0px 0px 0px",
                padding: "none",
              }}
            >
              <Link to="https://twitter.com/cyberbuilders">
                <TwitterLogo />
              </Link>
            </Box>

            <Box // social link container
              sx={{
                margin: "0px 0px 0px 0px",
                padding: "none",
              }}
            >
              <Link to="https://www.upwork.com/freelancers/jaylongcyberworld">
                <UpworkLogo />
              </Link>
            </Box>
            
          </Box>

          <Box // contact info container
            sx={{
              margin: "32px 8px 0px 0px",
              padding: "none",
              // border: "2px solid yellow",
              background: "#181818",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Jay Long</Typography>
            <Typography variant="body1">CyberWorld Builders</Typography>
            <Typography
              variant="body1"
              component={Link}
              to="mailto:jaylong255@gmail.com"
            >
              jaylong255@gmail.com
            </Typography>
            <Typography variant="body1" component={Link} to="tel:256-673-7112">
              (256)673-7112
            </Typography>

            <Typography variant="heading_1_bold">Special Elite font test</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
