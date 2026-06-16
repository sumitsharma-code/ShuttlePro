const app = require("./src/app");

const connectDb = require("./src/db/db");
connectDb();
// test route
app.get('/', (req, res)=> {
    res.send("hello");
});

app.listen(3000, () => {
    console.log("SERVER CONNECTED!");
});
