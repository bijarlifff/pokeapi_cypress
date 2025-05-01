/// <reference types="cypress" />

describe('Response Structure', () => {
	it('should validate the structure of the response', () => {
		cy.request('/pokemon/joltik').then(response => {
			expect(response.status).to.eq(200)
			expect(response.body).to.have.property('id', 595)
			expect(response.body).to.have.property('name', 'joltik')
			expect(response.body).to.have.property('order', 717)

			expect(response.body).to.have.property('abilities')
			const abilities = response.body.abilities
			expect(abilities[0].ability).to.have.property(
				'name',
				'compound-eyes'
			)
			expect(abilities[0].ability).to.have.property(
				'url',
				'https://pokeapi.co/api/v2/ability/14/'
			)
			expect(abilities[0]).to.have.property('is_hidden', false)
			expect(abilities[0]).to.have.property('slot', 1)

			expect(response.body).to.have.property('base_experience', 64)

			expect(response.body).to.have.property('moves')
			const moves = response.body.moves
			expect(moves[0]).to.have.property('version_group_details')
			const versionGroupDetails = moves[0].version_group_details
			expect(versionGroupDetails[0]).to.have.property(
				'level_learned_at',
				0
			)
			expect(versionGroupDetails[0].move_learn_method).to.have.property(
				'name',
				'machine'
			)
			expect(versionGroupDetails[0].move_learn_method).to.have.property(
				'url',
				'https://pokeapi.co/api/v2/move-learn-method/4/'
			)
			expect(versionGroupDetails[0]).to.have.property('order', null)
			expect(versionGroupDetails[0].version_group).to.have.property(
				'name',
				'black-white'
			)
			expect(versionGroupDetails[0].version_group).to.have.property(
				'url',
				'https://pokeapi.co/api/v2/version-group/11/'
			)
		})
	})
})
