const uploadFile = require('../middleware/uploadImage');
const image = uploadFile.uploadFileMiddleware;
// const csv = uploadFile.uploadCSVMiddleware;
// const fs = require("fs");
// const csvToJson = require("csvtojson");
// const baseUrl = "http://localhost:5050/files/";

const upload = async (req, res) => {
    try {
        await image(req, res);
        if (req.file === undefined) {
            return res.send({ status: 400, message: "Please upload a file!" });
        }
        res.send({
            status: 200,
            message: "File uploaded successfully: " + req.file.originalname,
            name: req.file.originalname
        });
    } catch (err) {
        console.log(err);
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(400).send({
                status: 400,
                message: "File size cannot be larger than 2MB",
            });
        }
        // res.status(500).send({
        //   message: `Could not upload the file: ${req.file.originalname}`,
        //   error: err,
        // });
        res.send(err)
        // console.log(err);
    }
};

const uploadCSV = async (req, res) => {
    try {
        const db = setDB(req.params.company);
        if (!db) {
            res.status(404).send({ message: "Company not found!" });
            return;
        }
        await csv(req, res);
        if (req.file === undefined) {
            return res.send({ status: 400, message: "Please upload a file!" });
        }
        else {
            const path = __basedir + "/resources/uploads/csv/" + req.file.originalname;
            const json = await csvToJson().fromFile(path);
            const isInserted = await insertMany(json, db);
            if (isInserted) {
                res.send({
                    status: 200,
                    message: "File uploaded successfully: " + req.file.originalname,
                    name: req.file.originalname,
                    data: json
                });
            } else {
                res.send({
                    status: 400,
                    message: "File format doesn't match"
                })
            }
        }
    } catch (err) {
        console.log(err);
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(400).send({
                status: 400,
                message: "File size cannot be larger than 5MB",
            });
        }
        res.send(err)
    }
};

// const insertMany = async (datas, db) => {
//     try {
//         const insert = await db[collection].insertMany(datas);
//         console.log("insert gan", insert);
//         if (insert) {
//             console.log("inserted");
//             return true;
//         } else {
//             return false;
//         }
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }

// const getListFiles = (req, res) => {
//     const directoryPath = __basedir + "/resources/uploads/";

//     fs.readdir(directoryPath, (err, files) => {
//         if (err) {
//             res.send({
//                 status: 500,
//                 message: "Unable to scan files!",
//                 error: err
//             });
//         }

//         let fileInfos = [];

//         files.forEach((file) => {
//             fileInfos.push({
//                 name: file,
//                 url: baseUrl + file,
//             });
//         });

//         res.send(fileInfos);
//     });
// };

// const download = (req, res) => {
//     const fileName = req.params.name;
//     const directoryPath = __basedir + "/resources/uploads/";

//     res.download(directoryPath + fileName, fileName, (err) => {
//         if (err) {
//             res.send({
//                 status: 500,
//                 message: "Could not download the file",
//                 error: err,
//             });
//         }
//     });
// };

// const downloadCSV = (req, res) => {
//     const fileName = req.params.name;
//     const directoryPath = __basedir + "/resources/uploads/csv/";

//     res.download(directoryPath + fileName, fileName, (err) => {
//         if (err) {
//             res.send({
//                 status: 500,
//                 message: "Could not download the file",
//                 error: err,
//             });
//         }
//     });
// };

module.exports = {
    upload,
    // getListFiles,
    // download,
    uploadCSV,
    // downloadCSV
};