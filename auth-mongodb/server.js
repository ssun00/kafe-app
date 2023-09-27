const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded( {extended: true } ))

app.get("/", (req, res) => {
  res.json( { message: "Kafei app" } )
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
const dbConfig = require("./app/config/db.config");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewURLParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err)
          }

          console.log("add 'user' to roles collection")
        })
      }
    })
  }