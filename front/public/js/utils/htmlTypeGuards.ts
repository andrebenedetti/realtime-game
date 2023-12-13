export function isHtmlInputElement(el: HTMLElement | null): el is HTMLInputElement {
    return el?.tagName === "INPUT"
}

export function isHtmlButtonElement(el: HTMLElement | null): el is HTMLButtonElement {
    return el?.tagName === "BUTTON"
}