import React from 'react'
import styled from 'styled-components';
//import { Link } from "react-router-dom";

export default function Home() {
    return (
        <MainContainer>
            <DetailContainer>
                <BioContainer>
                    <ImageContainer>
                        <ProfilPicture
                            src="https://avatars1.githubusercontent.com/u/58623790?s=460&u=72e54bfd5307d90260d2a33dd34d8be68c3c8b7a&v=4"
                            alt="new"
                        />
                    </ImageContainer>
                    <TextContainer>
                        <UserName>Khazar Guluzade</UserName>
                        <UserInfoContainer>
                            <ul>
                                <li>Sirket: Edakik </li>
                                <li>Bio: fsdfs </li>
                                <li>Tarih: 12.05.2019 </li>
                            </ul>
                        </UserInfoContainer>
                        <ButtonGroupContainer>
                            <FollowButton>Takipci Sayisi: 12 </FollowButton>
                            <FollowButton>Takip Edilen Sayisi: 12 </FollowButton>
                        </ButtonGroupContainer>
                    </TextContainer>
                </BioContainer>
            </DetailContainer>
            <RepoContainer>
                <p>dasdasdasdasdasd</p>
            </RepoContainer>
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


const DetailContainer = styled.div`
display: flex;
border: 1px solid black;
margin-bottom: 10px;
flex-direction: column;
width: 100%;
padding: 10px;
`;


const ImageContainer = styled.div`
width: 152px;
height: 152px;
border-radius: 76px;
border: 1px solid #dedede;
justify-content: center;
align-items: center;
display: flex;

`;

const ProfilPicture = styled.img`
width: 150px;
height: 150px;
border-radius: 75px;
`;

const UserName = styled.p`
font-size: 36px;
font-weight: bold;
margin: 0;
padding: 0;
`;


const BioContainer = styled.div`
display: flex;
flex-direction: row;
`;

const ButtonGroupContainer = styled.div`
display: flex;
`;


const FollowButton = styled.div`
margin-right: 45px;
font-size: 16px;
`;

const RepoContainer = styled.div`
display: flex;
margin-bottom: 5px;
`;


const TextContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 24px;
justify-content: space-between;
`;

const UserInfoContainer = styled.div`
display: flex;
flex-direction: row;
margin-left: 24px;
justify-content: space-between;
`;
