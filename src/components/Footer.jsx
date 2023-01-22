import { Flex, Text, Button, Grid } from "@mantine/core";
import { FiExternalLink } from "react-icons/fi";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <Grid
        justify={{ sm: "center", md: "space-between" }}
        align="center"
        mt="5rem"
        mb="1rem"
      >
        <Grid.Col sm={12} md={4} lg={4} sx={{ textAlign: "center" }}>
          <Text sx={{ display: "flex", justifyContent: "center" }} size="sm">
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
        </Grid.Col>

        <Grid.Col sm={12} md={8} lg={8}>
          <Flex gap={10} justify="end" className={styles.terms}>
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
        </Grid.Col>
      </Grid>
    </footer>
  );
}
