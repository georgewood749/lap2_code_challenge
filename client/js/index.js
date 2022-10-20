//* SETUP
const main = document.querySelector('main');

const formElements = [
    {tag: 'input', id: 'title', attributes: { type: 'text', name: 'title', placeholder: 'Title', required: '' } },
    {tag: 'input', id: 'author', attributes: { type: 'text', name: 'author', placeholder: 'Author' } },
    {tag: 'textarea', id: 'content', attributes: { name: 'content', placeholder: 'What\'s on your mind?', rows: '20', cols: '100', required: '' } },
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

    const header = document.createElement('h1');
    header.innerText = 'Write down your thoughts.\nKeep them away from others.';
    main.appendChild(header)

    const form = document.createElement('form');

    formElements.forEach(t => {
        const tag = document.createElement(t.tag);
        tag.id = t.id;
        Object.entries(t.attributes).forEach(([a, v]) => tag.setAttribute(a, v));
        form.appendChild(tag);
        form.appendChild(document.createElement('br'));
    })

    // form.onsubmit = postEntry;
    form.onsubmit = postEntry;

    main.appendChild(form);

}

async function loadEntry(id) {
    main.innerHTML = '';
    
    const data = await getEntry(id);
    main.textContent = `${data.id} - ${data.title} - ${data.author} - ${data.content}`

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
