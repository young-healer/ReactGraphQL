import { useQuery } from "graphql-hooks";
import React from "react";

import {
  NotFound,
  Button,
  DivWrapper,
  LinkWrapper,
  LoaderShow,
  Title,
  Main,
  CountryInfo,
  CountryInfoMain,
  CountryInfoTitle
} from "../components/StyledComponents";

const Country = () => {
  const countryCode = document.location.pathname.replace("/country/", "");
  const allPostsQuery = `
  query {
    country(code: "${countryCode}") {
      name
      native
      phone
      currency
      languages {
        name
      }
    }
  }
`;
  const { loading, data, error } = useQuery(allPostsQuery);

  return (
    <DivWrapper>
      <Title>{data ? data.country.name : ""}</Title>
      <PostList loading={loading} error={error} data={data} />
    </DivWrapper>
  );
};

function PostList({ loading, error, data }) {
  const continentCode = localStorage.getItem("continentCode");
  if (loading) return <LoaderShow />;
  if (error) return "There was an error loading the posts :(";
  if (!data || !data.country)   return (
    <DivWrapper>
      <NotFound>Not Found</NotFound>
    </DivWrapper>
  );

  return (
    <DivWrapper>
      <Main key={data.country.name}>
        <CountryInfoMain>
          <CountryInfoTitle>Country</CountryInfoTitle>
          <CountryInfo>{data.country.name}</CountryInfo>
        </CountryInfoMain>
        <CountryInfoMain>
          <CountryInfoTitle>Currency</CountryInfoTitle>
          <CountryInfo>{data.country.currency}</CountryInfo>
        </CountryInfoMain>
        <CountryInfoMain>
          <CountryInfoTitle>Native Language</CountryInfoTitle>
          <CountryInfo>{data.country.native}</CountryInfo>
        </CountryInfoMain>
        <CountryInfoMain>
          <CountryInfoTitle>Phone Code</CountryInfoTitle>
          <CountryInfo>{data.country.phone}</CountryInfo>
        </CountryInfoMain>
        <CountryInfoMain>
          <CountryInfoTitle>Other Languages</CountryInfoTitle>
          {data.country.languages.map(lang => (
            <CountryInfo key={lang.name}>{lang.name}</CountryInfo>
          ))}
        </CountryInfoMain>
      </Main>
      <LinkWrapper>
        <Button to={`/continent/${continentCode}`}>Continents</Button>
      </LinkWrapper>
    </DivWrapper>
  );
}

export default Country;
