

const poke_container = document.getElementById('break_container');


async function fetchData() {
    const res = await fetch('https://www.breakingbadapi.com/api/characters');
    const data = await res.json();
    let output='';
    data.forEach(function(value){

        const infocard=document.createElement('div');
        infocard.style.width='300px';
        infocard.style.height='600px';
        infocard.classList.add('breaking');
        const name=value.name;
     
        const birthday=value.birthday;
        const occupation=`${value.occupation[0]},${value.occupation[1]}`;
        const status=`${value.status}`
        const nickname=value.nickname;
        const portrayed=value.portrayed;
        const category=value.category;
        const btcs=value.better_call_saul_appearance;
        var btcs1;
        console.log(btcs)
        if(btcs.length==0){
             btcs1="No";
        }
        else{
         btcs1=btcs.toString();}
 
        const cardInnerHtml=`
             <div class="img-container">
                 <img src="${value.img}"  />
             </div>
             <div class="info">
         
                 <h3 class="name"><span>Name: </span> ${name}</h3>
                 <h3 class="name"><span>Birthday: </span> ${birthday}</h3>
                 <h3 class="name"><span>Occupation: </span> ${occupation}</h3>
                 <h3 class="name"><span>Status: </span> ${status}</h3>
                 <h3 class="name"><span>Nickname: </span> ${nickname}</h3>
                 <h3 class="name"><span>Portrayed: </span> ${portrayed}</h3>
                 
                 <h3 class="name"><span>Category: </span> ${category}</h3>
                 <h3 class="name"><span>Better Call Saul Appearance (Season number): </span> ${btcs1}</h3>
             </div>
         `
        infocard.innerHTML=cardInnerHtml;
        poke_container.appendChild(infocard)

    })

  }
  
fetchData();