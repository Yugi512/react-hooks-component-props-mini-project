import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";


function App() {

  const articleLists = blogData.posts.map((post) => {
    console.log(post)
    return <ArticleList key={post.id}title={post.title} date={post.date} preview={post.preview} />
  })

  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      {articleLists}
    </div>
  );
}

export default App;
