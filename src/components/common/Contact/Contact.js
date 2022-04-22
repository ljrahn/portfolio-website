import { Box } from "@mui/system";
import MoveFade from "../../Animation/MoveFade";
import Header from "../Header/Header";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = ({ headerIndex }) => {
  return (
    <>
      <div id="contact" />

      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Header index={headerIndex} title="Get in Touch" />
      </MoveFade>
      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <ContactForm />
          <ContactDetails />
        </Box>
      </MoveFade>
    </>
  );
};

export default Contact;
