import { Skeleton, Grid } from "@mantine/core";

export default function PostPageLoader() {
  return (
    <Grid gutter={10} className="opacity-gradient">
      <Grid.Col xs={12} sm={6} md={6} lg={6}>
        <Skeleton width="100%" height={639} radius="md" />
        <Skeleton width="100%" height={37} mt={12} />
      </Grid.Col>
      
      <Grid.Col xs={12} sm={6} md={6} lg={6}>
        <Skeleton width="100%" height={756} radius="md" />
      </Grid.Col>
    </Grid>
  );
}
