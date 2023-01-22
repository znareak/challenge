import { Alert, Code } from "@mantine/core";
import { FiXCircle } from "react-icons/fi";

export default function Error({ error, ...props }) {
  return (
    <Alert
      title="An unexpected error ocurred"
      icon={<FiXCircle />}
      color="red"
      {...props}
    >
      Error message:
      <Code ml={5}>
        {error?.message || typeof error === "string"
          ? error
          : "something went wrong, refresh the web page"}
      </Code>
    </Alert>
  );
}
