// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search User
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  //Get Input Text
  const userText = e.target.value;
  if(userText !== ''){
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // Mostrar Alerta
          ui.showAlert('Usuário não encontrado', 'alert alert-danger'); // classes do Bootstrap
        }else{
          // Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  }else{
    // Clear Profile
    ui.clearProfile();
  }
})