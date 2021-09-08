it('Command log incorrectly shows ', () => {
  // Instead of `res => res` below you could also pass `() => {}` but that
  // wouldn't alter the outcome
  cy.intercept('http://localhost:3000/sendPayload', { times: 1 }, res => res)
    .as('sendPayload');

  cy.visit('http://localhost:3000/');

  cy.wait('@sendPayload');
});
