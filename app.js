const express=require("express");
const graphqlHttp=require("express-graphql");
const schema=require("./schema/schema")

const mongoose=require("mongoose")
const app=express();

mongoose.connect('mongodb://irshadvali:irshadvali_2014@ds145083.mlab.com:45083/gql-irshad')
mongoose.connection.once('open',()=>{
    console.log("connected to database")
})

app.use("/graphql",graphqlHttp({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log("now listining for request on port 4000")
});