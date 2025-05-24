// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
console.log("Welcome to my website");
const btn = document.getElementById("btn-click");
btn.addEventListener("click", () => {
  const text = document.getElementById("text").value;
  const qrImg = document.querySelector(".image");
//   qrImg.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}" alt="Description of image" onerror="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb65rh4gV9RSYdUtPWQktALjHFzAjWCPyBeg&s"> `;
  if(text===""){
    qrImg.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb65rh4gV9RSYdUtPWQktALjHFzAjWCPyBeg&s">`;
  }
  else{
    qrImg.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}">`;
  }
});
