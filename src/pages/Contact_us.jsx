import { Box, Typography, TextField, Button, Card, CardContent } from "@mui/material";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation schema
import "../styles/Contact_us.css";
import {easeIn, motion} from 'framer-motion'

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact_us() {
  return (
    <Box className="container_contact_us">
      <Box flex={'1 1 30%'} maxWidth={'550px'} component={motion.div} initial={{x:-100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{ duration: 1 }}>
        <Typography variant="h4" component="h1" className="contact-heading">
          Contact Sheikhoo Steel
        </Typography>

        <Box display="flex"  justifyContent="space-between" mt={2}>
          {/* First Column */}
          <Box flex={1} mr={2}>
            <Box mb={2}>
              <Typography variant="body1" className="emailHeading">EMAIL</Typography>
              <Typography variant="body1" className="detailsContact">Info@sheikhoosteel.com</Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1" className="emailHeading">CALL US</Typography>
              <Typography variant="body1" className="detailsContact">042 32307993</Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1" className="emailHeading">SALES INQUIRIES</Typography>
              <Typography variant="body1" className="detailsContact">0302-8460082</Typography>
            </Box>
          </Box>

          {/* Second Column */}
          <Box flex={1}>
            <Box mb={2}>
              <Typography variant="body1" className="emailHeading">HEAD OFFICE</Typography>
              <Typography variant="body1" className="detailsContact">Plaza No. 104, Defence Raya Fairways, Phase 6, D.H.A. Lahore.</Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1" className="emailHeading">MILL</Typography>
              <Typography variant="body1" className="detailsContact">Sheikhoo Steel, Anwar Abad, Tehsil Kot Addu, District Muzaffargarh.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Form Card */}
      <Box flex={'1 1 40%'} maxWidth={'550px'} justifyContent={"center"} display={'flex'} component={motion.div} initial={{x:100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{ duration: 1 }}>
      <Card variant="outlined" sx={{ mt: 4, backgroundColor:'#71d1eb', p: 4, boxShadow: 3, maxWidth: '400px', width: '100%' }}>
        <CardContent>
          <Typography variant="h6" component="h2" className="detailsContact" sx={{fontSize: '1.6rem !important'}}>
            Send Enquiry
          </Typography>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // Handle form submission, e.g., send to API
              console.log("Form data submitted:", values);
              resetForm();
            }}
          >
            {() => (
              <Form style={{gap: '2rem', display: 'flex', flexDirection:'column'}}>
                <Box mb={2}>
                  <Field
                    as={TextField}
                    label="Name"
                    name="name"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="name" />}
                    error={Boolean(<ErrorMessage name="name" />)}
                  />
                </Box>
                <Box mb={2}>
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="email" />}
                    error={Boolean(<ErrorMessage name="email" />)}
                  />
                </Box>
                <Box mb={2}>
                <Field
                    as={TextField}
                    label="Message"
                    name="message"
                    row={4}
                    multiline
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="email" />}
                    error={Boolean(<ErrorMessage name="email" />)}
                  />
                </Box>
                <Button fullWidth type="submit" variant="contained" sx={{bgcolor: '#cf152d'}}>
                  Send Message
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
      </Box>
    </Box>
  );
}
