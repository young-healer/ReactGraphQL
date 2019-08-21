import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderShow = () => {
  return (
    <LoaderWrap>
      <Loader type="TailSpin" color="#fff" height="50" width="50" />
    </LoaderWrap>
  );
};

export const Main = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const CountryInfo = styled.span`
  color: #fff;
`;

export const CountryInfoTitle = styled.span`
  color: tomato;
  border-bottom: 1px solid;
`;

export const CountryInfoMain = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 150px;
  align-items: center;
  margin: 10px;
`;

export const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const PushMe = styled.span`
  margin: 15px;
  color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  color: tomato;
`;

export const ButtonBack = styled.a`
  padding: 10px 20px;
  border: 1px solid;
  margin: 5px;
  color: #fff;
  text-decoration: none;

  &:hover {
    background: tomato;
    cursor: pointer;
    color: #fff;
  }
`;

export const Button = styled(Link)`
  padding: 10px 20px;
  border: 1px solid;
  margin: 5px;
  color: #fff;
  text-decoration: none;

  &:hover {
    background: tomato;
    cursor: pointer;
    color: #fff;
  }
`;

export const Item = styled.div`
  margin: 5px;
  color: #fff;
`;

export const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const ItemsList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
  margin: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NotFound = styled.span`
  color: #fff;
  font-size: 20px;
`;
