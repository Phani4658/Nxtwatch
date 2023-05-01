import React from 'react'

const ModeContext = React.createContext({
  activeMode: 'Light',
  selectedRoute: 'Home',
  changeMode: () => {},
  changeRoute: () => {},
  addToSavedVideos: () => {},
  deleteFromSavedVideos: () => {},
})

export default ModeContext
