import { useParams } from "react-router-dom";
import { Grid, Text, Image, Box } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import usePost from "../hooks/usePost";
import Author from "../components/Author";

const colStyles = (theme) => ({
  backgroundColor: theme.colors.dark[9],
  borderRadius: "8px",
});

export default function Post() {
  const { id } = useParams();
  const { post, isLoading, error } = usePost(id);
  const { stats, profile, metadata } = post;
  const username = profile?.handle;
  const urlProfile = formatIpfImage(profile?.picture?.original?.url);
  const url = formatIpfImage(metadata?.media[0].original.url);
  const content = metadata?.content;

  if (isLoading) return <Text>Loading Post...</Text>;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box mt="2rem">
      <Grid gutter={10}>
        <Grid.Col span={6}>
          <Image src={url} alt="Picture post" radius="md" />
        </Grid.Col>

        <Grid.Col span={6}>
          <Box sx={colStyles} px="1.5rem" py="2rem">
            <Author src={urlProfile} username={username} mb="2.5rem" />
            <Text sx={{ whiteSpace: "pre-line" }}>{content}</Text>
          </Box>
        </Grid.Col>
      </Grid>
      Post id: {id}
      <pre>
        <code>{JSON.stringify(post, null, 3)}</code>
      </pre>
    </Box>
  );
}
