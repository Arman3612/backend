const dns=require('dns');
const {MongoClient}=require("mongodb");
dns.setServers(["1.1.1.1","0.0.0.0"]);
const url="mongodb+srv://mongoarman:25May2006$@akmongo.v7r2vxc.mongodb.net/"    
const client=new MongoClient(url);
const dbName='helloworld';
async function main(){
    await client.connect();
    console.log('Connected succesfully to server')
    const db=client.db(dbName);
    const collection=db.collection('user')
    const data={
        firstname:"kk",
        lastname:"okp",
        city:"delhi",
        phoneno:"456789567890"
    };
    const insertResult=await collection.insertMany([data]);
    console.log("Inserted",insertResult);
    const updateResult = await collection.updateOne(
        { firstname: "ak" }, 
        { $set: { firstname: "ol" } }
    );
    const deleteResult = await collection.deleteMany({ firstname: "ol" });
    console.log("Deleted successfully:", deleteResult.deletedCount);
    const countResult=await collection.countDocuments({});
    console.log("Count of the document present in the user =>",countResult);
    const findResult=await collection.find({}).toArray();
    console.log("Found documents =>",findResult);
    return 'done.';
    //Find all documents with a filter of firstname: kk
    const result=await collection.find({firstname:"kk"}).toArray();
    console.log("result=> ",result);
    return "done.";
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());
