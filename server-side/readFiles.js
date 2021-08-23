const express = require("express");
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');


function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            name: path.basename(filename)
        };
 
    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + '/' + child);
        });
    } else {
        // Assuming it's a file. In real life it could be a symlink or
        // something else!
        info.type = "file";
        info.column = 1;
        info.imageOrder = 1;
        info.title = 'Test Title'; 
        info.description = 'Test Description';
    }
    return info;
}


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get("/test", (req, res) => {
  //getImagesMySQL(res)
  //getImagesFS(res);
  //res.send(dirTree('./../public/imageFiles'));
  let rawdata = fs.readFileSync('./server-side/imageData.json');
  let imageData = JSON.parse(rawdata);
  res.send(imageData);
});
  
const PORT = process.env.PORT || 5001;


  
app.listen(PORT, console.log(`Server started on port ${PORT}`));