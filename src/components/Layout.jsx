import Header from "./Header";
import Footer from "./Footer";
import { Container, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container size="xl" mx="auto" mt={40}>
      <Header />
      <Box component="main" mt="2rem">
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}
