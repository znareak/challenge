import { Title, Text, Flex, Button, Image, Grid } from "@mantine/core";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <header>
      <Grid
        justify={{
          lg: "space-between",
          sm: "center",
        }}
      >
        <Grid.Col sm={12} md={5} lg={6} className={styles.headerContent}>
          <Link to="/">
            <Image src={logo} width={305} />
          </Link>

          <Title order={4} sx={{ fontWeight: "normal" }} mt={10} color="dimmed">
            The LensAI frens has shared
            <Text sx={{ display: "inline-block" }} ml={5} color="white">
              beautiful artworks!
            </Text>
          </Title>
        </Grid.Col>

        <Grid.Col sm={12} md={6} lg={6} className={styles.headerContent}>
          <Flex sx={{ gap: "5px", justifyContent: "end" }}>
            <Button
              variant="subtle"
              mr="5rem"
              sx={{ fontWeight: "normal", fontSize: "17px" }}
              color="lime.5"
            >
              Lens 101
            </Button>
            <Button variant="outline" leftIcon={<FiLogIn />}>
              Log in
            </Button>
            <Button leftIcon={<FiUserPlus />}>Signup</Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </header>
  );
}
