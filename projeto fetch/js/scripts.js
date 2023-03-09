const url = "https://jsonplaceholder.typicode.com/posts"

//Loading elements of the page index.html
const loadingElement = document.querySelector('.loading')
const postsContainer = document.querySelector('.posts-container')

//Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get('id')

//Loading elements of the page post.html
const postPage = document.querySelector('.post')
const postContainer = document.querySelector('.post-container')
const commentContainer = document.querySelector('.comments-container')

//Loading comments elements of the page post.html

const commentForm = document.querySelector('.comment-form')
const emailInput = document.querySelector('#email')
const bodyInput = document.querySelector('#body')


// Get all posts
async function getAllPosts() {
    const response = await fetch(url)

    //console.log(response)

    const data = await response.json()

    //console.log(data)

    loadingElement.classList.add('hide')

    data.map((post) => {

     const div = document.createElement('div')
     const title = document.createElement('h2')
     const body = document.createElement('p')
     const link = document.createElement('a')

    title.innerText = post.title
    body.innerText =  post.body
    link.innerText = "Ler"
    link.setAttribute('href', `/post.html?id=${post.id}`)

    postsContainer.appendChild(div)
    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)

    })
}

//Get Individual Post

async function getIndPost(id) {
    
    const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),

    ]);

const dataPost = await responsePost.json();

const dataComments = await responseComments.json();

//console.log(dataPost)
console.log(dataComments)


    let title = document.createElement('h2')
    let body = document.createElement('p')

    title.innerHTML = dataPost.title
    body.innerHTML = dataPost.body

    postContainer.appendChild(title)
    postContainer.appendChild(body)

    dataComments.map((comment) => {
        creatComment(comment)
    })
}

function creatComment(comment) {
    console.log('executando creatComment')
    const div = document.createElement('div')
    const email = document.createElement('h3')
    const commentBody = document.createElement('p')

    email.innerText = comment.email
    commentBody.innerText = comment.body

    div.appendChild(email)
    div.appendChild(commentBody)

    commentContainer.appendChild(div)

}

//Post a comment
async function postComment(comment) {
    const response = await fetch(`${url}/${postId}/comments`, {
        method: "POST",
        body: comment,
        headers: {
            "Content-type": "application/json",
        },
    });
     const data = await response.json()

     creatComment(data)

}

getIndPost(postId)
getAllPosts()

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let comment = {
        email: emailInput.value,
        body: bodyInput.value,
    }
    comment = JSON.stringify(comment)
    
    postComment(comment)
    
    console.log(comment)
})