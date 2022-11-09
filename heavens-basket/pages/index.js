import { Box } from "@chakra-ui/react";
import Dropdown from "../components/SearchDropdown";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <Box w={"95%"} m={"auto"}>
      <Navbar />
      {/* <Dropdown /> */}
    </Box>
  );
}
