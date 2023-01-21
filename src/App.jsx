import React from 'react'
import Card from './components/Card'
import cardsInfo from './data/cardsInfo'
import './styles/normalize.scss'
import './styles/app.scss'


function App() {
  return (
    <div className="App">
      <section className="eat">
        <h3 className="title">Ты сегодня покормил кота?</h3>
        <div className="eat__inner">
          {
            cardsInfo.map((card) => {
              return (
                <Card key={card.id} card={card} />
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default App



// for (let index = 0; index < cardsInfo.length; index++) {
//   const cardInfo = cardsInfo[index]
//   const card = createElement("div", "eat__card");

//   const cardID = cardsInfo[index].id

//   const cardInner = createElement("div", "card__inner");
//   cardInner.dataset.cardId = cardID

//   if (cardsInfo[index].status == "default") {
//     const html = `
//             <div class="card__inner" data-card-id=${cardID}>
//                 <h4 class="card__subtitle">
//                     ${cardInfo.subtitle}
//                 </h4>
//                 <h2 class="card__title">
//                     Нямушка
//                     <div class="card__taste">
//                         ${cardInfo.taste}
//                     </div>
//                 </h2>
//                 <div class="card__desc">
//                     <div class="card__amount">
//                         ${cardInfo.amount}
//                     </div>
//                     <div class="card__gift">
//                         ${cardInfo.gift}
//                     </div>
//                 </div>
//                 <div class="card__weight">
//                     ${cardInfo.weight}
//                     <div class="weight__unit">
//                         КГ
//                     </div>
//                 </div>
//             </div>
//             <p class="eat__lettering">
//                 Чего сидишь? Порадуй котэ, <span class="lettering__span">купи</span><span class="bluedot">.</span>
//             </p>
//         `
//     card.innerHTML = html;

//     containerCard.appendChild(card)

//     card.addEventListener("click", () => {
//       cardInfo.status = "selected"
//       console.log(card, cardsInfo);
//       viewHTML()
//     })
//   }

//   if (cardsInfo[index].status == "selected") {
//     console.log("selected");
//     const html = `
//             <div class="card__inner card__inner--selected" data-card-id=${cardID}>
//                 <h4 class="card__subtitle">
//                     ${cardInfo.subtitle}
//                 </h4>
//                 <h2 class="card__title">
//                     Нямушка
//                     <div class="card__taste">
//                         ${cardInfo.taste}
//                     </div>
//                 </h2>
//                 <div class="card__desc">
//                     <div class="card__amount">
//                         ${cardInfo.amount}
//                     </div>
//                     <div class="card__gift">
//                         ${cardInfo.gift}
//                     </div>
//                 </div>
//                 <div class="card__weight card__weight--selected">
//                     ${cardInfo.weight}
//                     <div class="weight__unit">
//                         КГ
//                     </div>
//                 </div>
//             </div>
//             <p class="eat__lettering">
//                 ${cardInfo.lettering}
//             </p>
//         `
//     card.innerHTML = html;

//     containerCard.appendChild(card)

//     card.addEventListener("click", () => {
//       cardInfo.status = "default"
//       console.log(card, cardsInfo);
//       viewHTML()
//     })
//   }

//   if (cardsInfo[index].status == "disabled") {
//     console.log("disabled");
//     const html = `
//             <div class="card__inner card__inner--disabled" data-card-id=${cardID}>
//                 <h4 class="card__subtitle">
//                     ${cardInfo.subtitle}
//                 </h4>
//                 <h2 class="card__title">
//                     Нямушка
//                     <div class="card__taste">
//                         ${cardInfo.taste}
//                     </div>
//                 </h2>
//                 <div class="card__desc">
//                     <div class="card__amount">
//                         ${cardInfo.amount}
//                     </div>
//                     <div class="card__gift">
//                         ${cardInfo.gift}
//                     </div>
//                 </div>
//                 <div class="card__weight card__weight--disabled">
//                     ${cardInfo.weight}
//                     <div class="weight__unit">
//                         КГ
//                     </div>
//                 </div>
//             </div>
//             <p class="eat__lettering eat__lettering--disabled">
//                 Печалька, ${cardInfo.taste} закончился.
//             </p>
//         `
//     card.innerHTML = html;

//     containerCard.appendChild(card)
//   }
// }