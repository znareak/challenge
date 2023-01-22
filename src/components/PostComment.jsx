import { Box, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import Author from "./Author";


export default function PostComment(props) {
  const { metadata, profile, id } = props;
  const { handle, picture } = profile;
  const urlPerfil = picture?.original?.url;
  
  return (
    <Box
      key={id}
      p="0.5rem"
      mt="0.8rem"
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[8],
        borderRadius: "4px",
        "&:not(:last-of-type)": {
          marginBottom: "0.5rem",
        },
      })}
    >
      <Link to={`/user/${handle}`} style={{ textDecoration: "none" }}>
        <Author src={urlPerfil} username={handle} />
      </Link>

      <Text ml="2rem">{metadata.content}</Text>
    </Box>
  );
}
