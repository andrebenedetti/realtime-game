import { readFile } from "fs/promises";
import { IncomingMessage, ServerResponse, createServer } from "http";

export const getPort = () => {
    return process.env.PORT || 5000
}

const getMimeType = (path: string) => {
    if (!path.includes(".")) {
        throw new Error(`Unknown file extension for ${path}`)
    }
    const extension = path.split(".").slice(-1)[0]
    switch (extension) {
        case "js":
            return "applicaton/javascript"
        case "css":
            return "text/css"
    }
    throw new Error(`File extension not supported on ${path}`)
}

const loadFile = async (path: string): Promise<{ file: Buffer, mime: string }> => {
    if (path === "/") {
        return { file: await readFile("../front/index.html"), mime: "text/html" }
    }

    // Since this is a dev env, we don't care about path traversal attacks here, so we won't normalize path
    return { file: await readFile("../front" + path), mime: getMimeType(path) }

}

const serveStaticFile = async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    const { file, mime } = await loadFile(req.url || "/")
    res.writeHead(200, "OK", { "Content-type": mime })
    res.write(file)
    res.end()
}

export const server = createServer(async (req, res) => {
    serveStaticFile(req, res)
})
