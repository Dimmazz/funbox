import React, { useState } from 'react'


const Card = ({ card }) => {

  const [statusCard, setStatusCard] = useState(card.status ? card.status : 'default')
  const [mouseOnCard, setMouseOnCard] = useState(false)
  const [isCliked, setIsClicked] = useState(false)

  const amountText = (amount) => {
    if (amount >= 5) {
      return 'порций'
    }
    if (amount >= 2) {
      return 'порции'
    }
    if (amount == 1) {
      return 'порция'
    }

    return 'порций'
  }

  const defaultLettering = (
    <>
      Чего сидишь? Порадуй котэ, <span className="lettering__span">купи</span><span className="bluedot">.</span>
    </>
  )

  const onHoverSelectedCardPhrase = (
    <span className='card__selected-hover'>Котэ не одобряет?</span>
  )

  const lettering = () => {
    switch (statusCard) {
      case 'default':
        return defaultLettering
        break;

      case 'selected':
        return card.lettering
        break;

      case 'disabled':
        return `Печалька, ${card.taste} закончился.`
        break;

      default:
        break;
    }
  }

  return (
    <div
      className="eat__card"
      onClick={(_e) => {
        setIsClicked(true)
      }}
      onMouseEnter={(_e) => setMouseOnCard(true)}
      onMouseLeave={(_e) => {
        setMouseOnCard(false)

        if (isCliked) {
          setIsClicked(false)
          switch (statusCard) {
            case 'default':
              setStatusCard('selected')
              break

            case 'selected':
              setStatusCard('default')
              break

            case 'disabled':
              break
          }
        }
      }}
    >
      <div className={`card__inner ${statusCard === 'default' ? ' ' : `card__inner--${statusCard}`}`}>
        <h4 className="card__subtitle" title={card.subtitle}>
          {mouseOnCard && statusCard === 'selected' ? onHoverSelectedCardPhrase : mouseOnCard && statusCard === 'selected' ? onHoverSelectedCardPhrase : card.subtitle}
        </h4>
        <div className="card__title-box">
          <h2 className="card__title">
            Нямушка
          </h2>
          <span className="card__taste" title={card.taste}>
            {card.taste}
          </span>
        </div>
        <div className="card__desc">
          <div className="card__amount">
            <span className='desc__span' title={`${card.amount} ${amountText(card.amount)}`}>{String(card.amount).split('', 2)}</span> {amountText(card.amount)}
          </div>
          <div className="card__gift" title={card.giftValue}>
            <span className='desc__span'>{card.giftValue > 1 ? `${String(card.giftValue).split('', 1)} ` : ''}</span>
            {card.gift}
          </div>
        </div>
        <div className={`card__weight ${statusCard === 'default' ? ' ' : `card__weight--${statusCard}`}`}>
          {card.weight.split('', 3)}
          <div className="weight__unit">
            КГ
          </div>
        </div>
      </div>
      <p className={statusCard === 'disabled' ? 'eat__lettering eat__lettering--disabled' : 'eat__lettering'}>
        {lettering()}
      </p>
    </div>
  )
}

export default Card