const dialog = document.querySelector("dialog")
const cart = document.querySelector(".cart-img")
const cartBtn = document.querySelector("button")
const quantity = document.querySelector(".quan")
const cc = document.querySelector(".cart-quantity")
const sneakImg = document.querySelector(".sneak-img")
const sneakImg2 = document.querySelector(".sneak-img2")
const imgSrc = document.querySelectorAll(".ig")
const imgSrc2 = document.querySelectorAll(".ig2")
const imgDiv = document.querySelectorAll(".img-div-content")
const imgDiv2 = document.querySelectorAll(".img-div-content2")
const add = document.querySelector(".add")
const remove = document.querySelector(".minus")
const empty = document.querySelector(".empty")
const cartCount = document.querySelector(".cart-count")
const pop = document.querySelector(".pop-up")
const next = document.querySelector(".next-div")
const previous = document.querySelector(".prev-div")
const closePop = document.querySelector(".close")
const side = document.querySelector(".side")
const menu = document.querySelector(".menu")
const closeNav = document.querySelector(".close-nav")
let isShow = false
let prev = null
let prev2 = null
let num = 1
let src ;
const itemsDiv = document.createElement("div")
itemsDiv.classList.add("items");
const itemCont = document.createElement("div");
itemCont.classList.add("items-cont")
const shoeImg = document.createElement("img")
shoeImg.classList.add("shoe-img")
shoeImg.src = sneakImg.src
const paraEle = document.createElement("p")
paraEle.classList.add("num")
const delIcon = document.createElement("img");
delIcon.classList.add("deleteBtn")
delIcon.src = "./images/icon-delete.svg"
delIcon.alt = "delete"
const btn = document.createElement("button");
btn.innerText = "Checkout"
btn.classList.add("new-btn")
let current = 0
let qua;


menu.addEventListener("click" ,() => {
  side.classList.remove('exit');
  side.classList.add('showUp'); 
})

closeNav.addEventListener("click", () => {
 
  side.classList.add('exit');
  setTimeout(() => {
    side.classList.remove('showUp')
    side.classList.remove('exit');
    side.classList.add('hide'); // Add hide class to keep the menu hidden
  }, 1000);
})

 // 1000ms = 1s animation duration

sneakImg.addEventListener("click", () => {
 pop.style.display = "block"
})

closePop.addEventListener("click", () => {
  pop.style.display = "none"
})
imgSrc.forEach((item,index) => {
 item.addEventListener("click", (src) => {
    imgDiv[index].classList.add("border")
    item.classList.add("opacity")
    if (prev && prev2) {
     prev.classList.remove("border")
     prev2.classList.remove("opacity")
    }
    sneakImg.src =item.src
    prev = imgDiv[index]
    prev2 = item
 })
})

imgSrc2.forEach((item,index) => {
  item.addEventListener("click", (src) => {
    current = parseInt(item.src.slice(71,72)) - 1
     imgDiv2[index].classList.add("border")
     item.classList.add("opacity")
     if (prev && prev2) {
      prev.classList.remove("border")
      prev2.classList.remove("opacity")
     }
     sneakImg2.src = item.src
     prev = imgDiv2[index]
     prev2 = item
  })
 })


cart.addEventListener("click", show)
function show() {
    dialog.open = !dialog.open
}

add.addEventListener("click", () => {
  quantity.innerText = parseInt(quantity.innerText) + 1
  qua = quantity.innerText

})

remove.addEventListener("click" ,() => {
  if (parseInt(quantity.innerText) !== 0) {
    quantity.innerText = parseInt(quantity.innerText) - 1
  }
})

cartBtn.addEventListener("click", () => {
    if (qua !== 0 && parseInt(quantity.innerText) !== 0) {
      qua = quantity.innerText
      cartCount.style.display = "grid"
      cartCount.innerText = qua
      empty.style.display = "none"
      itemsDiv.style.display = "flex"
      itemsDiv.style.flexDirection = "column"
      paraEle.innerHTML =`<p> Fall Limited Edition Sneakers <br>  <span>$125.00 x ${qua} <strong>$${125 * parseInt(qua)}.00</strong></span></p>` 
      itemCont.appendChild(shoeImg)
      itemCont.appendChild(paraEle)
      itemCont.appendChild(delIcon)
      itemsDiv.appendChild(itemCont)
      itemsDiv.appendChild(btn)
      cc.appendChild(itemsDiv)
    } else {
      empty.style.display = "block"
      itemsDiv.style.display = "none"
    }
     
})

delIcon.addEventListener("click" , () => {
 if (qua > 1) {
   qua = qua - 1
   paraEle.innerHTML = `<p> Fall Limited Edition Sneakers <br>  <span>$125.00 x ${qua} $${125 * parseInt(qua)}.00</span></p>` 
   cartCount.innerText = qua
 }  else {
   itemsDiv.style.display = "none"
   empty.style.display = "block"
   cartCount.style.display = "none"
 }
})

next.addEventListener("click" ,plusSlides)

previous.addEventListener("click", removeSlides)


let ii =  Array.from(imgSrc2)
const tru = ii.filter(item => {
  return item.src.slice(50,72) === sneakImg2.src.slice(50,72)
  })

function plusSlides() {
  current = current >= imgSrc2.length - 1 ?  0 : current + 1
    console.log(current >= imgSrc2.length)
    console.log(`cur: ${imgSrc2[current].src}} , len: ./${imgSrc2[current].src.slice(22,72)}`)
    const len = `${imgSrc2[current].src.slice(32,72)}.jpg`
    console.log(`lenn: ${len}`)
    console.log(sneakImg2)
    sneakImg2.src = imgSrc2[current].src
}
//console.log(current)

function removeSlides() {
  if (current < 1) {
    current = imgSrc2.length - 1
   } else {
     current = current - 1
   }
   console.log(current)
   sneakImg2.src = imgSrc2[current].src
}
