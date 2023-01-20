import { Flex, Text, Avatar } from "@mantine/core";

export default function Author({ src, username, ...props }) {
  return (
    <Flex align="center" mb={10} {...props}>
      <Avatar
        src={src}
        alt={`Creator ${username}`}
        radius="xl"
        mr={5}
        size="sm"
      />
      <Text c="lime.5">@{username}</Text>
    </Flex>
  );
}
