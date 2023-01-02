const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connection = require("./database/db.js");
const product_list = require("./product_list.js");
const PORT = process.env.PORT || 3001;
const corsOptions = {
    origin: 'https://laundry-chart-frontend.onrender.com',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use('/api/v1/order', require('./routes/order_route'));
app.use('/api/v1/user', require('./routes/user_route'));
app.use('/api/v1/product', require('./routes/product_rout'));


connection();

app.listen(PORT, () => console.log("server is running on port", PORT));
product_list();

