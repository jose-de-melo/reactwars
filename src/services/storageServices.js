export function verifyStorage(){
        let userLogged = JSON.parse(localStorage.getItem("@reactwars/userLogged"))
        return userLogged
}

export function removeUserLogged(){
    localStorage.removeItem("@reactwars/userLogged")
}

export function addUser(user, password){
    let logins = []

    if(localStorage.hasOwnProperty("@reactwars/logins"))
        logins = JSON.parse(localStorage.getItem("@reactwars/logins"))

    logins.push({'login': user, 'password': password})
    localStorage.setItem('@reactwars/logins', JSON.stringify(logins))
}

export function verifyLoginOnStorage(user, password){
    let logins = JSON.parse(localStorage.getItem("@reactwars/logins"))

    if(!logins)
      return false

    for(let i = 0; i < logins.length; i++){
      let element = logins[i]
      
      if(element.login === user && element.password === password){
        localStorage.setItem("@reactwars/userLogged", JSON.stringify(element))
        return true;
      }
    }
    return false
}