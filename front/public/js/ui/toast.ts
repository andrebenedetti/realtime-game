export function toast(message: string) {
    const toastId = "toast"
    const toast = document.getElementById(toastId)
    if (!toast) {
        console.warn(`Tried to invoke toast but an element with id #${toastId} was not found`)
        return
    }

    const text = document.getElementById("toast-text")
    if (text) {
        text.innerHTML = message
    }
    toast.classList.remove("h-0")
    toast.classList.add("h-8")
}