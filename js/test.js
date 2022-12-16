const API = 'https://stephen-nene.github.io/WK3-CodeChallenge/db.json'
fetching = fetch(API)
print =  (value) => {console.log(value)};

// reduce the number of tickets 
const btn = document.getElementById('buy-ticket')
print(btn)

btn.addEventListener('click', function(e){
    let number = document.querySelector('#number').textContent
    e.preventDefault()
    print(number)
    if(number > 0){
        document.querySelector('#number').textContent  = number-1
        
    }
    else {
        alert("sold out,try again earlier next time") 
        btn.textContent = 'Sold Out'
        btn.className = "btn btn-danger"
        btn.classList.add('')
        document.querySelector('#number').textContent = "sold-out"
    }
})
print(btn.className)
