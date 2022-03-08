import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItemsData } from '../data/SidebarData'
import db from '../firebase'
import { useHistory } from 'react-router-dom'

function Sidebar({ rooms }) {
    const history = useHistory()


    const goToChannel = id => {
        if (id) {
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter channel name")
        if (promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Work Space
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>

            <MainChannels>
                {
                    sidebarItemsData.map((item, index) => (
                        <MainChannelItem key={index}>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>

            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel} />
                </NewChannelContainer>

                <ChannelList>
                    {rooms.map((item, index) => (
                        <Channel key={index} onClick={() => { goToChannel(item.id) }}>
                            # {item.name}
                        </Channel>
                    ))}
                </ChannelList>

            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
 background: #3F0E40
`
const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753
`

const Name = styled.div`

`

const NewMessage = styled.div`
    height: 36px;
    width: 36px;
    background: white;
    color: #3F0E40;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`
const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 30px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 28px;
    padding-left: 19px;
    padding-right: 19px;
`

const ChannelList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`