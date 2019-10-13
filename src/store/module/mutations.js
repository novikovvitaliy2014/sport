
export const getMatches = (state, payload) => {
  state.matches = payload
}
export const globalBtnsDisable = (state) => {
  state.globalBtns = false
}
export const deletePlayer = (state, payload) => {
  console.log(payload)
  console.log(payload.playerData)
  console.log(payload.playerData.matchID)
  console.log(state.matches)
  let matchID = payload.playerData.matchID
  state.matches.matchesUpdated[matchID].teams[payload.playerData.team].players[payload.playerID] = null
  let updatedPlayers = state.matches
  console.log(updatedPlayers)
  // const match = state.matches.find((project) => {
  //   return match.id === payload.matchID
  // })
  // const player = match.teams.payload.team.players.find((project) => {
  //   return player.tel === payload.myTel
  // })
}
export const registerPlayer = (state, payload) => {
  state.newPlayer = payload.newPlayer
  console.log(payload.newPlayer)
}
