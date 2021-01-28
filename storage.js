class Storage{

    static getSearchedFromStorage(username){

        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addSearchedToStorage(username){

        let users = this.getSearchedFromStorage();

        if(users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));
    }

    static clearAllSearchedFromStorage(){
        
        localStorage.removeItem("searched");

    }



}