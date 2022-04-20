import React from "react";
import { useRef, useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Fade,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/system";

const emailSerivceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const emailPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

const schema = yup
  .object({
    subject: yup.string().required().min(3).max(500),
    fullName: yup.string().required().min(3).max(500),
    email: yup.string().required().email(),
    message: yup.string().required().min(10).max(2000),
  })
  .required();

const convertCamelCaseToTitle = (text) => {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

const Field = ({ register, name, error, ...props }) => {
  return (
    <TextField
      error={error ? true : false}
      {...register(name)}
      helperText={error ? convertCamelCaseToTitle(error) : null}
      {...props}
    />
  );
};

const ContactForm = () => {
  const form = useRef();
  const [emailState, setEmailState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const setEmailStatePromise = (value) => {
    return new Promise((resolve) => {
      setEmailState(value);
      setTimeout(resolve, 5000);
    }).then(() => {
      setEmailState(null);
    });
  };

  const sendEmail = (e) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        emailSerivceId,
        emailTemplateId,
        form.current,
        `${emailPublicKey}`
      )
      .then(
        (result) => {
          setEmailStatePromise(true);
          setIsLoading(false);
        },
        (error) => {
          console.error(
            `Error sending email HTTP Status Code: ${error.status}. ${error.text}`
          );
          setEmailStatePromise(false);
          setIsLoading(false);
        }
      );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography my={3} variant="h5" textAlign="center">
        Send Me a Message
      </Typography>
      <Fade
        in={emailState === true}
        style={{ transitionDuration: 500 }}
        unmountOnExit
      >
        <Alert sx={{ marginBottom: "12px" }} severity="success">
          Email sent successfully!
        </Alert>
      </Fade>
      <Fade
        in={emailState === false}
        style={{ transitionDuration: 500 }}
        unmountOnExit
      >
        <Alert sx={{ marginBottom: "16px" }} severity="error">
          There was an error sending the email. More details may be found in the
          console.
        </Alert>
      </Fade>

      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <Field
          register={register}
          name="fullName"
          label="Full Name"
          error={errors.fullName?.message}
          fullWidth
          sx={{ marginBottom: "12px" }}
        />
        <Field
          register={register}
          name="subject"
          label="Subject"
          error={errors.subject?.message}
          fullWidth
          sx={{ marginBottom: "12px" }}
        />
        <Field
          register={register}
          name="email"
          label="Email"
          error={errors.email?.message}
          fullWidth
          sx={{ marginBottom: "12px" }}
        />
        <Field
          register={register}
          name="message"
          label="Message"
          error={errors.message?.message}
          fullWidth
          multiline
          rows={5}
          sx={{ marginBottom: "12px" }}
        />
        {!isLoading ? (
          <Button variant="contained" type="submit">
            Submit
          </Button>
        ) : (
          <Button variant="contained" disabled={true} sx={{ opacity: 0.7 }}>
            Loading{" "}
            <CircularProgress
              size={15}
              sx={{ marginLeft: "8px", color: "grey.500" }}
            />
          </Button>
        )}
      </form>
    </Box>
  );
};

export default ContactForm;
