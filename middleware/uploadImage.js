const util = require("util");
const multer = require("multer");

const maxSize = 2 * 1024 * 1024;
const maxSizeCSV = 5 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/uploads");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

let storageCSV = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/uploads/csv");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).single("file");

let uploadCSV = multer({
    storage: storageCSV,
    limits: { fileSize: maxSizeCSV },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
let uploadCSVMiddleware = util.promisify(uploadCSV);


module.exports = { uploadFileMiddleware, uploadCSVMiddleware };