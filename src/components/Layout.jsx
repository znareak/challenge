import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container size="xl" mx="auto" mt={30}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}
