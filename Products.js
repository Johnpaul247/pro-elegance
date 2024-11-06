// SIDEBAR FOR MOBILE
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('translate-y-full')
  menu.classList.toggle('translate-y-0')
}


// PRODUCTS

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