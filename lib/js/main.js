const leftImg= document.querySelector("#first");
leftImg.remove();


const newImg=document.createElement("img");
newImg.src="assets/cry.png";

const mainContainer= document.querySelector(".main-container");
mainContainer.appendChild(newImg);
