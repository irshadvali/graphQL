const graphql=require("graphql");
const _=require("lodash")
const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt} =graphql;
var books=
[{name:"Name of the Wind",genre:"Fantasy",id:"1"},
{name:"The final empire",genre:"Fantasy",id:"2"},
{name:"The long earth",genre:"Sci-Fi",id:"3"},
{name:"Harry potter",genre:"Story",id:"4"}]

var authors=
[{name:"Patric Rothfuss",age:44,id:"1"},
{name:"Brandon Sanderson",age:42,id:"2"},
{name:"Terry Pratchett",age:66,id:"3"},
{name:"J. K. Rowling",age:52,id:"4"}]

const BookType=new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
    })
});

const AuthorType=new GraphQLObjectType({
    name:"Author",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
    })
});

const RootQuery= new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
              return  _.find(books,{id:args.id})
                //code to get data from db
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id})
            }
        }
    }
});

module.exports=new GraphQLSchema({
    query:RootQuery
})