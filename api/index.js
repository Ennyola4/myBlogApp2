const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const connectDB = require('./db')
const userRouter = require('./routes/user.route.js');
const authRouter = require('./routes/auth.route.js')
const port = 5000;





app.get("/", (req,res) => {
    res.json('api is running')
})





app.use(express.json());
app.use(bodyParser.json());

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)






















//connect to database
connectDB()




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

