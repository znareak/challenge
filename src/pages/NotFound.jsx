import { Alert } from "@mantine/core";
import { FiAlertCircle } from "react-icons/fi";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Not found" />
      <Alert
        icon={<FiAlertCircle size={16} />}
        title="Not found"
        color="gray"
        variant="filled"
      >
        Not found the requested url was not found on this server
      </Alert>
    </>
  );
}
