const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        comments: ''
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        comments: ''
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        comments: ''
    }
]

const profileEl = window.document.getElementById("render-profile");

function renderPosts() {
    let postsHtml = '';
    for (const post of posts) {
        postsHtml += `
            <div class="post">
                <div class="presentation-container">
                    <img src="${post.avatar}" alt="${post.name} avatar" class="avatar-img"/>
                    <div class="presentation-p">
                        <p class="bold-p">${post.name}</p>
                        <p>${post.location}</p>
                    </div>
                </div>
                <img src="${post.post}" alt="Post image by ${post.name}" class="post-img"/>
                <div class="actions">
                    <button class="heart-button"><img src="/images/icon-heart.png" alt="Like" class="action-img heart-img"/></button>
                    <img src="/images/icon-comment.png" alt="Comment" class="action-img comment-img" />
                    <img src="/images/icon-dm.png" alt="Direct Message" class="action-img" />
                </div>
                
                <p class="bold-p likes">${post.likes} likes</p>
                <div class="comments-section">
                        <label for="comment-input"  style="margin-top: 20px;"><strong>Add a comment</strong></label>
                        <input type="text" class="comment-input" placeholder="Write a comment...">
                        <button class="comment-button">Post</button>
                        <div class="comments-list"></div>
                </div>
                <p class="comment"><strong>${post.username}</strong> ${post.comment}</p>
            </div>
        `
    }
    profileEl.innerHTML = postsHtml;
}

renderPosts();

const heartsEl = window.document.querySelectorAll(".heart-img")
const commentSections = window.document.querySelectorAll(".comments-section")
const commentsBtn = window.document.querySelectorAll(".comment-button")
const commentsEl = window.document.querySelectorAll(".comments-list")
const commentsImg = window.document.querySelectorAll(".comment-img")
heartsEl.forEach((heartEl, index) => {
    heartEl.addEventListener("click", () => {
        heartEl.classList.toggle("liked")
        const likesEl = heartEl.closest('.post').querySelector('.likes')
        let likes = parseInt(likesEl.textContent)
        if(heartEl.classList.contains('liked')) {
            likes++
        } else {
            likes--
        }
        likesEl.textContent = `${likes} likes`
        posts[index].likes = likes
    })
})

commentsBtn.forEach((comment, index) => {
    comment.addEventListener('click', () => {
        const inputValue = comment.closest(".post").querySelector(".comment-input").value
        
        posts[index].comments+=`${inputValue} <br>`
        commentsEl[index].innerHTML = posts[index].comments

    })
})

commentsImg.forEach((img, index) => {
    img.addEventListener('click', () => {
        commentSections[index].classList.add("comments-section-visible")
    })
})