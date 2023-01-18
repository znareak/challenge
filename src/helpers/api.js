import { explorePublications } from "../lensQueries/explorePublications";

export async function getPosts({
  cursor = '{"timestamp":1,"offset":0}',
  sort = "LATEST",
} = {}) {
  const request = {
    sortCriteria: sort, //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
    noRandomize: true,
    sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
    publicationTypes: ["POST"],
    cursor,
    limit: 24,
  };
  const response = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next
  return response;
}
