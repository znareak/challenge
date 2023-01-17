import { useEffect } from "react";
import { explorePublications } from "../lensQueries/explorePublications";
import { Select, Flex, InpuT, Input } from "@mantine/core";

export default function ExplorePublications(props) {
  const init = async () => {
    try {
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Flex mt="2rem" gap={8}>
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
          labelProps={{ style: { marginBottom: "0.6rem" } }}v
          sx={{ width: "calc(100% - 300px)" }} 
        >
          <Input type="search" name="search" sx={{ width: "100%" }} />
        </Input.Wrapper>
      </Flex>
    </div>
  );
}
