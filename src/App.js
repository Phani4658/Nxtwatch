import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import HomeRoute from './components/HomeRoute'
import ModeContext from './context/ModeContext'
import NotFound from './components/NotFound'
import VideoDetails from './components/VideoDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'

// Replace your code here
class App extends Component {
  state = {activeMode: 'Light', selectedRoute: 'Home', savedVideos: []}

  changeMode = () => {
    this.setState(prevState => ({
      activeMode: prevState.activeMode === 'Light' ? 'Dark' : 'Light',
    }))
  }

  changeRoute = event => {
    this.setState({selectedRoute: event.target.getAttribute('id')})
  }

  addToSavedVideos = videoDetails => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoDetails],
    }))
  }

  deleteFromSavedVideos = id => {
    const {savedVideos} = this.state
    const modifiedSavedVideos = savedVideos.filter(video => video.id !== id)
    this.setState({savedVideos: modifiedSavedVideos})
  }

  render() {
    const {activeMode, selectedRoute, savedVideos} = this.state
    return (
      <ModeContext.Provider
        value={{
          activeMode,
          selectedRoute,
          savedVideos,
          changeMode: this.changeMode,
          changeRoute: this.changeRoute,
          addToSavedVideos: this.addToSavedVideos,
          deleteFromSavedVideos: this.deleteFromSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ModeContext.Provider>
    )
  }
}

export default App
