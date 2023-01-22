import { useParams } from "react-router-dom";
import { Box, Text, Divider, Loader } from "@mantine/core";
import Error from "./Error";
import LoadMore from "./LoadMore";
import useComments from "../hooks/useComments";
import PostComment from "./PostComment";
import PostCommentsLoader from "./PostCommentsLoader";

export default function PostComments() {
  const { id } = useParams();
  const { isLoading, isFetching, comments, error, isCommentsAvailable } = useComments(id);

  if (error) return <Error error={error} mt="2rem" />;

  if (isLoading) return <PostCommentsLoader />;

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
          label={<Text size="md">No one has commented yet 🤐</Text>}
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

      <Box sx={{ maxHeight: "600px", overflowY: "auto" }} pr={10} mt={10}>
        {comments.map((comment) => (
          <PostComment {...comment} />
        ))}

        {!isLoading && isFetching && (
          <Loader sx={{ margin: "auto", display: "block" }} mt="0.3rem" />
        )}
        <LoadMore {...{ isLoading, isFetching }} />
      </Box>
    </Box>
  );
}
