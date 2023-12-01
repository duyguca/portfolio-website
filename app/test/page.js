import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
  query Test {
    __typename
    post(id: "7ElNnUPzsYwjKvQxmNV0Oo") {
      __typename
      title
    }
  }
`;

export default async function Test() {
  const responseX = await getClient().query({
    query,
  });

  const responseNav = await fetch(
    "https://graphql.contentful.com/content/v1/spaces/qf6xifiyntpr/environments/master",
    {
      method: "POST",
      body: JSON.stringify({
        query: `{ navigation(id: "32LM9VrdRJbNdrehLcChSD") { navigationTitle }}`,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer P6o8mr8zc-3gsM3lwKwvmQxhsJ_iIaKmM6zslfGkat8`,
      },
      next: { revalidate: 10 },
    }
  ).then((res) => res.json());

  console.log({ ssk: JSON.stringify(data) });
  return <div>Hello{responseNav?.data.navigation.navigationTitle}</div>;
}
