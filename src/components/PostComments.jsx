import { useParams } from "react-router-dom";
import { Box, Text } from "@mantine/core";
import useComments from "../hooks/useComments";
import Author from "./Author";

export default function PostComments() {
  const { id } = useParams();
  const { isLoading, comments, error, isCommentsAvailable } = useComments(id);

  if (error) return <Text>A error ocurred: {error}</Text>;

  if (isLoading) return <Text>Loadin comments ...</Text>;

  if (!isCommentsAvailable) return <Text>There arent comments yet :(</Text>;

  return (
    <Box mt="2rem">
      <Text fw={800} mb="1rem">
        Comments
      </Text>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[6],
          height: "1px",
        })}
      />
      <Box sx={{ maxHeight: "600px", overflowY: "auto" }} pr={10} mt={10}>
        {comments.map((comment) => {
          const { metadata, profile } = comment;
          const { handle, picture } = profile;
          const urlPerfil = picture?.original?.url;
          console.log(comment);
          return (
            <Box 
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
              <Author src={urlPerfil} username={handle} />
              <Text ml="2rem">{metadata.content}</Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
