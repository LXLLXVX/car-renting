const express = require('express');
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

require("./routes/car-renting.routes")(app);

app.get('/', (req, res) => {
  res.json('Luxury Renting Car API is running!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}.`);
});

const db = require("./models");
db.sequelize.sync({ force : false}).then(() => {
  console.log("re-sync db.")
});

