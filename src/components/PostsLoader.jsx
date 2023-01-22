import { Skeleton, Grid, Box, Flex } from "@mantine/core";

const fakeCols = Array(20).fill(null);
const MAX_WIDTH_FILTER = 200;

export default function PostsLoader({ withFilter = true }) {
  return (
    <Box mb="2rem">
      {withFilter && (
        <Flex mt="3rem" mb="2.5rem" gap={8}>
          <Skeleton height={69} sx={{ flex: `1 1 ${MAX_WIDTH_FILTER}px` }} />
          <Skeleton
            height={69}
            sx={{ flex: `1 1 calc(100% - ${MAX_WIDTH_FILTER}px)` }}
          />
        </Flex>
      )}
      <Grid gutter={10} className="opacity-gradient">
        {fakeCols.map((_, index) => (
          <Grid.Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Skeleton width="100%" height={260} radius="md" />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
