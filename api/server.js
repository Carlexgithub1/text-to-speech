const { PORT } = require("./src/Config/server");
const app = require("./app");

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});