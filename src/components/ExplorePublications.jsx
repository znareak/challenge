import { useEffect, useState } from "react";
import { explorePublications } from "../lensQueries/explorePublications";
import { Select, Flex, Input, Grid, Title, Box } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import Post from "./Post";
import PostsLoader from "./PostsLoader";

const MAX_WIDTH_FILTER = 200;

export default function ExplorePublications() {
  // This state could be manages by react-query or swc engine from vercel
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const IS_POSTS_AVAILABLE = posts?.items?.length > 0;

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        const request = {
          sortCriteria: "LATEST", //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
          noRandomize: true,
          sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
          publicationTypes: ["POST"],
          cursor: '{"timestamp":1,"offset":0}',
          limit: 24,
        };
        const response = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next
        console.log(response);
        setPosts(response);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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

      {IS_POSTS_AVAILABLE && <Grid gutter={10}>{posts.items.map(Post)}</Grid>}
    </Box>
  );
}
