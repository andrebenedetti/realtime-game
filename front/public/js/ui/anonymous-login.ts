import { isHtmlButtonElement, isHtmlInputElement } from "../utils/htmlTypeGuards";

function handleAddUsername(username: string) {
        console.log(username)
}

export function initializeAnonymousLogin() {
  const submitButton = document.getElementById("submitAnonymousLogin");
  const usernameInput = document.getElementById("usernameInput");

  if (isHtmlButtonElement(submitButton) && isHtmlInputElement(usernameInput)) {
    submitButton.onclick =  () => {
      handleAddUsername(usernameInput.value)
      usernameInput.value = ""
    }
  }
}

