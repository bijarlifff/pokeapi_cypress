/// <reference types="cypress" />

describe('Response Time', () => {
	it('should verify the response time of the Pokémon', () => {
		cy.request('/pokemon/joltik').then(response => {
			expect(response.status).to.eq(200)
			expect(response.duration).to.be.lessThan(1000)
		})
	})

	it('should verify the response time of the type', () => {
		cy.request('/type/6').then(response => {
			expect(response.status).to.eq(200)
			expect(response.duration).to.be.lessThan(1000)
		})
	})
})
