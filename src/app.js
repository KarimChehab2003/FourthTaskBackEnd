const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = 'proj-1';

mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log("Error: couldn't connect to database");
    }
    console.log("Connection successful");

    const db = res1.db(dbname);

    db.collection('users').insertOne({
        name: 'karim',
        age: 20
    }, (error, data) => {
        if (error)
            console.log("unable to insert data");
        console.log(data.insertedId);
    })

    db.collection('users').insertMany([
        {
            name: 'test1',
            age: 20
        },
        {
            name: 'test2',
            age: 21
        },
        {
            name: 'test3',
            age: 22
        },
        {
            name: 'test4',
            age: 23
        },
        {
            name: 'test5',
            age: 24
        }
    ], (error, data) => {
        if (error) {
            console.log("Unable to insert data")
        }
    })

    db.collection('users').findOne({ _id: mongodb.ObjectId("65f8a9cdf13431c6a72c4b5e") }
        , (error, user) => {
            if (error) {
                console.log("Unable to insert data")
            }
            console.log(user)
        })

    db.collection('users').find({ age: 22 }).limit(3).toArray((error, users) => {
        if (error) {
            return console.log('Error has occurred')
        }
        console.log(users)
    })

    db.collection('users').find({age:22}).limit(3).count((error,users)=>{
        if(error){
            return console.log('Error has occurred')
        }
        console.log(users)
    })

});