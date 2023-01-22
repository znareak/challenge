import { Alert, Code } from "@mantine/core";
import { FiAlertCircle } from "react-icons/fi";

export default function Error({ error, ...props }) {
  return (
    <Alert
      title="An unexpected error ocurred"
      icon={<FiAlertCircle />}
      color="red"
      {...props}
    >
      Error message:
      <Code ml={5}>
        {error?.message || "something went wrong, refresh the web page"}
      </Code>
    </Alert>
  );
}
