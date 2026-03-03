const teams = [
  {    name: "Red Bull Racing", img: "images/teams/redbull.jpg",     link: "https://en.wikipedia.org/wiki/Red_Bull_Racing"     },
  {    name: "MClaren",         img: "images/teams/mclaren.jpg",     link: "https://en.wikipedia.org/wiki/McLaren_F1"          },
  {    name: "Ferrari",         img: "images/teams/ferrari.jpg",     link: "https://f1.fandom.com/wiki/Scuderia_Ferrari"       },
  {    name: "Mercedes",        img: "images/teams/mercedes.jpg",    link: "https://en.wikipedia.org/wiki/Mercedes_F1"         },
  {    name: "Aston Martin",    img: "images/teams/astonmartin.jpg", link: "https://en.wikipedia.org/wiki/Aston_Martin_F1"     },
  {    name: "Haas",            img: "images/teams/haas.jpg",        link: "https://en.wikipedia.org/wiki/Haas_F1"             },
  {    name: "Alpine",          img: "images/teams/alpine.jpg",      link: "https://en.wikipedia.org/wiki/Alpine_F1"           },
  {    name: "Williams",        img: "images/teams/williams.jpg",    link: "https://en.wikipedia.org/wiki/Williams_F1"         },
  {    name: "Racing bulls",    img: "images/teams/bulls.jpg",       link: "https://en.wikipedia.org/wiki/racing_bulls"        },
  {    name: "Cadillac",        img: "images/teams/cadillac.jpg",    link: "https://en.wikipedia.org/wiki/Cadillac_F1"         }, 
]



const teamsGrid = document.getElementById("teamsGrid");

if (teamsGrid) {
  teams.forEach(t => {
    const card = document.createElement('div');
    card.className = 'team-card fade-in';
    
    card.innerHTML = `
      <img src="${t.img}" alt="${t.name}">
      <h3>${t.name}</h3>
    `;

    card.onclick = () => window.open(t.link, '_blank');

    teamsGrid.appendChild(card);
  });
}
