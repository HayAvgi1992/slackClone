import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ sendMessage }) {
    const [userInput, setUserInput] = useState("")

    const send = (e) => {
        e.preventDefault();
        if (userInput) {
            sendMessage(userInput)
            setUserInput("")
        }
        
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input
                        onChange={e => { setUserInput(e.target.value) }}
                        type='text'
                        value={userInput}
                        placeholder='Message here...'
                    />
                    <SendButton onClick={send} type="submit">
                        <MySendIcon />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px; 
    padding-right: 20px; 
    padding-bottom: 24px; 
`

const InputContainer = styled.div`
     border: 1px solid #8D8D8E;
     border-radius: 6px;
     form {
        display: flex;
        align-items: center;
        height: 42px;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }
        input: focus {
            outline: none;
        }
     }

`

const SendButton = styled.button`
     background: #007a5a;
     width: 33px;
     height: 33px;
     display: flex;
     align-items: center;
     justify-content: center
     cursor: pointer;
     margin-right: 8px;
     border-radius:8px;
     border: none;

     .MuiSvgIcon-root {
         width: 18px;

         
     }
     :hover {
         background: #148567
     }
`

const MySendIcon = styled(SendIcon)`
    color: #e6e6e6;
    padding-left: 3px;
`