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
    .then(data => { 
     var cocktailHTML = "";
     var cocktailArray = Object.values(data)[0]
     cocktailArray.forEach(cocktail => {
      cocktailHTML += this.cocktailTemplate(cocktail)
    });
     this.cocktailsTarget.innerHTML = cocktailHTML;
   });  
  }


  cocktailTemplate(cocktail) {
    return `<div>
    <h4>${cocktail.name} <small>${cocktail.glass}</small></h4>
    <p>${cocktail.preparation}</p>
    </div> `
  }

}
