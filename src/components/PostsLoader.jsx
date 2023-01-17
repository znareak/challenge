import { Skeleton, Grid, Box, Flex } from "@mantine/core";

const fakeCols = Array(20).fill(null);
const MAX_WIDTH_FILTER = 200;

export default function PostsLoader() {
  return (
    <Box mb="2rem">
      <Flex mt="3rem" mb="2.5rem" gap={8}>
        <Skeleton height={69} sx={{ flex: `1 1 ${MAX_WIDTH_FILTER}px` }} />
        <Skeleton
          height={69}
          sx={{ flex: `1 1 calc(100% - ${MAX_WIDTH_FILTER}px)` }}
        />
      </Flex>

      <Grid gutter={10}>
        {fakeCols.map((_, index) => (
          <Grid.Col span={3} key={index}>
            <Skeleton width="100%" height={200} radius="md" />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
