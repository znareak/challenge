import { Skeleton, Box } from "@mantine/core";

const fakeCols = Array(5).fill(null);

export default function PostCommentsLoader() {
  return (
    <Box mt="2rem" className="opacity-gradient">
      <Skeleton height={24} mb="1rem" />

      {fakeCols.map((_, index) => (
        <Skeleton
          width="100%"
          height={76}
          radius="md"
          key={index}
          mb="0.5rem"
        />
      ))}
    </Box>
  );
}
