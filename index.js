const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./utils/db");
const image = require("./routes/ImageRoutes");

const PORT = 8000 || process.env.PORT;

app.use(cors());
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse form data

app.get("/", (req, res) => {
    res.send("This is Create for Server for Testing ");
});

app.use("/api", image);  

connectDb();

app.listen(PORT, () => {
    console.log(`Server is Running On PORT ${PORT}`);
});

