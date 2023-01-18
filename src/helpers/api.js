import { explorePublications } from "../lensQueries/explorePublications";

export async function getPosts({
  cursor = '{"timestamp":1,"offset":0}',
  sort = "TOP_COLLECTED",
} = {}) {
  console.log({ sort });
  const request = {
    sortCriteria: sort, //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
    noRandomize: true,
    sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
    publicationTypes: ["POST"],
    cursor,
    limit: 24,
  };
  const { items = [], pageInfo: { next, prev, totalCount } = {} } = await explorePublications(request);
  return {
    items,
    next,
    prev,
    totalCount,
  };
}
