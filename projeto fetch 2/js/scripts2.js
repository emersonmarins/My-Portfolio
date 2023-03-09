const url = "https://jsonplaceholder.typicode.com/posts"

//Query String
const paramUrl = new URLSearchParams(window.location.search)
const postId = paramUrl.get('id')

// Select Elements of the index2.html

const loadingElement = document.querySelector('.loading')
const postsContainer = document.querySelector('.posts-container')

//Select Elements of the post2html
const postContainer = document.querySelector('.post-container')
const commentContainer = document.querySelector('.comments-container')
const emailInput = document.querySelector('#email')
const bodyInput = document.querySelector('#body')

async function getAllPosts() {

    const response = await fetch(url)
    
    const data = await response.json()

    data.map((post) => {
        //Creating Elements
        const title = document.createElement('h2')
        const body = document.createElement('p')
        const btnPost = document.createElement('a')
        btnPost.setAttribute('href', `post2.html?id=${post.id}`)
        loadingElement.classList.add('hide')

        //Writing Elements
        title.innerText = post.title
        body.innerText = post.body
        btnPost.innerText = 'Ler'

        //Add Elements
        postsContainer.appendChild(title)
        postsContainer.appendChild(body)
        postsContainer.appendChild(btnPost)

    })
}


async function getIndPost(id) {

    const response = await fetch(`${url}/${id}`)
    const data = await response.json()
    const responseComment = await fetch(`${url}/${id}/comments`)
    const dataComment = await responseComment.json()


        //Creating Elements
        const title = document.createElement('h1')
        const body = document.createElement('p')

        //Writing Elements
        title.innerText = data.title
        body.innerText = data.body

        //Add Elements
        postContainer.appendChild(title)
        postContainer.appendChild(body)

        dataComment.map((comment) => {

            commentPost(comment)

        })
        


}

async function commentPost(comment) {



    //Creating Elements
    const emailComment = document.createElement('h2')
    const bodyComment = document.createElement('p')

    //Writing Elements
    emailComment.innerText = comment.email
    bodyComment.innerText = comment.body

    //Add Elements
    commentContainer.appendChild(emailComment)
    commentContainer.appendChild(bodyComment)



}




getIndPost(postId)

getAllPosts()