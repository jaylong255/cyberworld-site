import { Box } from "@mui/system";
import CyberWorldLogo from "./icons/CyberWorld";
import { Link } from "react-router-dom";

type PageProps = {
  children: React.ReactNode;
};

function Page({ children }: PageProps) {
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
          <Box>
            <Link to="/">
              <CyberWorldLogo />
            </Link>
          </Box>

          <Box>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Page;
