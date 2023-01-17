import { useEffect, useState } from "react";
import { explorePublications } from "../lensQueries/explorePublications";
import { Select, Flex, Input, Grid, Title, Image, Box } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import { formatIpfImage } from "../helpers/utils";

export default function ExplorePublications() {
  // This state could be manages by react-query or swc engine from vercel
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const init = async () => {
    try {
      setLoading(true);
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
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Box component="section" mb="2rem">
      <Flex mt="3rem" mb="2.5rem" gap={8}>
        <Select
          label="Sort posts by:"
          placeholder="Select one"
          labelProps={{ style: { marginBottom: "0.6rem" } }}
          style={{ maxWidth: "300px" }}
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
          sx={{ width: "calc(100% - 300px)" }}
        >
          <Input
            type="search"
            name="search"
            sx={{ width: "100%" }}
            rightSection={<FiSearch />}
          />
        </Input.Wrapper>
      </Flex>

      {isLoading && <Title order={4}>Loading posts...</Title>}
      {error && (
        <Title order={4}>
          An unexpected error ocurred: <code>{error.message}</code>
        </Title>
      )}

      {posts?.items?.length > 0 && (
        <Grid gutter={10}>
          {posts.items.map((post) => {
            const { id, metadata } = post;
            const { content, description, media } = metadata;
            const { url, width = 300, height = 300 } = media[0]?.original;
            const src = formatIpfImage(url);
            return (
              <Grid.Col span={3} key={id}>
                <Image
                  src={src}
                  width={width}
                  height={height}
                  radius="md"
                  withPlaceholder
                />
              </Grid.Col>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}
