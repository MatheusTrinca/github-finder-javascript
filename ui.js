class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3 mb-md-0">Ver Perfil</a>
          </div>
          <div class="col-md-9">
            <div class="mx-auto text-center text-lg-left">
              <span class="mt-2 badge badge-primary">Repos Públicos: ${user.public_repos}</span>
              <span class="mt-2 badge badge-secondary">Gists Públicos: ${user.public_gists}</span>
              <span class="mt-2 badge badge-success">Seguidores: ${user.followers}</span>
              <span class="mt-2 badge badge-info">Seguindo: ${user.following}</span>
            </div>
            <br>
            <ul class="list-group">
              <li class="list-group-item">Empresa: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Localização: ${user.location}</li>
              <li class="list-group-item">Usuário desde: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Repositórios Recentes</h3>
      <div id="repos"></div>
    `;
  }
  
  showRepos(repos){
    let output = '';

    repos.forEach(repo =>{
      output = `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <div class="mx-auto text-center text-lg-left">
                <span class="mt-2 badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="mt-2 badge badge-secondary">Visualizações: ${repo.watchers_count}</span>
                <span class="mt-2 badge badge-success">Forks: ${repo.forks_count}</span>
              </div>
            </div>
          <div>
        </div>
      `;

      document.getElementById('repos').innerHTML += output;
    });
    
    
    
  }

  clearProfile(){
    this.profile.innerHTML = '';
  }

  showAlert(message, className){
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const searchContainer = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    searchContainer.insertBefore(div, search);

    setTimeout(() =>{
      this.clearAlert();
    }, 2000);

  }
  clearAlert(){
    const currAlert = document.querySelector('.alert');
    if(currAlert){
      currAlert.remove();
    }
  }

}