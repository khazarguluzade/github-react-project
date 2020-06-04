import React,{useState} from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { getSearch } from '../redux/actions/searchActions'
import { useDispatch, useSelector } from 'react-redux';


// memo eklenecek
export default function Home() {
    const dispatch = useDispatch();
    const searchSelector = useSelector(state => state.search);


    console.log(searchSelector);

    const searchUser = () => {
        dispatch(getSearch());
    }
    return (
        <MainContainer>
            <SearchContainer>
                <h1> Github Kullanıcısı Ara</h1>
                {
                    searchSelector.loading &&
                    <h1>BEKLE LA GETİRİYORUZ</h1>
                }
                <InputContainer>
                    <input placeholder='Kullanıcı adı girin...' />
                    <SearchButton <input onChange={(e) => setSearchTerm(e)} type="text"/>Ara</SearchButton>
                </InputContainer>
            </SearchContainer>
            <ListingContainer>
                <ListUl>
                    {
                        searchSelector.users.length > 0 && searchSelector.users.map((user) => (
                            <ListLi key={user.id}>
                                <Avatar src={user.avatar_url} />
                                <Link to={`/UserDetail/${user.login}`}>{user.login}</Link>
                            </ListLi>
                        ))
                    }
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
border: 1px solid black;
margin-bottom: 10px;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
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
border: 1px solid black;
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

const Avatar = styled.img`
    width:100px;
    height:100px;
    border-radius:50px;
`;

