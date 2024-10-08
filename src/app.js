const exp = require("express");
const dotenv = require("dotenv");
const { connectToMongo } = require("./config/dbConfig")
const cookieParser = require("cookie-parser")
const {specs, swaggerUi} = require("./config/swagger")

const app = exp();
dotenv.config();
connectToMongo()

const port = process.env.PORT || 1415;


app.use(exp.json());
app.use(cookieParser());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use("/auth", require("./routes/authRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/greenEye", require("./routes/greenEyeRouter"));

app.listen(port, () => console.log("server up and runing on port " + port));
