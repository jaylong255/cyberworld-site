import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubLogo from "./icons/GitHubLogo";
import TwitterLogo from "./icons/TwitterLogo";
import UpworkLogo from "./icons/UpworkLogo";

function Social() {
  return (
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
  );
}

export default Social;
