const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:admin@kvabacluster.lryam.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(url, { useUnifiedTopology: true });



module.exports.database = {
    run: async function() {
        try {
            await client.connect();
            console.log("Connected correctly to server");

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
}