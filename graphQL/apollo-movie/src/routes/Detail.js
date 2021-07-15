import React from "react";
import {useParams} from "react-router-dom";
import {useQuery, gql} from "@apollo/client";
import styled from "styled-components";

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const GET_MOVIE = gql`
    query getMovie($id:Int!){
        movie(id: $id){
            title
            medium_cover_image
            language
            rating
            description_intro
        }
    }`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
`;

export default () => {
    const {id} = useParams();
    const {loading, data} = useQuery(GET_MOVIE, {variables: {id: +id}});
    console.log(loading, data);
    return loading ? <Loading>Loading,,,</Loading> :
        <Container>
            <Column>
                <Title>Name</Title>
                <Subtitle>English · 4.5</Subtitle>
                <Description>lorem ipsum lalalla </Description>
            </Column>
            <Poster></Poster>
        </Container>
    //     <div>
    //     <img src={data.movie.medium_cover_image} alt=""/>
    //     <h1>{data.movie.title}</h1>
    //     <p>{data.movie.description_intro}</p>
    // </div>
};