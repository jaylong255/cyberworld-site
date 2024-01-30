import { Box, Typography } from "@mui/material";
import Page from "../components/Page";
import { Link } from "react-router-dom";
import Social from "../components/Social";

function Home() {
  return (
    <Page>
      <Social />
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
        <Typography variant="heading_1_bold">CyberWorld Builders</Typography>
        <Typography
              variant="body2"
              component={Link}
              to="mailto:contact@cyberworldbuilders.com"
            >
              email me
         </Typography>
      </Box>
    </Page>
  );
}

export default Home;
