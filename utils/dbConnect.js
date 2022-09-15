function dbConnect() {
    // const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nexencarparts.gzk5v.mongodb.net/?retryWrites=true&w=majority`;
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    console.log('DB Connected');
}

module.exports = dbConnect;
