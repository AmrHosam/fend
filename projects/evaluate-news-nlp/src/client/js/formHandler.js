function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)


    console.log("::: Form Submitted :::")

    const requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        const response = fetch("https://api.meaningcloud.com/sentiment-2.1?key="+res.message+"&url=https://www.bbc.com/news/technology-56659212&lang=en", requestOptions)
        .then(response => ({
          status: response.status, 
          body: response.json()
        }))
        .then(({ status, body }) => {
              console.log(status)
              return body
        })
        .then(res=>{
          console.log(res)
          
        })
        .catch(error => console.log('error', error));
    })

    
    // const response = fetch("https://api.meaningcloud.com/sentiment-2.1?key=d67f5033c4bc209a17b517a76f4e0171&url=https://www.bbc.com/news/technology-56659212&lang=en", requestOptions)
    //   .then(response => ({
    //     status: response.status, 
    //     body: response.json()
    //   }))
    //   .then(({ status, body }) => {
    //         console.log(status)
    //         return body
    //   })
    //   .then(res=>console.log(res))
    //   .catch(error => console.log('error', error));


}

export { handleSubmit }
