const toast = document.getElementById("toast");
document.getElementById("year").textContent = new Date().getFullYear();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyProfile() {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
    showToast("Link do perfil copiado!");
  } catch {
    showToast("Copie o endereço do site para compartilhar.");
  }
}

async function sharePage() {
  const data = {
    title: "Aquiles_0740",
    text: "Confira meus links!",
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(data);
    } catch {}
  } else {
    copyProfile();
  }
}
