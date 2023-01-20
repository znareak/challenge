import { useParams } from "react-router-dom";
import { Grid, Text, Image, Box } from "@mantine/core";
import usePost from "../hooks/usePost";
import PostComments from "../components/PostComments";
import Author from "../components/Author";
import Stats from "../components/Stats";
import { formatIpfImage } from "../helpers/utils";

const colStyles = (theme) => ({
  backgroundColor: theme.colors.dark[9],
  borderRadius: "8px",
});

export default function Post() {
  const { id } = useParams();
  const { post, isLoading, error } = usePost(id);
  const { stats, profile, metadata, createdAt } = post;
  const username = profile?.handle;
  const urlProfile = profile?.picture?.original?.url;
  const url = formatIpfImage(metadata?.media[0].original.url);
  const content = metadata?.content;

  if (isLoading) return <Text>Loading Post...</Text>;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box mt="2rem">
      <Grid gutter={10}>
        <Grid.Col span={6}>
          <Image src={url} alt="Picture post" radius="md" />
          <Stats
            {...stats}
            createdAt={createdAt}
            direction="row"
            justify="center"
            mt={12}
            p={5}
            sx={(theme) => ({
              backgroundColor: theme.colors.dark[9],
              borderRadius: "5px",
            })}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <Box sx={colStyles} px="1.5rem" py="2rem">
            <Author src={urlProfile} username={username} mb="2rem" />
            <Text
              sx={{
                maxHeight: "350px",
                overflowY: "auto",
                whiteSpace: "pre-line",
                fontSize: "14px",
              }}
            >
              {content}
            </Text>
            <PostComments />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
