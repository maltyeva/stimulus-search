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
    .then(cocktails => { 
     var cocktailHTML = "";
     Object.values(cocktails).forEach(cocktail => {
      cocktailHTML += "Hello"
      console.log(cocktail)
     });
     this.cocktailsTarget.innerHTML = cocktailHTML;
    });
    
  }

}

 function cocktailTemplate(cocktail) {
  console.log(cocktail)
   return `
   <div>
    <h4>${cocktail.name} <small>${cocktail.glass}</small></h4>
   </div>
   `
  }

