import React from "react";
import { useQuery } from "graphql-hooks";
import { Link } from "react-router-dom";

import {
  NotFound,
  Button,
  Item,
  DivWrapper,
  ItemsList,
  LinkWrapper,
  LoaderShow,
  Title
} from "../components/StyledComponents";

const Countries = () => {
  localStorage.setItem(
    "continentCode",
    document.location.pathname.replace("/continent/", "")
  );
  const continentCode = document.location.pathname.replace("/continent/", "");
  const allPostsQuery = `
  query {
      continent(code: "${continentCode}") {
          name
          countries {
              name
              code
          }
      }
  }
`;
  const { loading, data, error } = useQuery(allPostsQuery);
  return (
    <DivWrapper>
      <LinkWrapper>
        <Button to="/continents">Continents</Button>
      </LinkWrapper>
      <Title>Countries</Title>
      <PostList loading={loading} error={error} data={data} />
    </DivWrapper>
  );
};

function PostList({ loading, error, data }) {
  if (loading) return <LoaderShow />;
  if (error) return "There was an error loading the posts :(";
  if (!data || !data.continent || !data.continent.countries.length)
    return (
      <DivWrapper>
        <NotFound>Not Found</NotFound>
      </DivWrapper>
    );

  return (
    <ItemsList>
      {data.continent.countries.map(post => (
        <Item key={post.name}>
          <Link to={`/country/${post.code}`}>{post.name}</Link>
        </Item>
      ))}
    </ItemsList>
  );
}

export default Countries;
