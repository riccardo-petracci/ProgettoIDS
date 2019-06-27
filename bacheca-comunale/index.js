const http = require('http');
const path = require("path");
const fs = require("fs");


const server = http.createServer((req, res) => 
{ let filePath = path.join(__dirname,"view",req.url === "/" ? "index.html" : req.url); //  route dinamica, seleziona dinamicamente il file in base a url
 
    let extname = path.extname(filePath)
    let contentType = "text/html";

    switch (extname) {
        case ".js":
          contentType = "text/javascript";
          break;
        case ".css":
          contentType = "text/css";
          break;
        case ".json":
          contentType = "application/json";
          break;
        case ".png":
          contentType = "image/png";
          break;
        case ".jpg":
          contentType = "image/jpg";
          break;
      }

      if (contentType == "text/html" && extname == "") filePath += ".html";
      
      fs.readFile(filePath, (err, content) => {
        if (err) {
          if (err.code == "ENOENT") {
            // Page not found
            res.writeHead(404);
            res.end(); 
          } else {
            //  Some server error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
          }
        } else {
          // Success
          res.writeHead(200, { "Content-Type": contentType });
          res.end(content, "utf8");
        }
      });
    });

const PORT = process.env.PORT || 9090
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));