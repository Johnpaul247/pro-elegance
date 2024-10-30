// SIDEBAR FOR MOBILE
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('translate-y-full')
  menu.classList.toggle('translate-y-0')
}

// PRODUCT LISTS
const cardList = [
  {
    Image: "/Img/DOPL5692.JPG",
    Name: "Original Crochets",
    Price: "$350.00",
    Cart: "Add to cart",
  },

  {
    Image: "/Img/SORZ0969.JPG",
    Name: "Elegance",
    Price: "$120.00",
    Cart: "Add to cart",
  },

  {
    Image: "Img/RJKP3452.JPG",
    Name: "Crochets",
    Price: "$250.00",
    Cart: "Add to cart",
  },

  {
    Image: "Img/VZTN5222.JPG",
    Name: "Braided Wig",
    Price: "$150.00",
    Cart: "Add to cart",
  },
]

function display(cards) {
  const cardMenu = document.getElementById('card-menu');

  const cardElement = cards.map(card => 
    `<div class="flex flex-col gap-2">
      <img src="${card.Image}" alt="">
      <h1 class="font-bold text-lg">${card.Name}</h1>
      <h2 class="font-bold text-orange-400">${card.Price}</h2>
      <button class="p-2 bg-orange-400 rounded-lg text-white">${card.Cart}</button>
    </div>`
  ).join('')

  cardMenu.innerHTML = cardElement
}
display(cardList);


// TESTIMONIALS
const clientList = [
  {
    Quote: "/Img/qoutess.png",
    Comment: "Without creative business, we would have gone bankrupt. I will let my mom know about this, she could really use of creative business! I don't always clop, but when I do, It's because of creative business.",
    Profile: "/Img/Mask-Group.png",
    Name: "Mrs. Jane Doe",
    Position: "CEO Jane Corp",
  },

  {
    Quote: "/Img/qoutess.png",
    Comment: "Without creative business, we would have gone bankrupt. I will let my mom know about this, she could really use of creative business! I don't always clop, but when I do, It's because of creative business.",
    Profile: "/Img/Ellipse.png",
    Name: "Richard Ramsey",
    Position: "CEO Jane Corp",
  },
]

function testimonials(cards) {
  const testimonial = document.getElementById('testimonial');

  const cardElement = cards.map(card =>
    `<div class="flex flex-col gap-6 shadow-lg p-2">
      <img class="w-[70px] text-center" src="${card.Quote}" alt="">
      <p>${card.Comment}</p>
      <div class="flex gap-4">
        <img src="${card.Profile}" alt="">
        <div class="flex flex-col gap-2 mt-2">
          <h1 class="font-bold text-xl">${card.Name}</h1>
          <p>${card.Position}</p>
        </div>
      </div>
    </div>`
  ).join('')

  testimonial.innerHTML = cardElement
}
testimonials(clientList)


// BENEFITS
const benefitList = [
  {
    Image: "/Img/Frame.png",
    Title: "Free Shipping",
    Desc: "You will love at great low prices",
  },

  {
    Image: "/Img/icon.png",
    Title: "Flexible Payment",
    Desc: "Pay with multiple credit cards",
  },

  {
    Image: "/Img/group-6388.png",
    Title: "14 days Returns",
    Desc: "Within 30 days for an exchange",
  },

  {
    Image: "/Img/online.png",
    Title: "Online Support",
    Desc: "24hours a days, 7 days a week",
  },
]

function benefits(cards) {
  const benefit = document.getElementById('benefit');

  const cardElement = cards.map(card =>
    `<div class="flex flex-col justify-center gap-4 border border-gray-300 text-center p-10 bg-white">
        <img class="w-[50px] ml-[80px] max-md:ml-[120px]" src="${card.Image}" alt="">
        <h1 class="font-bold text-xl">${card.Title}</h1>
        <p class="text-lg">${card.Desc}</p>
      </div>`
  ).join('')

  benefit.innerHTML = cardElement
}
benefits(benefitList)