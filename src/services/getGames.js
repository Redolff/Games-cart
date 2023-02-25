const apiURL = 'https://60e0eb3e6b689e001788cc1d.mockapi.io/api/games'

const getGames = () => {
    return fetch(apiURL, {
        method: 'GET',
        headers: {'content-type' : 'application/json'},
    }).then(res => {
        if(res.ok){
            return res.json();
    }
    }).then(games => {
        return games
    }).catch(error => {
        console.log(error)
    })
}

export default getGames