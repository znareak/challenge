import { Flex, Text, Box, Button } from "@mantine/core";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      <Flex justify="space-between" align="center" mt="5rem" mb="1rem">
        <Box sx={{ textAlign: "center" }}>
          <Text sx={{ display: "flex" }} size="sm">
            Made by your frens at
            <Text ml={5} fw={600}>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://www.thegallerydao.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                TheGalleryDAO <FiExternalLink />
              </a>
            </Text>
          </Text>
          <Text size="sm">AI engine from Selas Studio</Text>
        </Box>

        <Flex gap={10}>
          <Button
            variant="subtle"
            color="gray"
            style={{ fontWeight: "normal" }}
          >
            FAQ
          </Button>

          <Button
            variant="subtle"
            color="gray"
            style={{ fontWeight: "normal" }}
          >
            Terms & Conditions
          </Button>

          <Button
            variant="subtle"
            color="gray"
            style={{ fontWeight: "normal" }}
          >
            Privacy Policy
          </Button>
        </Flex>
      </Flex>
    </footer>
  );
}
