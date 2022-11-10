import { Box } from "@chakra-ui/react";
import DropDown from "../components/DropDown";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <Box m={"auto"}>
      <Navbar />
      <DropDown />
      <Footer />
    </Box>
  );
}
