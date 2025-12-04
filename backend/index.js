require('dotenv').config();

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URI;
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const HoldingModel = require('./model/HoldingModel');
const PosiitionModel = require('./model/PositionModel');
const OrderModel = require('./model/OrderModel');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require("./routes/auth");
const requireAuth = require("./middleware/requireAuth");

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(bodyParser.json());
app.use("/auth", authRoutes);


mongoose.connect(uri).then(() => console.log("connected to mongoDB")).catch((err) => {
    console.log("MongoDB connection error:", err.message);
});

//route to add dummy holdings data
// app.get("/addholdings",(req, res) => {
//     let tempHoldings = [
// {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
// },
// {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
// },
// {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
// },
// {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
// },
// {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
// },
// {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
// },
// {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
// },
// {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
// },
// {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
// },
// {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
// },
//  {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//    },
//     {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//      },
//      {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//       },
//     ]

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingModel(item);
//        newHolding.save().then(() => {console.log("data item saved !")});
//     });

//     res.send("DB intialized !");
// });


// app.get("/addPositions", async (req, res) => {
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "TCS",
//             qty: 3,
//             avg: 3450.00,
//             price: 3495.50,
//             net: "+1.32%",
//             day: "+0.45%",
//             isLoss: false,
//         },
//         {
//             product: "CNC",
//             name: "INFY",
//             qty: 5,
//             avg: 1450.25,
//             price: 1428.90,
//             net: "-2.05%",
//             day: "-0.88%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "RELIANCE",
//             qty: 2,
//             avg: 2480.00,
//             price: 2512.75,
//             net: "+1.32%",
//             day: "+0.67%",
//             isLoss: false,
//         },
//         {
//             product: "CNC",
//             name: "HDFCBANK",
//             qty: 4,
//             avg: 1620.10,
//             price: 1605.00,
//             net: "-0.93%",
//             day: "-0.45%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "ITC",
//             qty: 10,
//             avg: 450.00,
//             price: 455.25,
//             net: "+1.17%",
//             day: "+0.25%",
//             isLoss: false,
//         },
//         {
//             product: "CNC",
//             name: "MARUTI",
//             qty: 1,
//             avg: 10250.00,
//             price: 10175.00,
//             net: "-0.73%",
//             day: "-0.35%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "SBIN",
//             qty: 6,
//             avg: 610.00,
//             price: 618.50,
//             net: "+1.39%",
//             day: "+0.62%",
//             isLoss: false,
//         }
//     ];

//     tempPositions.forEach((item) => {
//         let newPosition = new PosiitionModel(item);
//         newPosition.save().then(() => {console.log(`DB intializing.. with ${item.name}`)}).catch((e) => console.log(e.name));
//     });

//     res.send("DB initialized")
// })



app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PosiitionModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", requireAuth, async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body || {};

        if (!name || !qty || !price || !mode) {
            return res.status(400).json({ message: "Missing required fields: name, qty, price, mode" });
        }

        const newOrder = new OrderModel({
            name,
            qty,
            price,
            mode,
            user: req.user._id,
        });

        const saved = await newOrder.save();
        return res.status(201).json(saved);
    } catch (err) {
        console.error("Failed to save order:", err);
        return res.status(500).json({ message: "Failed to save order", error: err.message });
    }
});

// Quick endpoint to view recent orders
app.get("/orders", requireAuth, async (req, res) => {
    try {
        const items = await OrderModel.find({ user: req.user._id })
            .sort({ _id: -1 })
            .limit(100);
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch orders", error: err.message });
    }
});

app.get("/me", requireAuth, (req, res) => {
    res.json(req.user);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});