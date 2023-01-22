import { Title, Text, Flex, Box, Button, Image } from "@mantine/core";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <Flex justify="space-between">
        <Box>
          <Link to="/">
            <Image src={logo} width={305} />
          </Link>

          <Title order={4} sx={{ fontWeight: "normal" }} mt={10} color="dimmed">
            The LensAI frens has shared
            <Text sx={{ display: "inline-block" }} ml={5} color="white">
              beautiful artworks!
            </Text>
          </Title>
        </Box>

        <Flex sx={{ gap: "5px" }}>
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
      </Flex>
    </header>
  );
}
