import Error from "./Error";
import { Box, Button, Group } from "@mantine/core";
import { useRouteError } from "react-router-dom";

export default function FallbackError() {
  const error = useRouteError();

  return (
    <Box sx={{ maxWidth: "600px" }} mx="auto" mt="4rem">
      <Error error={error} />
      <Group position="center" mt="0.5rem">
        <Button color="gray" onClick={() => window.location.reload()}>
          Try again
        </Button>

        <Button color="gray" onClick={() => (window.location.href = "/")}>
          Go to feed
        </Button>
      </Group>
    </Box>
  );
}
