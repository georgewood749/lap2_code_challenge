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


// function textCounter(postBox, counter, charLimit) {
//     var charCount = document.getElementById(counter);
//     if (postBox.value.length > charLimit) {
//         postBox.value = postBox.value.substring(0, charLimit);
//         return false;
//     } else {
//         charCount.value = charLimit - postBox.value.length;
//     }
// }