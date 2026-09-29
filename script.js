const toast = document.getElementById("toast");
document.getElementById("year").textContent = new Date().getFullYear();

function showMessage(message){
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyProfile(){
  try{
    await navigator.clipboard.writeText(window.location.href);
    showMessage("Link copiado!");
  }catch(e){
    showMessage("Copie o endereço do site para compartilhar.");
  }
}

async function sharePage(){
  if(navigator.share){
    try{
      await navigator.share({title:"Aquiles_0740", text:"Confira meus links!", url:window.location.href});
    }catch(e){}
  }else{
    copyProfile();
  }
}
