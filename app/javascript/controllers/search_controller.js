import { Controller } from 'stimulus';

import Rails from "@rails/ujs";


export default class extends Controller {
	static targets = ["query", "cocktails"]

  connect() {
  }

  submit() {
    const value = this.queryTarget.value
    Rails.ajax({
      type: "GET",
      url: `/?query=${value}`,
      success: (_data, _status, xhr) => {
        this.element.outerHTML = xhr.response
      }
    })
  }

}
