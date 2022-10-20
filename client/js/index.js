//* SETUP
const main = document.querySelector('main');

const formElements = [
    {tag: 'input', id: 'title', attributes: { type: 'text', name: 'title', placeholder: 'Title', required: '' } },
    {tag: 'input', id: 'author', attributes: { type: 'text', name: 'author', placeholder: 'Author' } },
    {tag: 'textarea', id: 'content', attributes: { name: 'content', placeholder: 'What\'s on your mind?', rows: '10', cols: '100', required: '' } },
    {tag: 'input', id: 'submit', attributes: { type: 'submit', value: 'PUBLISH' } }
]

//* Feed through
defaultPage();



//* hashchange handeling
window.addEventListener('hashchange', updateContent);

function updateContent() {
    let hash = window.location.hash.substring(1);
    if (hash) {
        loadEntry(hash);
    } else {
        defaultPage();
    }

}

//* Elements rendering

function defaultPage() {
    main.innerHTML = '';

    const form = document.createElement('form');

    formElements.forEach(t => {
        const tag = document.createElement(t.tag);
        tag.id = t.id;
        Object.entries(t.attributes).forEach(([a, v]) => tag.setAttribute(a, v));
        form.appendChild(tag);
        form.appendChild(document.createElement('br'));
    })

    form.onsubmit = postEntry;

    main.appendChild(form);

}

async function loadEntry(id) {
    main.innerHTML = '';
    
    const data = await getEntry(id);

    // const postId = document.createElement('p')
    // postId.id = "content"

    const title = document.createElement('p')
    title.id = "title"

    const author = document.createElement('p')
    author.id = "author"

    // * Author field is auto-populated with 'anonymous' if user does not enter a name. 
    const authorText = data.author
    if (authorText) {
        author.textContent = authorText
    } else {
        author.textContent = `anonymous`
    }

    // const datetime = data.datetime
    // content.id = "author"

    const datetime = document.createElement('p')
    datetime.id = "author"

    const content = document.createElement('p')
    content.id = "content"

    title.textContent = data.title
    content.textContent = data.content
    // datetime.textContent = data.datetime

    main.appendChild(title)
    main.appendChild(author)
    main.appendChild(content)
    // main.appendChild(postId)
    
    // main.textContent = `${data.id} - ${data.title} - ${data.author} - ${data.content}`

}



//* Random name generator

//* Time and date



//* Requests
async function getEntry(id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function postEntry(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        console.log(new FormData(e.target));

        const response = await fetch('http://localhost:3000/posts', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = id;
        }
    } catch (err) {
        console.warn(err);
    }
}
