import { useParams } from "react-router-dom";
import { Box, Text, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import useComments from "../hooks/useComments";
import Author from "./Author";

export default function PostComments() {
  const { id } = useParams();
  const { isLoading, comments, error, isCommentsAvailable } = useComments(id);

  if (error) return <Text>A error ocurred: {error}</Text>;

  if (isLoading) return <Text>Loadin comments ...</Text>;

  if (!isCommentsAvailable)
    return (
      <Box
        sx={(theme) => ({
          padding: "0.5rem",
          borderRadius: "4px",
          backgroundColor: theme.colors.dark[7],
        })}
        mt="1rem"
      >
        <Divider
          my="xs"
          labelPosition="center"
          label={
            <Text size="md">
              No one has commented yet 🤐
            </Text>
          }
        />
      </Box>
    );

  return (
    <Box mt="2rem">
      <Divider
        my="xs"
        labelPosition="center"
        label={
          <Text fw={800} size="md">
            Comments
          </Text>
        }
      />

      {/* <Text fw={800} mb="1rem">
        Comments
      </Text> */}
      <Box sx={{ maxHeight: "600px", overflowY: "auto" }} pr={10} mt={10}>
        {comments.map((comment) => {
          const { metadata, profile, id } = comment;
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
              <Link
                to={`/user/${profile?.id}`}
                style={{ textDecoration: "none" }}
              >
                <Author src={urlPerfil} username={handle} />
              </Link>

              <Text ml="2rem">{metadata.content}</Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
