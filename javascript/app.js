const sharedCard = document.getElementById("share")
const shareButton = document.getElementById("share-button")
const shareButtonOpen = document.getElementById("share-button-open")


const setVisibility = () => {
  sharedCard.classList.toggle("hidden")
}

shareButton.addEventListener("click", setVisibility)

shareButtonOpen.addEventListener("click", setVisibility)