import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type='text' placeholder='Message here...'/>
                    <SendButton>
                        <MySendIcon/>
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

const SendButton = styled.div`
     background: #007a5a;
     border-radius: 2px;
     width: 33px;
     height: 33px;
     display: flex;
     align-items: center;
     justify-content: center
     margin-right: 5px;
     cursor: pointer;
     margin-right: 8px;
     border-radius:8px;

     .MuiSvgIcon-root {
         width: 18px;
     }
     :hover {
         background: #148567
     }
`

const MySendIcon = styled(SendIcon)`
     color: #e6e6e6;
    padding-left: 7px;


`