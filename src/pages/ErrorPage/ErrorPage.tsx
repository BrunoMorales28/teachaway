import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";

import InstructionsSection from "./../../components/InstructionsSection";

const ErrorPage = () => ( 
    <Box bgcolor="primary.main">
        <Container sx={{bgcolor:"secondary.main"}}>
        <Box height="100vh" px="1rem" display="flex" flexDirection="column" justifyContent="space-around">
            <img src="https://www.teachaway.com/themes/contrib/tams/logo.svg" alt="logo" />
            <Typography align="center" variant="h1" color="primary.dark">I'm sorry, the page you are trying to load is not available.</Typography>
            <Typography align="center"  variant="body1" color="primary.dark">Place make sure the address is correct, or try again later.</Typography>
        </Box>
        <InstructionsSection />
        </Container>
    </Box>
)

export default ErrorPage