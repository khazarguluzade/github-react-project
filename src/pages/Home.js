import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <MainContainer>
            <SearchContainer>
                <h1> Github Kullanıcısı Ara</h1>
                <InputContainer>
                    <input placeholder='Kullanıcı adı girin...' />
                    <SearchButton>Ara</SearchButton>
                </InputContainer>
            </SearchContainer>
            <ListingContainer>
                <ListUl>
                    <ListLi>
                        <Link to="/UserDetail">KULLANUICI ADI</Link>
                    </ListLi>
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


const SearchContainer = styled.div`
display: flex;
border: 5px solid black;
margin-bottom: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;

const SearchButton = styled.button`
font-size: 20px;
`;

const InputContainer = styled.div`
display: flex;
margin-bottom: 5px;
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
