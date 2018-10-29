// {
//     author(id:4) {
//       name
//       id
//       age
//     }
//   }


// {
//     book(id: "4") {
//       name
//       genre
//       id
//     }
//   }



/*  type Relations



{
  book(id: "4") {
    name
    genre
    id
  author {
    name
    id
    age
  }
  }
}



*/




/*   GraphQl List

{
  author(id: "2") {
    name
    age
    id
  books {
    name
    id 
    genre
    authorId
  }
  }
}

*/


/*
All authoe with book name

 {
    authors{
       name
      books{
        name
      
      }
     
   }
}



/*
All book with author name


 {
    books{
       name
      author{
        name
      
      }
     
   }
}

*/


*/