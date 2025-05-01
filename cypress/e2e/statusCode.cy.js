/// <reference types="cypress" />

describe('Status Code', () => {
	it('should return 200 for valid Pokémon ID', () => {
		cy.request('/pokemon/1').then(response => {
			expect(response.status).to.eq(200)
		})
	})

	it('should return 404 for invalid Pokémon ID', () => {
		cy.request({ url: '/pokemon/9999', failOnStatusCode: false }).then(
			response => {
				expect(response.status).to.eq(404)
			}
		)
	})

	it('should return 200 for valid type ID', () => {
		cy.request('/type/6').then(response => {
			expect(response.status).to.eq(200)
		})
	})

	it('should return 404 for invalid type ID', () => {
		cy.request({ url: '/type/20', failOnStatusCode: false }).then(
			response => {
				expect(response.status).to.eq(404)
			}
		)
	})
})
