import { Button, Container, TextField, Typography } from "@mui/material";
import MoveFade from "../../Animation/MoveFade";

const ContactForm = () => {
  return (
    <Container maxWidth="md">
      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <Typography id="contact" textAlign="center" mb={1} variant="h3">
          Get in Touch
        </Typography>
      </MoveFade>

      <MoveFade y={"150px"} triggerMargin={"100px"}>
        <form>
          <TextField
            label="Full Name"
            fullWidth
            sx={{ marginBottom: "12px" }}
          />
          <TextField label="Email" fullWidth sx={{ marginBottom: "12px" }} />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={5}
            sx={{ marginBottom: "12px" }}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </MoveFade>
    </Container>
  );
};

export default ContactForm;
