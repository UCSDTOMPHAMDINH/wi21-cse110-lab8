describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75').then(($el) => {
		expect($el).to.have.value(75);
	});
  });

  it('input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input').then(($el) => {
		expect($el).to.have.value(33);
	});
  });

  it('audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
	cy.get("#horn-sound").then(($el) => {
		expect($el).to.have.prop('volume',0.33);
	});
  });

  it('audio/image changes when partyhorn change', () => {
    cy.get('#radio-party-horn').check();
	cy.get("#horn-sound").then(($el) => {
		expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
	});

	cy.get("#sound-image").then(($el) => {
		expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
	});
  });

  it('large volume image when input changes', () => {
    cy.get('#volume-number').clear().type('75');
	cy.get("#volume-image").then(($el) => {
		expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
	});
  });


  it('medium volume image when input changes', () => {
    cy.get('#volume-number').clear().type('50');
	cy.get("#volume-image").then(($el) => {
		expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
	});
  });


  it('small volume image when input changes', () => {
    cy.get('#volume-number').clear().type('5');
	cy.get("#volume-image").then(($el) => {
		expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
	});
  });

  it('no volume image when input changes', () => {
    cy.get('#volume-number').clear().type('0');
	cy.get("#volume-image").then(($el) => {
		expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
	});
  });

  it('honk disabled if empty', () => {
    cy.get('#volume-number').clear();
	cy.get("#honk-btn").then(($el) => {
		expect($el).to.have.attr('disabled');
	});
  });

  it('honk disabled if non-number', () => {
    cy.get('#volume-number').clear().type('lul');
	cy.get("#honk-btn").then(($el) => {
		expect($el).to.have.attr('disabled');
	});
  });

  it('error if number outside range above', () => {
    cy.get('#volume-number').clear().type('120').then(() => {
		
		cy.get('#honk-btn').click().then(($click) => {
			cy.get('input:invalid').should('have.length', 1);
	
		})
 	 });

	});


	it('error if number outside range below', () => {
		cy.get('#volume-number').clear().type('-3').then(() => {
			
			cy.get('#honk-btn').click().then(($click) => {
				cy.get('input:invalid').should('have.length', 1);
		
			})
		  });
	
		});
});
