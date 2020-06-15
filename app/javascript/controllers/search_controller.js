import { Controller } from 'stimulus';

export default class extends Controller {
	static targets = ["query", "cocktails"]
  
  connect() {
  }

  submit() {
    const value = this.queryTarget.value
    fetch(`/?query=${value}`, {
      headers: { accept: 'application/json'}
    }).then((response) => response.json())
    .then(data => console.log(data))
  }

  replaceData = (data) => {
    this.cocktailsTarget.innerHTML = data;
  }
}