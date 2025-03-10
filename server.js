import http from "http";
// const PORT = 8000;
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
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
    if (req.url === "/"){
        res.writeHead(200, {"Content-Type":"text/html"})
        res.end("<h1>Homepage</h1>");
    }
    else if (req.url === "/about"){
        res.writeHead(200, {"Content-Type":"text/html"})
        res.end("<h1>About</h1>");
    }
    else{
        res.writeHead(500, {"Content-Type":"text/html"})
        res.end("<h1>Not Found</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});