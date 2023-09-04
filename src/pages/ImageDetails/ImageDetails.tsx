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
        <Container sx={{bgcolor:"secondary.main", paddingY: 4}}>
        <Typography align="center" variant="h1" color="primary.main">{title ?? "Image has no title"}</Typography>
        <img style={{maxWidth: "100%", marginBottom: 40, marginTop: 40}} src={link} alt={title} />
        <Typography variant="body1">{description}</Typography>
        <Box my={3}>
            <Typography variant="body1">Upvotes: </Typography>
            <Typography variant="subtitle2">{ups ?? "This image has not been upvoted yet."} </Typography>
            <Typography variant="body1">Downvotes: </Typography>
            <Typography variant="subtitle2">{downs ?? "This image has not been downvoted yet."} </Typography>
            <Typography variant="body1">Total score: </Typography>
            <Typography variant="subtitle2">{score ?? "This image has no score."} </Typography>
        </Box>
        <InstructionsSection />
        </Container>
    </Box>
)}

export default ImageDetails