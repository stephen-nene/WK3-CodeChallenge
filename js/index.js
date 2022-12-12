print =  (value) => {console.log(value)}
fetch('https://stephen-nene.github.io/WK3-CodeChallenge/db.json')
// print(res)
.then(res=>(res.json()))
.then(data=> {
    // console.log(data.films[0]);
     data=data.films
    // selector for our first movie poster
    image = document.querySelector('img.img-fluid')
    title = document.querySelector('h5')
    description = document.querySelector('.card-text')
    info = document.querySelectorAll('li.info')
    footer = document.querySelector('small'); print(info)
    // descrition
    image.src = data[0].poster 
    title.textContent = data[0].title
    description.textContent = data[0].description
    info[0].textContent = `Showtime =   ${data[0].showtime}`
    info[1].textContent = `Runtime =   ${data[0].runtime} mins`
    info[2].textContent = `Tickets-Sold =  ${data[0].tickets_sold}`
    remainder = (data[0].capacity)-(data[0].tickets_sold)
    footer.textContent = `tickets-Remaining:${remainder}`  
})

fetch('https://stephen-nene.github.io/WK3-CodeChallenge/db.json')
.then(res=>(res.json()))
.then(data=>{

 let i = 0
 do{
  i+=1
  data2= data.films[i]
  // data =data.films;print(data[0].title)
  const side = document.querySelectorAll('a.others'); 
  print (side.textContent)
  // side.textContent = data2.title
//  print(data2.title)

 }while(i<14)   
//  const side = document.querySelectorAll('a.others'); 
//  print (side[0].textContent)
  })

document.getElementById("openNav").addEventListener("click", 
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.querySelector('div.header').style.marginLeft = "350px";
    document.querySelector('div.card').style.marginLeft = "350px";
    // print( document.getElementById("mySidenav"))
  }
  );
  document.getElementById("closeNav").addEventListener("click", 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('div.header').style.marginLeft = "0";
    document.querySelector('div.card').style.marginLeft = "0";
  }

  );
  print(`hello`)

