import { Box } from "@chakra-ui/react";
import Footer from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import HomePage from "./homePage";

export default function Home() {
  return (
    <Box m={"auto"}>
      <Navbar />
      <HomePage />
      <Footer />
    </Box>
  );
}
