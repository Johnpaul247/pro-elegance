// TESTIMONIAL

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