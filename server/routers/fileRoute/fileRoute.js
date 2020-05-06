const express = require("express");
const upload = require("../../middlewares/fileUpload");

const fileRoute = express();

// @route POST /upload
// @desc  Uploads file to DB
fileRoute.post("/upload", upload.single("file"), (req, res) => {
  // res.json({ file: req.file });
  res.redirect("/");
});

// app.get('/', (req, res) => {
//     gfs.files.find().toArray((err, files) => {
//       // Check if files
//       if (!files || files.length === 0) {
//         res.render('index', { files: false });
//       } else {
//         files.map(file => {
//           if (
//             file.contentType === 'image/jpeg' ||
//             file.contentType === 'image/png'
//           ) {
//             file.isImage = true;
//           } else {
//             file.isImage = false;
//           }
//         });
//         res.render('index', { files: files });
//       }
//     });
//   });

//   // @route GET /files
//   // @desc  Display all files in JSON
//   app.get('/files', (req, res) => {
//     gfs.files.find().toArray((err, files) => {
//       // Check if files
//       if (!files || files.length === 0) {
//         return res.status(404).json({
//           err: 'No files exist'
//         });
//       }

//       // Files exist
//       return res.json(files);
//     });
//   });

//   // @route GET /files/:filename
//   // @desc  Display single file object
//   app.get('/files/:filename', (req, res) => {
//     gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//       // Check if file
//       if (!file || file.length === 0) {
//         return res.status(404).json({
//           err: 'No file exists'
//         });
//       }
//       // File exists
//       return res.json(file);
//     });
//   });

//   // @route GET /image/:filename
//   // @desc Display Image
//   app.get('/image/:filename', (req, res) => {
//     gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//       // Check if file
//       if (!file || file.length === 0) {
//         return res.status(404).json({
//           err: 'No file exists'
//         });
//       }

//       // Check if image
//       if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//         // Read output to browser
//         const readstream = gfs.createReadStream(file.filename);
//         readstream.pipe(res);
//       } else {
//         res.status(404).json({
//           err: 'Not an image'
//         });
//       }
//     });
//   });

//   // @route DELETE /files/:id
//   // @desc  Delete file
//   app.delete('/files/:id', (req, res) => {
//     gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
//       if (err) {
//         return res.status(404).json({ err: err });
//       }

//       res.redirect('/');
//     });
//   });

module.exports = fileRoute;
