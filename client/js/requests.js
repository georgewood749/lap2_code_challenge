// const postEntry = async (title, pseudonym, bodyText, timestamp) => {
//     await fetch(``, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             "title": title,
//             "pseudonym": pseudonym,
//             "bodyText": bodyText,
//             "timestamp": timestamp
//         })
//     })
// }

async function getItem(id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function postEntry(e){
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
            window.location.hash = `#posts/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}

