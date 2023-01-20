import { FiArchive, FiMessageCircle, FiClock } from "react-icons/fi";
import { CgArrowsExchange } from "react-icons/cg";
import { Flex, Text } from "@mantine/core";
import { getFormattedDistanceToNow } from "../helpers/utils";

export default function Stats({
  totalAmountOfCollects,
  totalAmountOfMirrors,
  totalAmountOfComments,
  createdAt,
  innerContainerProps,
  direction = "column",
  ...props
}) {
  const date = getFormattedDistanceToNow(new Date(createdAt));
  const stylesText = { display: "flex", alignItems: "center" };
  const stylesIcon = { marginRight: "5px" };

  return (
    <Flex direction={direction} {...props}>
      <Flex gap={10} {...innerContainerProps}>
        <Text sx={stylesText} mb={3}>
          <FiArchive style={stylesIcon} />
          {totalAmountOfCollects}
        </Text>

        <Text sx={stylesText} mb={3}>
          <CgArrowsExchange style={stylesIcon} />
          {totalAmountOfMirrors}
        </Text>

        <Text sx={stylesText} mb={3}>
          <FiMessageCircle style={stylesIcon} />
          {totalAmountOfComments}
        </Text>
      </Flex>

      <Text
        mb={3}
        sx={{
          ...stylesText,
          marginLeft: direction !== "column" ? "25px" : 0,
        }}
      >
        <FiClock style={stylesIcon} />
        {date}
      </Text>
    </Flex>
  );
}
