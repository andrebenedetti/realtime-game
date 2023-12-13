import { run } from "./core";
import { initializeAnonymousLogin } from "./ui/anonymous-login";
import { createToast } from "./ui/toast";

document.addEventListener("DOMContentLoaded", () => {
    createToast()
    initializeAnonymousLogin()
})

run()