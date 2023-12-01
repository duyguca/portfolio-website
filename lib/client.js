import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://graphql.contentful.com/content/v1/spaces/qf6xifiyntpr/environments/master",
      headers: {
        Authorization: `Bearer P6o8mr8zc-3gsM3lwKwvmQxhsJ_iIaKmM6zslfGkat8`,
      },
    }),
  });
});
