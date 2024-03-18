"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8080; // Change this to your desired port number
const url = "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";
// CORS configuration
const corsOptions = {
    origin: "http://localhost:3000",
};
// Enable CORS middleware
app.use((0, cors_1.default)(corsOptions));
// Define a route for /getdata
app.get("/getdata", (req, res) => {
    https_1.default
        .get(url, (response) => {
        let data = "";
        // A chunk of data has been received.
        response.on("data", (chunk) => {
            data += chunk;
        });
        // The whole response has been received.
        response.on("end", () => {
            res.send(data); // Send the data as the response
        });
    })
        .on("error", (error) => {
        console.log("Error: " + error.message);
        res.status(500).send("Error fetching data"); // Send an error response
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
