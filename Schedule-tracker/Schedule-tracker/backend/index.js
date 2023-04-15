const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json()); // For parsing application/json
mongoose.pluralize(null); // Disables Mongoose from automatically pluralizing table names and converting them to lower case

mongoose.connect("mongodb://127.0.0.1:27017/LifeTracker", {
    useNewUrlParser: true
});

const connection = mongoose.connection;

app.listen(PORT);

// Define a schema
var sleepSchema = mongoose.Schema({
    allSleeps: [{ start: String, end: String }] // Also try Date format
});
var Sleep = mongoose.model("Sleep", sleepSchema);



// {
//     lastChanged: String,
//         id: Number
// }



const router = express.Router();
app.use("/", router);

router.route("/v1/sleep")
    // .get(function (req, res) {
    //     Sleep.find({}, function (err, result) {
    //         if (err) {
    //             res.send(err);
    //         } else {
    //             res.send(result);
    //         }
    //     });
    // })
    .post(function (req, res) {
        const allSleeps = new Sleep(req.body);
        allSleeps.save()
            .then(el => {
                res.send("Item saved to database!");
            })
            .catch(e => {
                res.status(400).send();
            });
    });