fetch('objects.txt')
.then((result) => result.json())
.then((data)=>{
  console.log(data)
  Population(data,voice)
})

function Population(myArr,voice){
  let str = "";
  for(num in myArr)
  { str += `
     <a href = "${myArr[num]["Url"]}" class="song">
     <li class="list-group-item p-0">
     <div class="container listdiv p-0">
      <div class="row justify-content-around">
      <div class="col-3 imgdiv p-0">
      <img src="${myArr[num]["img"]}" alt="error">
    </div>
       <div class="col-9 namediv">
           <span>${myArr[num]["Song Name"]}</span>
       </div>
      </div>
     </div></li>
     </a>
     <hr class="line">
    `
  }
  document.getElementById("topopulate").innerHTML = str;
  voice();
}

function voice(){
  let song = document.getElementsByClassName("song");
  console.log(song);
  Array.from(song).forEach((element)=>{
  console.log(element);
  element.addEventListener('click',(e)=>{
    e.preventDefault();
    let audio = document.getElementById("audio");
    console.log(element.href);
    console.log(audio)
    audio.setAttribute('src' , element.href);
    let picture = document.getElementById("RunningSongPic");
    let str = element.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].src;
    picture.src = str;
  })
})
}