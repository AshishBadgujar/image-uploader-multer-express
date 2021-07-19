const express = require('express');
const app = express();
const path = require('path')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.originalname)
    }

})

//middleware
const upload = multer({ storage: storage })

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('upload');
})

app.post("/", upload.single('image'), (req, res) => {
    res.send("Image uploaded")
});

app.listen(5000, () => console.log('listening on port 5000!'));
