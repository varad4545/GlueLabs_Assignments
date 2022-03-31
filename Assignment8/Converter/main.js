
var wpbtn=document.getElementById("wpbtn");
var mcbtn=document.getElementById("mcbtn");
var kmetbtn=document.getElementById("kmetbtn");
var degfbtn=document.getElementById("degfbtn");
var clfbtn=document.getElementById("clfbtn");
var metibtn=document.getElementById("metibtn");
wpbtn.addEventListener('click',function(){
    var kgin=document.getElementById('kgsInput');
    let kgs=kgin.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.2046;
})
mcbtn.addEventListener('click',function(){
    var feetin=document.getElementById('feetInput');
    let feet=feetin.value;
    document.getElementById("cmsOutput").innerText = feet * 30.48;
})

kmetbtn.addEventListener('click',function(){
    var kmin=document.getElementById('kmInput');
    let km=kmin.value;

    console.log(km)
    document.getElementById("mOutput").innerText = km * 1000.00;
})

degfbtn.addEventListener('click',function(){
    var celin=document.getElementById('celInput');
    let cel=celin.value;

    console.log(cel)
    document.getElementById("fOutput").innerText = ((9/5)*cel)+32;
})

clfbtn.addEventListener('click',function(){
    var cubin=document.getElementById('cubInput');
    let cub=cubin.value;

    console.log(cub)
    document.getElementById("lOutput").innerText = cub*1000;
})

metibtn.addEventListener('click',function(){
    var metin=document.getElementById('metInput');
    let met=metin.value;

    console.log(met)
    document.getElementById("inOutput").innerText = met*39.37;
})

// degfbtn.addEventListener('click',function(){
//     var kmin=document.getElementById('degInput').value;
//     let km=kmin.value;
//     console.log('dnowie')
//     document.getElementById("fOutput").innerText = km * 1000;
// })
// wp
// document.getElementById("kgsInput").addEventListener("input", e => {
//     let kgs = e.target.value;
//     document.getElementById("lbsOutput").innerText = kgs * 2.2046;
// })

// document.getElementById("feetInput").addEventListener("input", e => {
//     let feet = e.target.value;
//     document.getElementById("cmsOutput").innerText = feet * 30.48;
// })