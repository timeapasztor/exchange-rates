import express, { Request, Response } from "express";
import https from "https";
import cors from "cors";

const app = express();
const port = 8080; // Change this to your desired port number

const url =
  "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000" && "https://exchange-rates-psi.vercel.app",
};

// Enable CORS middleware
app.use(cors(corsOptions));

// Define a route for /getdata
app.get("/getdata", (req: Request, res: Response) => {
  https
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
