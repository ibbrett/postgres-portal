import {gamesByDate} from '../../data/ncaa-games-2023-09-20T20:59:31.278Z.js'

const section_id = 2
const newEventPagePath = 'sections/event/new'

describe('Postgres Portal College Game Event Creation', () => {
  beforeEach(() => {
    cy.visit(`${newEventPagePath}?section_id=${section_id}`)
    cy.get('[data-header="event-form-header"]').contains('New Event')
  })

  gamesByDate.forEach(day => {
    const now = new Date(day.date)
    day.games.forEach(game => {
      const time = game.time.split(' ')
      const hoursMinutes = time[0].split(':')
      const ampm = time[1]
      const hours = hoursMinutes[0]
      const mins = hoursMinutes[1]
      it('Should create event', () => {
        cy.get('input[name=summary]').type(`${game.away_team} @ ${game.home_team}`)
        cy.get('textarea[name=detail]').type(`Location: ${game.loc}`)
        cy.get('.react-datetime-picker input[name=month]').type(
          String(now.getMonth() + 1)
        )
        cy.get('.react-datetime-picker input[name=day]').type(String(now.getDate()))
        cy.get('.react-datetime-picker input[name=year]').type(
          String(now.getFullYear())
        )
        cy.get('.react-datetime-picker input[name=hour12]').type(hours)
        cy.get('.react-datetime-picker input[name=minute]').type(mins)
        cy.get('.react-datetime-picker select[name=amPm]').select(
          ampm === 'PM' ? 'pm' : 'am'
        )
        cy.get('button[type=submit]').click()
        cy.get('#application-title').then($title => {
          cy.wrap($title).should('be.visible')
          cy.wrap($title).contains('Postgres Portal Events')
        })
      })
    })
  })
})
