const postEntry = async (title, pseudonym, bodyText, timestamp) => {
    await fetch(``, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": title,
            "pseudonym": pseudonym,
            "bodyText": bodyText,
            "timestamp": timestamp
        })
    })
}
