import React from 'react'

function Posts({posts}) {
   return (
      <>
            {posts.map(post => {
               return (
          
                     <div className="listItemHeader">
                        <h4>User Id:{post.userId}</h4>
                        <p><strong>POST Num:</strong> {post.id}</p>
                        <div className="flexFiller"></div>
                        <p><strong>Title:</strong> {post.title}</p>
                    
                     <p><strong>Body:</strong> {post.body} </p>
                     <hr />
                  </div>
               )
            })}
         
      </>
   )
}
export default Posts
