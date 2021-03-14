let mongo = require("mongodb");

let MongoClient = mongo.MongoClient;

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const MONGODB_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

// mongoose.connect(url, options).then( function() {
//   console.log('MongoDB is connected');
// })
//   .catch( function(err) {
//   console.log(err);
// });

MongoClient.connect(MONGODB_URI, { reconnectTries: 120, reconnectInterval: 2000 })
.then(function(_database) { // <- db as first argument
  console.log("Database connection ready");
  database = _database;
  let server = require("http").createServer(app);
  server.listen(PORT, function() {
    console.log("HTTP Server up and listening on " + PORT);
  });
})
.catch(function(err) {
  console.error(err);
  process.exit(1);
});
