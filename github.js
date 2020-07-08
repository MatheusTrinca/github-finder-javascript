class Github {
  constructor(){
    this.client_id = '8b7b20efd90d0ef37d00';
    this.client_secret = 'd1556019efab3a619e1e1887e15ae811074ef355';
    this.count = 5;
    this.sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      //profile: profile // ES6 deixa fazer isso
      //repos: repos // ES6 deixa fazer isso
      profile,
      repos
    }
  }
}