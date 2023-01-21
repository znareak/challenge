import { Flex, Text, Avatar } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import placeholderUser from "../assets/placeholder_user.png";

export default function Author({
  src,
  username,
  avatarSize = "sm",
  textMarginTop = 0,
  textSize = "md",
  ...props
}) {
  if (!username) return null;
  
  const url = formatIpfImage(src) || placeholderUser;
  return (
    <Flex align="center" mb={10} {...props}>
      <Avatar
        src={url}
        alt={`Creator ${username}`}
        radius="xl"
        mr={5}
        size={avatarSize}
      />
      <Text c="lime.5" mt={textMarginTop} size={textSize}>
        @{username}
      </Text>
    </Flex>
  );
}
