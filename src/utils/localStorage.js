// store user booking details 
const setUserData = (user)=>{
    let usersData = []
    const previousUsers = JSON.parse(localStorage.getItem('usersData'));
    if(previousUsers){
        usersData = [...previousUsers,user];
    }
    else{
        usersData = [user]
    }
    localStorage.setItem('usersData', JSON.stringify(usersData));
}

// find stored booking details in local storage
const getUserData = ()=>{
    const previousUsers = JSON.parse(localStorage.getItem('usersData'));
    if(previousUsers){
        return previousUsers;
    }
    else{
        return [];
    }
}
export {setUserData, getUserData};