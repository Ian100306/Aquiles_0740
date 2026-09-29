const toast = document.getElementById("toast");
document.title = "Aquiles_0740 | Links";

function showMessage(message){
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1800);
}

async function copyProfile(){
  try{
    await navigator.clipboard.writeText(window.location.href);
    showMessage("Link do perfil copiado!");
  }catch(e){
    showMessage("Copie o endereço do site para compartilhar.");
  }
}

async function sharePage(){
  if(navigator.share){
    try{
      await navigator.share({
        title:"Aquiles_0740",
        text:"Confira meus links!",
        url:window.location.href
      });
    }catch(e){}
  }else{
    copyProfile();
  }
}

const particles = document.getElementById("particles");
for(let i=0;i<34;i++){
  const p=document.createElement("span");
  p.className="particle";
  p.style.left=(Math.random()*100)+"%";
  p.style.animationDuration=(9+Math.random()*13)+"s";
  p.style.animationDelay=(-Math.random()*18)+"s";
  p.style.transform=`scale(${0.5+Math.random()*1.5})`;
  particles.appendChild(p);
}
