import ExplorePublications from "./components/ExplorePublications";
import Header from "./components/Header";
import { Container } from "@mantine/core";

export default function App() {
  return (
    <Container size="lg" mx="auto" mt={30}>
      <Header />
      <main>
        <ExplorePublications />
      </main>
    </Container>
  );
}
