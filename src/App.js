import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// styles
import './App.css'

// pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ActiveUsers from './components/ActiveUsers';
import Profile from './pages/profile/Profile';
import Meeting from './pages/meeting/Meeting';
import LandingPage from './pages/landingpage/LandingPage';
import Schedule from './pages/schedule/Schedule';


function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <>
        <BrowserRouter>
          {user && <Sidebar></Sidebar>}
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path="/home">
                {user && <Redirect to="/" />}
                {!user && <LandingPage />}
              </Route>
              <Route exact path="/profile/:uid">
                {!user && <Redirect to="/login" />}
                {user && <Profile />}
              </Route>
              <Route exact path="/">
                {!user && <Redirect to="/home" />}
                {user && <Dashboard />}
              </Route>
              <Route exact path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route exact path="/schedule">
                {!user && <Redirect to="/login" />}
                {user && <Schedule />}
              </Route>
              <Route exact path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              <Route exact path="/login">
                {!user && <Login />}
                {user && <Redirect to="/" />}
              </Route>
              <Route exact path="/signup">
                {!user && <Signup />}
                {user && <Redirect to="/" />}
              </Route>
              <Route exact path="/projects/:id/meeting">
                {user && <Meeting />}
                {!user && <Redirect to="/" />}
              </Route>
              <Route exact path="/users">
                {user && <ActiveUsers />}
                {!user && <Redirect to="/" />}
              </Route>
            </Switch>
          </div>
          
          {/* {user && (
            <ActiveUsers></ActiveUsers>
          )} */}
          
        </BrowserRouter>
          
        </>
      )}
    </div>
  );
}

export default App
