const API = 'https://stephen-nene.github.io/WK3-CodeChallenge/db.json'
fetching = fetch(API)
print =  (value) => {console.log(value)};
// print(document.body)

document.addEventListener('DOMContentLoaded', ()=>{
    // displaySideNav()
})



function displaySideNav(){
    const as = document.getElementsByClassName('others')
    print (as.textContent)
}

function displayMain(){

}
