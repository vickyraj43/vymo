import express from "express";
import { APP_PORT } from "./config";
import routes from "./routes";

const app  = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: "http://localhost:5000",
//   })
// );
app.use('/api', routes);


app.listen(APP_PORT , () => {
    console.log(`listning on port :: ${APP_PORT}`);
});