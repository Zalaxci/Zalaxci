const artworks = document.getElementById("artworks");
const viewArtworksButton = document.getElementById("show-artworks");
function updateViewArtworksButton() {
    viewArtworksButton.hidden = document.body.clientWidth >= 800;
}
function viewOrHideArtworks() {
    if (viewArtworksButton.innerText === "Show more!") {
        artworks.style.maxHeight = "100%";
        viewArtworksButton.innerText = "Hide!";
        return;
    }
    artworks.style.maxHeight = "150vh";
    viewArtworksButton.innerText = "Show more!";
}
window.onload = updateViewArtworksButton;
window.onresize = updateViewArtworksButton;
viewArtworksButton.onclick = viewOrHideArtworks;