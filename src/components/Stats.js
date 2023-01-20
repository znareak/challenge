import { FiArchive, FiMessageCircle, FiClock } from "react-icons/fi";
import { CgArrowsExchange } from "react-icons/cg";
import { Flex, Text } from "@mantine/core";
import { getFormattedDistanceToNow } from "../helpers/utils";

export default function Stats({
  totalAmountOfCollects,
  totalAmountOfMirrors,
  totalAmountOfComments,
  createdAt,
  ...props
}) {
  const date = getFormattedDistanceToNow(new Date(createdAt));
  
  return (
    <Flex direction="column" {...props}>
      <Flex gap={10}>
        <Text sx={{ display: "flex", alignItems: "center" }} mb={3}>
          <FiArchive style={{ marginRight: "5px" }} />
          {totalAmountOfCollects}
        </Text>

        <Text sx={{ display: "flex", alignItems: "center" }} mb={3}>
          <CgArrowsExchange style={{ marginRight: "5px" }} />
          {totalAmountOfMirrors}
        </Text>

        <Text sx={{ display: "flex", alignItems: "center" }} mb={3}>
          <FiMessageCircle style={{ marginRight: "5px" }} />
          {totalAmountOfComments}
        </Text>
      </Flex>

      <Text sx={{ display: "flex", alignItems: "center" }} mb={3}>
        <FiClock style={{ marginRight: "5px" }} />
        {date}
      </Text>
    </Flex>
  );
}
