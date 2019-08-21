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

const Continents = () => {
  const allPostsQuery = `
    query {
      continents {
        name
        code
      }
    }
  `;
  const { loading, data, error } = useQuery(allPostsQuery);

  return (
    <DivWrapper>
      <LinkWrapper>
        <Button to="/">Home</Button>
      </LinkWrapper>
      <Title>Continents</Title>
      <PostList loading={loading} error={error} data={data} />
    </DivWrapper>
  );
};

function PostList({ loading, error, data }) {
  if (loading) return <LoaderShow />;
  if (error) return "There was an error loading the posts :(";
  if (!data || !data.continents || !data.continents.length)
    return (
      <DivWrapper>
        <NotFound>Not Found</NotFound>
      </DivWrapper>
    );

  return (
    <ItemsList>
      {data.continents.map(post => (
        <Item key={post.name}>
          <Link to={`/continent/${post.code}`}>{post.name}</Link>
        </Item>
      ))}
    </ItemsList>
  );
}

export default Continents;
