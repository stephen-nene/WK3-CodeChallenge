print =  (value) => {console.log(value)}
url = 'https://stephen-nene.github.io/WK3-CodeChallenge/db.json'
// let i = 0
//  do{
//   i+=1
//   data2= data.films[i]
//   // data =data.films;print(data[0].title)
//   const side = document.querySelectorAll('a.others'); 
//   // print (side[i])
//   side[i].textContent = data2.title
// //  print(data2.title)
//  }while(i<14)   
//  const side = document.querySelectorAll('a.others'); 
//  print (side[0].textContent)
function getFilms(){
    fetch(url).then(res => res.json())
    .then(films => {
        films.forEach(film => {
            // showFilmName(film)
            print(film)
        });
    })
}
// function showFilmName(film){
//     const li = document.createElement('li')
//     li.className = "film item"
//     li.innerHTML = film.title
//     filmList.appendChild(li)

//     li.addEventListener('click', () => {
//       filmDetails(film)
//     })

//     function clickName(){
//       return li.click()
//     }

//     window.onload = setTimeout(clickName(), 1000)
// }
getFilms()