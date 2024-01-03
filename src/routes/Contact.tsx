import ContactForm from "components/ContactForm";
import Page from "components/Page";
import { Box } from "@mui/material";

function Contact() {
  return (
    <div>
      <Page>
        <Box>
          <ContactForm />
        </Box>
      </Page>
    </div>
  );
}

export default Contact;
