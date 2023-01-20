import { Flex, Text, Avatar } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";

export default function Author({ src, username, ...props }) {
  const url = formatIpfImage(src);
  return (
    <Flex align="center" mb={10} {...props}>
      <Avatar
        src={url}
        alt={`Creator ${username}`}
        radius="xl"
        mr={5}
        size="sm"
      />
      <Text c="lime.5">@{username}</Text>
    </Flex>
  );
}
