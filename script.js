const form = document.getElementById('add-comment-form');
const addComment = document.getElementById('comment');
const comments = document.getElementById('comments');
const likeButton = document.getElementById('heart');
const likesCount = document.getElementById('count');
const instagram = document.getElementById('insta');
const line = document.getElementById('vline');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      instagram.style.opacity = "0";
      line.style.opacity = "0";
    } else {
        instagram.style.opacity = "1";
        line.style.opacity = "1";
    }
  }


let liked = false;
let val = parseInt(likesCount.textContent);

likeButton.addEventListener('click', function(e) {
    console.log(liked);
    if(liked != true) {
        likeButton.style.color = 'green';
        liked = true;
        val += 1;
        likesCount.textContent = val;
    } else {
        likeButton.style.color = 'black';
        liked = false;
        val -= 1;
        likesCount.textContent = val;
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const person = prompt('enter your name', '');
    const commentFull = document.createElement('div');
    const commentName = document.createElement('span');
    const nameText = document.createTextNode(`${person} : `);
    commentName.style.fontWeight = '900';
    const commentVal = document.createElement('span');
    const commentText = document.createTextNode(e.target.elements.comment.value);
    commentVal.appendChild(commentText);
    commentName.appendChild(nameText);
    commentFull.appendChild(commentName);
    commentFull.appendChild(commentVal);
    comments.appendChild(commentFull);
    e.target.elements.comment.value = '';
});





