const express = require("express");
const app = express();
const port = 3000;

function positiveIntegerHandler(req, res) {
    const num = Number(req.query.num);
    if (!isNaN(num) && num > 0) {
        res.send(`Success! Number(${num}) is a positive integer.`);
    } else {
        throw new Error("Number must be a positive integer.");
    }
}

function errorHandler(err, req, res, next) {
    if (err.message === "Number must be a positive integer.") {
        res.status(400).send('error:Number must be a positive integer.');
    } else {
        next(err);
    }
}

app.get("/positive-integer", positiveIntegerHandler);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});