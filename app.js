const githubForm = document.getElementById("github-form");
const formInput = document.getElementById("githubname");
const LastUsers = document.getElementById("last-users");
const clearLastUser = document.getElementById("clear-last-users");
const github = new Github();
const ui = new UI();


eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUser.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){
    let username = formInput.value.trim();

    if(username === ""){
        alert("lütfen boş bırkma");
    }
    else{
       
    github.getDataFromGithub(username)
    .then(response => {
        if(response.user.message === "Not Found"){
            ui.showError("kullanıcı bulunumadı");
        }
        else{
            ui.addSearchedToUI(username);
            Storage.addSearchedToStorage(username);
            ui.showInfo(response.user)
            ui.showRepoInfo(response.repo);
        }
    })
    .catch(err => console.log(err));
    }

    
    
    
    

    

    e.preventDefault();
}

function clearAllSearched(){

}
function getAllSearched(){
    let users = Storage.getSearchedFromStorage();

    let result = "";

    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`
    });

    LastUsers.innerHTML = result;
    
}
