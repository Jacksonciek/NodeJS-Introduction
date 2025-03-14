import http from "http";
// const PORT = 8000;
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async(req, res) => {
    // res.write("Hello World");
    // res.setHeader("Content-Type", "text/html");
    // res.statusCode = 404;
    // console.log(req.url);
    // console.log(req.method);
    // res.writeHead(200, {"Content-Type":"application/json"})
    // res.writeHead(200, {"Content-Type":"text/html"})
    // res.end("<h2>Hello World</h2>");
    // res.end(JSON.stringify({message:"Server Error"}));
    // res.end("<h1>Hello World</h1>");
    try {
        if (req.method === 'GET') {
            // if (req.url === "/") {
            //     res.writeHead(200, { "Content-Type": "text/html" });
            //     res.end("<h1>Homepage</h1>");
            // }
            // else if (req.url === "/about") {
            //     res.writeHead(200, { "Content-Type": "text/html" });
            //     res.end("<h1>About</h1>");
            // }
            // else {
            //     res.writeHead(500, { "Content-Type": "text/html" });
            //     res.end("<h1>Not Found</h1>");
            // }
            let filePath;
            if (req.url === "/") {
                filePath = path.join(__dirname, 'public', 'index.html');
            }
            else if (req.url === "/about") {
                filePath = path.join(__dirname, 'public', 'about.html');
            }
            else {
                throw new Error('Not Found');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {"Content-Type":"text/plain"});
        res.end("Server Error");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});