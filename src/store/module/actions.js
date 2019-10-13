import firebaseDB from 'boot/firebase'

export const getMatches = ({ commit }, payload) => {
  firebaseDB.ref('matches/').once('value', snapshot => {
    let fromFBmatches = snapshot.val()
    console.log(snapshot.val())
    let matchesUpdated = []
    for (let match of fromFBmatches) {
      let matchId = fromFBmatches.indexOf(match)
      match.id = matchId
      matchesUpdated.push(match)
      firebaseDB.ref('matches').child(matchId).update({ id: matchId })
      for (let team of match.teams) {
        let teamId = match.teams.indexOf(team)
        let players = team.players
        let matchID = matchId
        for (let key in players) {
          matchesUpdated[matchID].teams[teamId].players[key].id = key
          matchesUpdated[matchID].teams[teamId].players[key].tel = null
          matchesUpdated[matchID].teams[teamId].players[key].email = null
          firebaseDB.ref('matches/' + matchID + '/' + 'teams/' + teamId + '/' + 'players').child(key).update({ id: key })
        }
      }
    }
    console.log(matchesUpdated)
    commit('getMatches', { matchesUpdated })
  })
}
export const globalBtnsDisable = ({ commit }) => {
  commit('globalBtnsDisable')
}
export const sendMail = ({ commit }, payload) => {
  firebaseDB.ref('emails/' + payload.matchData.sport + '/' + payload.matchData.city + '/' + payload.matchData.adress + '/').push(payload.email)
}
export const deletePlayer = ({ commit, state }, payload) => {
  let matches = state.matches.matchesUpdated
  const match = matches.find((match) => {
    return match.id === payload.matchID
  })
  let players = Object.values(match.teams[payload.team].players)
  const player = players.find((player) => {
    return player.tel === payload.myTel
  })
  firebaseDB.ref('matches/' + payload.matchID + '/' + 'teams/' + payload.team + '/' + 'players/' + player.id).remove()
  commit('deletePlayer', {
    playerData: payload,
    playerID: player.id
  })
}
export const registerPlayer = ({ commit }, payload) => {
  const newPlayerState = {
    name: payload.newPlayer.name,
    profi: payload.newPlayer.profi,
    age: payload.newPlayer.age
  }
  const newPlayerConf = {
    name: payload.newPlayer.name,
    tel: payload.newPlayer.tel,
    email: payload.newPlayer.email,
    profi: payload.newPlayer.profi,
    age: payload.newPlayer.age
  }
  let adress = payload.match.adress.replace(/\s+/g, '')
  let date = payload.match.date.replace(/[^\w]|_/g, '')
  let time = payload.match.time.replace(/[^\w\s]|_/g, '')
  firebaseDB.ref('matches/' + payload.matchIndex + '/' + 'teams/' + payload.teamIndex + '/' + 'players/').push(newPlayerState)
  firebaseDB.ref('playerData/' + payload.match.sport + '/' + payload.match.city + '/' + adress + '/' + date + '/' + time + '/' + 'teams/' + payload.teamIndex + '/' + 'players/').push(newPlayerConf)
    .then(() => {
      commit('registerPlayer', payload)
    })
    .catch(error => {
      console.log(error)
    })
}
