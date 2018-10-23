const graphql=require("graphql");
const _=require("lodash")
const {GraphQLObjectType,GraphQLString,GraphQLSchema} =graphql;
var books=[{name:"Name of the Wind",genre:"Fantasy",id:"1"},
{name:"The final empire",genre:"Fantasy",id:"2"},
{name:"The long earth",genre:"Sci-Fi",id:"3"},
{name:"Harry poter",genre:"Story",id:"4"}]

const BookType=new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
    })
})


const RootQuery= new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
              return  _.find(books,{id:args.id})
                //code to get data from db
            }
        }
    }
});

module.exports=new GraphQLSchema({
    query:RootQuery
})