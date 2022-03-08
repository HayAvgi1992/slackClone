import React from 'react'
import styled from 'styled-components'


function ChatMessage({ message }) {
    return (
        <Container>
            <UserAvatar>
                <img alt="" src="https://randomuser.me/api/portraits/women/63.jpg" />
            </UserAvatar>

            <MessageContent>
                <Name>
                    Hay Avgi
                    <span>1/1/1</span>
                </Name>

                <Text>
                    Some Challenge
                </Text>
            </MessageContent>
        </Container>
    )
}


export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    // justify-content: center;
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    img {
        width: 100%;
    }
    margin-right: 8px;
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.3;
    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97, 97, 97);
        font-size: 13px;
    }
`

const Text = styled.span`

`
