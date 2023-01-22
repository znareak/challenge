import { useParams } from "react-router-dom";
import { Grid, Text, Image, Box } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import { Link } from "react-router-dom";
import usePost from "../hooks/usePost";
import PostComments from "../components/PostComments";
import Author from "../components/Author";
import Stats from "../components/Stats";

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
    <>
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
            <Link
              to={`/user/${profile?.handle}`}
              style={{ textDecoration: "none" }}
            >
              <Author src={urlProfile} username={username} mb="1rem" />
            </Link>
            {content && (
              <Box
                sx={(theme) => ({
                  padding: "0.5rem",
                  borderRadius: "4px",
                  backgroundColor: theme.colors.dark[7],
                })}
              >
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
              </Box>
            )}

            <PostComments />
          </Box>
        </Grid.Col>
      </Grid>
    </>
  );
}
