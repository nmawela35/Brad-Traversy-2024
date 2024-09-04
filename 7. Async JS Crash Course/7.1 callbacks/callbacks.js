x = document.getElementById('posts')

const posts = [
  { title: "Post 1", body: "This is post 1" },
  { title: "Post 2", body: "This is post 2" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) =>{
        output += `<li>${post.title}</li>`
    })
    x.innerHTML = output;
  }, 1000);
}

function createPosts(post, callback){
 setTimeout(() =>{
   posts.push(post);
   callback(); 
 },2000)
}

getPosts();
  
  createPosts({ title: "Post 3", body: "This is post 3" }, getPosts)