import { Select, Flex, Input, Grid, Title, Box } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import usePageBottom from "../hooks/usePageBottom";
import usePosts from "../hooks/usePosts";
import Post from "./Post";
import PostsLoader from "./PostsLoader";

const MAX_WIDTH_FILTER = 200;

export default function ExplorePublications() {
  const { posts, isLoading, error, isPostsAvailable } = usePosts();
  const isReachedBottom = usePageBottom();
  console.log({ isReachedBottom });

  if (isLoading) return <PostsLoader />;

  return (
    <Box component="section" mb="2rem">
      <Flex mt="3rem" mb="2.5rem" gap={8}>
        <Select
          label="Sort posts by:"
          placeholder="Select one"
          labelProps={{ style: { marginBottom: "0.6rem" } }}
          style={{ flex: `1 1 ${MAX_WIDTH_FILTER}px` }}
          data={[
            { value: "LATEST", label: "Date Created" },
            { value: "TOP_COLLECTED", label: "Most Collected" },
            { value: "TOP_MIRRORED", label: "Most Mirroded" },
            { value: "TOP_COMMENTED", label: "Most Commented" },
          ]}
        />
        <Input.Wrapper
          label="Search a post by keywords:"
          labelProps={{ style: { marginBottom: "0.6rem" } }}
          sx={{ flex: `1 1 calc(100% - ${MAX_WIDTH_FILTER}px)` }}
        >
          <Input
            type="search"
            name="search"
            sx={{ width: "100%" }}
            rightSection={<FiSearch />}
          />
        </Input.Wrapper>
      </Flex>

      {error && (
        <Title order={4}>
          An unexpected error ocurred: <code>{error.message}</code>
        </Title>
      )}

      {isPostsAvailable && <Grid gutter={10}>{posts.map(Post)}</Grid>}
    </Box>
  );
}
