import { Skeleton, Grid } from "@mantine/core";

export default function UserPageLoader() {
  return (
    <Grid gutter={10} className="opacity-gradient">
      <Grid.Col span={2}>
        <Skeleton width="100%" height={167} radius="md" />
        <Skeleton width="100%" height={97} radius="md" mt="0.5rem" />
      </Grid.Col>

      <Grid.Col span={9}>
        <Skeleton width="100%" height={600} radius="md" />
      </Grid.Col>
    </Grid>
  );
}
