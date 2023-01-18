import { Select, Flex, Input} from "@mantine/core";
import { FiSearch } from "react-icons/fi";

const MAX_WIDTH_FILTER = 200;

export default function ExploreFilters({ currentSort, onChangeSort }) {
  return (
    <Flex mt="3rem" mb="2.5rem" gap={8}>
      <Select
        defaultValue={currentSort}
        onChange={onChangeSort}
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
  );
}
