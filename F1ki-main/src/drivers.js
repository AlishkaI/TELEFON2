
const drivers = [
  { name: "Max Verstappen", team: "Red Bull Racing", img: "images/drivers/verstappen.jpg", link: "https://en.wikipedia.org/wiki/Max_Verstappen" },
  { name: "Isak Hadjar", team: "Red Bull Racing", img: "images/drivers/hajjar.jpg", link: "https://en.wikipedia.org/wiki/Isack_Hadjar" },
  { name: "Lando Norris", team: "McLaren", img: "images/drivers/lando.jpg", link: "https://en.wikipedia.org/wiki/Lando_Norris" },
  { name: "Oscar Piastri", team: "McLaren", img: "images/drivers/piastri.jpg", link: "https://en.wikipedia.org/wiki/Oscar_Piastri" },
  { name: "Charles Leclerc", team: "Ferrari", img: "images/drivers/leclerc.jpg", link: "https://en.wikipedia.org/wiki/Charles_Leclerc" },
  { name: "Lewis Hamilton", team: "Ferrari", img: "images/drivers/hamilton.jpg", link: "https://en.wikipedia.org/wiki/Lewis_Hamilton" },
  { name: "George Russell", team: "Mercedes", img: "images/drivers/russell.jpg", link: "https://en.wikipedia.org/wiki/George_Russell_(racing_driver)" },
  { name: "Kimi Antonelli", team: "Mercedes", img: "images/drivers/antonelli.jpg", link: "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli" },
  { name: "Lance Stroll", team: "Aston Martin", img: "images/drivers/lance.jpg", link: "https://en.wikipedia.org/wiki/Lance_Stroll" },
  { name: "Fernando Alonso", team: "Aston Martin", img: "images/drivers/alonso.jpg", link: "https://en.wikipedia.org/wiki/Fernando_Alonso" },
  { name: "Liam Lawson", team: "Racing Bulls", img: "images/drivers/liam.jpg", link: "https://en.wikipedia.org/wiki/Liam_Lawson" },
  { name: "Arvid Lindblad", team: "Racing Bulls", img: "images/drivers/arvid.jpg", link: "https://en.wikipedia.org/wiki/Arvid_Lindblad" },
  { name: "Esteban Ocon", team: "Haas", img: "images/drivers/ocon.jpg", link: "https://en.wikipedia.org/wiki/Esteban_Ocon" },
  { name: "Oliver Bearman", team: "Haas", img: "images/drivers/bearman.jpg", link: "https://en.wikipedia.org/wiki/Oliver_Bearman" },
  { name: "Pierre Gasly", team: "Alpine", img: "images/drivers/gasly.jpg", link: "https://en.wikipedia.org/wiki/Pierre_Gasly" },
  { name: "Franco Colapinto", team: "Alpine", img: "images/drivers/colapinto.jpg", link: "https://en.wikipedia.org/wiki/Franco_Colapinto" },
  { name: "Alex Albon", team: "Williams", img: "images/drivers/albon.jpg", link: "https://en.wikipedia.org/wiki/Alex_Albon" },
  { name: "Carlos Sainz", team: "Williams", img: "images/drivers/sainz.jpg", link: "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr." },
  { name: "Nico Hulkenberg", team: "Audi", img: "images/drivers/hulkenberg.jpg", link: "https://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg" },
  { name: "Gabriel Bortoleto", team: "Audi", img: "images/drivers/gabriel.jpg", link: "https://en.wikipedia.org/wiki/Gabriel_Bortoleto" },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("driversGrid");
  if (!grid) return;

  const modal = document.getElementById("driverModal");
  const modalImg = document.getElementById("modalImg");
  const modalName = document.getElementById("modalName");
  const modalTeam = document.getElementById("modalTeam");
  const closeModal = document.getElementById("closeModal");

drivers.forEach(driver => {
  const card = document.createElement("div");
  card.className = "driver-card";
  
  // Добавляем курсор-указатель, чтобы было понятно, что карточка кликабельна
  card.style.cursor = "pointer";

  card.innerHTML = `
    <img src="${driver.img}" alt="${driver.name}">
    <div class="driver-info">
      <h3>${driver.name}</h3>
      <p>${driver.team}</p>
    </div>
    <span class="driver-link-pseudo">Подробнее</span>
  `;

  // Навешиваем событие клика на всю карточку
  card.addEventListener("click", (e) => {
    // window.open открывает ссылку в новой вкладке ('_blank')
    window.open(driver.link, "_blank");
  });

  grid.appendChild(card);
});
});