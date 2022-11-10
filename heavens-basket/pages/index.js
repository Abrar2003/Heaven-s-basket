import { Box } from "@chakra-ui/react";
import DropDown from "../components/navbar/DropDown";
import Footer from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

export default function Home() {
  return (
    <Box m={"auto"}>
      <Navbar />
      <Footer />
    </Box>
  );
}
