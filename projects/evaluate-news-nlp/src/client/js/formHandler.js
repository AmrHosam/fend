function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: formText})
      };

    if(Client.urlValidation(formText))
    {
      console.log("::: Form Submitted :::")
      fetch('http://localhost:8080/test', requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.getElementById('model').innerText = data.model
        document.getElementById('score').innerText = data.score_tag
        document.getElementById('agreement').innerText = data.agreement
        document.getElementById('subjectivity').innerText = data.subjectivity
        document.getElementById('confidence').innerText = data.confidence
        document.getElementById('irony').innerText = data.irony
      })
    } else {
      alert("Invalid URL. Please try again.")
      document.getElementById('name').value = ""
    }



}

export { handleSubmit }
