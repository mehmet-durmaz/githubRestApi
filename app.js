const githubForm = document.getElementById("github-form");
const formInput = document.getElementById("githubname");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
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
            ui.showInfo(response.user)
            ui.showRepoInfo(response.repo);
        }
    })
    .catch(err => console.log(err));
    }

    
    
    
    

    

    e.preventDefault();
}

