import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <MainContainer>
            <ListingContainer>
                <ListUl>
                    <ListLi>sdasd</ListLi>
                    <ListLi>sdasd</ListLi>
                    <ListLi>sdasd</ListLi>
                    <ListLi>sdasd</ListLi>
                </ListUl>
            </ListingContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
background-color: whitesmoke;
font-size: 20px;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex: 1;
flex-direction: column;
`;


const ListingContainer = styled.div`
border: 5px solid black;
width: 100%;
`;

const ListUl = styled.ul`
display: flex;
padding: 0 10px;
flex-direction: row;
flex-wrap: wrap;
`;

const ListLi = styled.li`
display: flex;
width: 25%;
`;
