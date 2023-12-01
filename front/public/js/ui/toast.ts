let element: HTMLDivElement
let text: HTMLSpanElement
let dismissBtn: HTMLButtonElement

export function createToast() {
    element = document.createElement("div")
    element.setAttribute("class", "w-full flex items-center justify-between h-0 bg-red-500 sticky bottom-0 text-sm px-2 truncate transition transition-[height] ease-in-out duration-300")

    text = document.createElement("span")

    dismissBtn = document.createElement("button")
    dismissBtn.setAttribute("type", "button")
    dismissBtn.setAttribute("class", "text-xl font-bold px-1")

    element.appendChild(text)
    element.appendChild(dismissBtn)

    const root = document.getElementById("root")
    root?.appendChild(element)

}

export function dismissToast() {
    element.classList.remove("h-8")
    element.classList.add("h-0")
}

export function toast(message: string) {
    text.innerHTML = message
    element.classList.remove("h-0")
    element.classList.add("h-8")
}