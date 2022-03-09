const teamData = [
  {
    id: 1,
    name: "Alfred Bisimwa",
    picture: "./images/alfred.jpg",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    moreInfo:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis hic",
  },
  {
    id: 2,
    name: " David Bisimwa",
    picture: "./images/dvd.jpeg",
    info: "Specialist in laboratory Medicine (Pathology) at CHUM - Centre hospitalier de l'Université de Montréal ",
    moreInfo:
      "Specialist in laboratory Medicine (Pathology) at CHUM - Centre hospitalier de l'Université de Montréal",
  },
  {
    id: 3,
    name: "Bill Gates",
    picture: "./images/donator3.jpeg",
    info: "Bill Gates the cofounder of Microsoft",
    moreInfo:
      " Bill Gates now focuses most of his time on philanthropy, running the Bill & Melinda Gates Foundation alongside his wife.",
  },
  {
    id: 4,
    name: " Warren Buffett",
    picture: "./images/donator4.jpeg",
    info: "The chairman and CEO of holding company Berkshire Hathaway,",
    moreInfo:
      "In 2006, Buffett vowed to donate 85% of his wealth to the Bill & Melinda Gates Foundation, as well as other foundations set up by family members.",
  },
  {
    id: 5,
    name: "Tresor Bireke",
    picture: "./images/tresor.jpeg",
    info: "Ruby on Rails Developer at Code&Care",
    moreInfo:
      "Azim Premji is the founder and chairman of the Azim Premji Foundation, which works to reform India is school and examination systems.",
  },
  {
    id: 6,
    name: "Aubin Njebenje",
    picture: "./images/aubin.jpeg",
    info: "Forex trender and ALFACAMP CEO",
    moreInfo:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque,",
  },
];

const team = document.querySelector(".team");
const seeMore = document.querySelector(".see-more");
const seeMoreText = document.querySelector(".see-more span");
const seeMoreImg = document.querySelector(".see-more img");
const seeLess = [teamData[0], teamData[1]];
team.innerHTML = "";
seeMoreText.innerText = "See More";

seeLess.forEach((data) => {
  const card = document.createElement("li");
  card.className = "card";
  card.classList.add("d-flex-row-center");
  card.innerHTML = `<div class="card-img">
              <img class="img-user" src=${data.picture} alt="" />
              <img class="img-bg" src="./images/bg-square.jpg" alt="" />
            </div>
            <div class="card-body">
              <h2>${data.name}</h2>
              <h3>${data.info}</h3>
              <p>
                ${data.moreInfo}
              </p>
            </div>
          `;

  team.appendChild(card);
});
let see = true;

seeMore.addEventListener("click", () => {
  if (see) {
    team.innerHTML = "";
    teamData.forEach((data) => {
      const card = document.createElement("li");
      card.className = "card";
      card.classList.add("d-flex-row-center");
      card.innerHTML = `<div class="card-img">
              <img class="img-user" src=${data.picture} alt="" />
              <img class="img-bg" src="./images/bg-square.jpg" alt="" />
            </div>
            <div class="card-body">
              <h2>${data.name}</h2>
              <h3>${data.info}</h3>
              <p>
                ${data.moreInfo}
              </p>
            </div>
          `;
      seeMoreText.innerText = "See Less";
      seeMoreImg.src = "./images/icons/up-arrow-svgrepo-com.svg";
      team.appendChild(card);
    });
    see = false;
  } else {
    team.innerHTML = "";
    seeLess.forEach((data) => {
      const card = document.createElement("li");
      card.className = "card";
      card.classList.add("d-flex-row-center");
      card.innerHTML = `<div class="card-img">
      <img class="img-user" src=${data.picture} alt="" />
      <img class="img-bg" src="./images/bg-square.jpg" alt="" />
      </div>
      <div class="card-body">
      <h2>${data.name}</h2>
      <h3>${data.info}</h3>
      <p>
      ${data.moreInfo}
      </p>
      </div>
      `;

      team.appendChild(card);
    });
    seeMoreText.innerText = "See More";
    seeMoreImg.src = "./images/icons/down-arrow-svgrepo-com.svg";
    see = true;
  }
});
