import './App.css';
import db from './firebase'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { auth } from './firebase'

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    // onSnapshot is a webHook which run every time our firestore DB get updated.
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map(doc => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user")
      setUser(null)
    })
  }

  useEffect(() => {
    getChannels()
  }, [])


  return (
    <div className="App">
      <Router>
        {!user ?
          <Login setUser={setUser} /> :
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">
                  <NoChannel> 
                    Hey There! <br/>
                    Please Select or Create Channel 
                  </NoChannel>
                </Route>
              </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;  
`

const NoChannel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  color: #6C476C;
  text-indent: 100px;
  letter-spacing: 2px;
`