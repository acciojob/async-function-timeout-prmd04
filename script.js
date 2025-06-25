let sbtBtn = document.getElementById("btn");

sbtBtn.addEventListener('click', ()=>{
  let textInput = document.getElementById("text").value.trim();
  let delay = parseInt(document.getElementById('delay').value);

  output(textInput,delay);
})

async function output(text,time){
  await new Promise((resolve) =>{
    setTimeout(()=>{
      resolve();
    },time)
  })
   document.getElementById("output").innerText = text;
   document.getElementById("text").value='';
   document.getElementById('delay').value='';

};