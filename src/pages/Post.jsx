import { useParams } from "react-router-dom";
import { Grid, Text, Image, Box } from "@mantine/core";
import { formatIpfImage } from "../helpers/utils";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import useLazyloadImage from "../hooks/useLazyloadImage";
import placeholder from "../assets/placeholder_post.svg";
import usePost from "../hooks/usePost";
import PostComments from "../components/PostComments";
import PostPageLoader from "../components/PostPageLoader";
import Author from "../components/Author";
import Stats from "../components/Stats";
import SEO from "../components/SEO";

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
  const { ref } = useLazyloadImage(url);
  const content = metadata?.content;

  if (error) return <Error error={error} />;

  if (isLoading) return <PostPageLoader />;

  return (
    <>
      <SEO title={`Post of @${username}`} />
      <Grid gutter={10}>
        <Grid.Col xs={12} sm={6} md={6} lg={6}>
          <Image
            src={placeholder}
            alt="Picture post"
            radius="md"
            imageRef={ref}
          />
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

        <Grid.Col xs={12} sm={6} md={6} lg={6}>
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
