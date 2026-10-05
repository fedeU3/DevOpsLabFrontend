// cypress/e2e/file.cy.js

//const EMAIL = `qa_${Date.now()}@example.com`;
//const PASS  = '@Otorrino1';

beforeEach(() => {
  cy.visit('http://localhost:3001');
});


//
// =============== HAPPY PATHS (4 historias) ===============
//

/* =================== REQ-Registro (Happy Path) =================== */
describe('Primer test', () => {
  it('Primer test', () => {

    cy.wait(5000);

    cy.contains(/Home/i)
      .should('be.visible');
  });
});

/* =================== REQ-Login (Happy Path) =================== */

/*
describe('REQ-Login', () => {
  it('inicia sesión con credenciales válidas', () => {
    cy.contains(/sign in/i).click(); // abre /auth/login

    cy.get('input[type="email"], input[placeholder="Your email"]')
      .should('be.visible')
      .clear()
      .type('customer@practicesoftwaretesting.com'); // demo

    cy.get('input[type="password"], input[placeholder="Your password"]')
      .clear()
      .type('welcome01', { log: false }); // demo

    cy.focused().type('{enter}');

    cy.contains(/My account/i, { timeout: 10000 }).should('be.visible');
  });
});
*/

/* =================== REQ-Catálogo (Happy Path) =================== */
/*describe('REQ-Catálogo', () => {
  it('busca un producto y entra al detalle', () => {
    cy.get('input[placeholder="Search"]').type('pliers');

    cy.get('body').then($b => {
      const hasResults = $b.find('a[href^="/product/"]').length > 0;
      if (!hasResults) {
        cy.visit('/category/hand-tools');
      }
    });

    cy.get('a[href^="/product/"]', { timeout: 10000 }).first().click();
    cy.location('pathname').should('match', /\/product\//);
  });
});
*/


/* =================== REQ-Carrito (Happy Path) =================== */
/*describe('REQ-Carrito', () => {
  it('busca un producto, entra al detalle y lo agrega al carrito', () => {
    cy.get('input[placeholder="Search"]').type('pliers');

    cy.get('body').then($b => {
      const hasResults = $b.find('a[href^="/product/"]').length > 0;
      if (!hasResults) {
        cy.visit('/category/hand-tools');
      }
    });

    cy.get('a[href^="/product/"]', { timeout: 10000 }).first().click();

    cy.contains(/Add to cart/i).click();

    cy.contains(/Product added to shopping cart./i).should('be.visible');

  });
});
*/

//
// =============== NEGATIVOS (2 historias distintas) ===============
//


/* =================== REQ-Login (Negativo) =================== */
/*describe('REQ-Login (Negativo)', () => {
  it('credenciales inválidas muestran error', () => {
    cy.contains(/sign in/i).click();

    cy.get('input[type="email"], input[placeholder="Your email"]')
      .should('be.visible')
      .clear()
      .type(`fake+${Date.now()}@mail.test`);

    cy.get('input[type="password"], input[placeholder="Your password"]')
      .clear()
      .type('wrong123', { log: false });

    cy.focused().type('{enter}');

    cy.contains(/invalid/i, { timeout: 6000 })
      .should('be.visible');
  });
});

*/


// REQ-Carrito (Negativo) — carrito vacío
/*describe('REQ-Carrito (Negativo) — vacío', () => {
  it('no muestra botón de checkout sin ítems', () => {
    cy.clearCookies(); cy.clearLocalStorage();
    cy.visit('/cart');
    // El botón de checkout no debería estar disponible
    cy.contains(/checkout|pagar|finalizar compra|proceed/i).should('not.exist');
  });
});*/
