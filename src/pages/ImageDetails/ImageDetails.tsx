import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";

import InstructionsSection from "./../../components/InstructionsSection";
import { useLoaderData } from "react-router";
import { imgDetails } from "../../types";

const ImageDetails = () => {
  const  imageDetails  = useLoaderData() as imgDetails;
  const { title, description, link, ups, downs, score} = imageDetails
    console.log("ders", imageDetails)
    return ( 
    <Box bgcolor="primary.main">
        <Container sx={{bgcolor:"secondary.main"}}>
        <Box height="100vh" px="1rem" display="flex" flexDirection="column" justifyContent="space-around">
            <Typography align="center" variant="h1" color="primary.main">{title}</Typography>
            <img src={link} alt={title} />
            <Typography align="center"  variant="body1" color="primary.dark">{description}</Typography>
            <Typography variant="subtitle1">Upvotes: {ups} </Typography>
            <Typography variant="subtitle1">Downvotes: {downs} </Typography>
        <Typography variant="subtitle1">Total score: {score} </Typography>
        </Box>
        <InstructionsSection />
        </Container>
    </Box>
)}

export default ImageDetails