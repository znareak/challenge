import { useParams } from "react-router-dom";
import { Grid, Text, Box, Flex } from "@mantine/core";
import { FiArchive } from "react-icons/fi";
import Error from "../components/Error";
import useUser from "../hooks/useUser";
import Author from "../components/Author";
import PostsUser from "../components/PostsUser";
import UserPageLoader from "../components/UserPageLoader";
import SEO from "../components/SEO";

export default function User() {
  const { id } = useParams();
  const { user, error, isLoading } = useUser(id);
  const { name, handle, id: userId, picture, stats = {} } = user;
  const { totalFollowers, totalFollowing } = stats;
  console.log({ user });
  if (error) return <Error error={error} />;

  if (isLoading) return <UserPageLoader />;

  return (
    <>
      <SEO title={`@${name || handle} profile`} />
      <Grid>
        <Grid.Col span={2}>
          <Box
            p="1rem"
            sx={(theme) => ({
              backgroundColor: theme.colors.dark[9],
              borderRadius: "4px",
            })}
            mb="0.5rem"
          >
            <Author
              username={name || handle}
              src={picture?.original?.url}
              direction="column"
              justify="center"
              textMarginTop="0.5rem"
              avatarSize="md"
              textSize="sm"
            />

            <Flex
              justify="center"
              gap="0.6rem"
              style={{ textAlign: "center" }}
              mt="1.5rem"
            >
              <Text size="sm">
                {totalFollowers}
                <Text c="dimmed">Followers</Text>
              </Text>

              <Text size="sm">
                {totalFollowing}
                <Text c="dimmed">Following</Text>
              </Text>
            </Flex>
          </Box>

          <Box
            p="1rem"
            sx={(theme) => ({
              backgroundColor: theme.colors.dark[9],
              borderRadius: "4px",
              cursor: "not-allowed",
              userSelect: "none",
            })}
          >
            <Text style={{ textAlign: "center" }}>Lens Publications</Text>
            <Text
              c="dimmed"
              mt="1rem"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Collected Posts <FiArchive style={{ marginLeft: "0.5rem" }} />
            </Text>
          </Box>
        </Grid.Col>

        <Grid.Col span={9}>
          <PostsUser id={userId} />
        </Grid.Col>
      </Grid>
    </>
  );
}
