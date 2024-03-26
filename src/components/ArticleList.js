import React from "react";
import Article from "./Article"

function ArticleList(props){
    // const maps = props.posts.map((post) => {
    //     console.log(post)
    //     return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    // })
    return <main>
        <Article key={props.id} title={props.title} date={props.date} preview={props.preview}/>
    </main>
}

export default ArticleList