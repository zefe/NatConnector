window.addEventListener('load', function(){
    const button = document.getElementById('submit')
    button.addEventListener('click', function() {
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let password= document.getElementById('password').value;
      
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      })
      .then(function(resp){
        console.log(resp)
      })

    })
})