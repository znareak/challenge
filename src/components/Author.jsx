import { Flex, Text, Avatar } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import placeholderUser from "../assets/placeholder_user.png";

export default function Author({ src, username, ...props }) {
  const url = formatIpfImage(src) || placeholderUser;
  return (
    <Flex align="center" mb={10} {...props}>
      <Avatar
        src={url}
        alt={`Creator ${username}`}
        radius="xl"
        mr={5}
        size={props.avatarSize || "sm"}
      />
      <Text c="lime.5" mt={props.textMarginTop || 0}>
        @{username}
      </Text>
    </Flex>
  );
}
