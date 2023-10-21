import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CyberWorldLogo from "components/icons/CyberWorld";
import { Link } from "react-router-dom";
import GitHubLogo from "../components/icons/GitHubLogo";
import TwitterLogo from "components/icons/TwitterLogo";
// import TwitterLogo from "assets/images/x-green-small.png";
import UpworkLogo from "components/icons/UpworkLogo";

function Home() {
  return (
    <Box // outermost container
      sx={{
        background: "#181818",
        width: "100%",
      }}
    >
      <Box // horizontal alignment container
        sx={{
          margin: "none",
          padding: "none",
          border: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
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

          <Box // social link container
            sx={{
              margin: "32px 0px 0px 0px",
              padding: "none",
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
              <Link
                to="https://github.com/jaylong255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogo />
              </Link>
            </Box>

            <Box // social link container
              sx={{
                margin: "0px 0px 0px 0px",
                padding: "none",
              }}
            >
              <Link
                to="https://twitter.com/cyberbuilders"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterLogo />
              </Link>
            </Box>

            <Box // social link container
              sx={{
                margin: "0px 0px 0px 0px",
                padding: "none",
              }}
            >
              <Link
                to="https://www.upwork.com/freelancers/jaylongcyberworld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UpworkLogo />
              </Link>
            </Box>
          </Box>

          <Box // contact info container
            sx={{
              margin: "32px 8px 0px 0px",
              padding: "none",
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
