import DeepUrl from "../data/deepUrl.js";
Cypress.Commands.add("loginByRequest", (username, password, sessionId) => {
  cy.session(
    sessionId,
    () => {
      cy.request({
        method: "POST",
        url: "https://www.mantisbt.org/bugs/login.php",
        form: true,
        body: {
          return: 'index.php',
          username: username,
          password: password,
          secure_session: 'on'
        },
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.6',
          'Cache-Control': 'max-age=0',
          'Connection': 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'https://www.mantisbt.org',
          'Referer': 'https://www.mantisbt.org/bugs/login_password_page.php',
        },
      }).then((response) => {
        if (response.headers) {
          const cookiesArray = response.headers['set-cookie'];
          const mantisStringCookie = cookiesArray && cookiesArray.find(cookie => cookie.includes('MANTIS_STRING_COOKIE'));

          if (mantisStringCookie) {
            const value = mantisStringCookie.split(';')[0].split('=')[1];
            Cypress.env('MANTIS_STRING_COOKIE', value);
          }
        }
      });
    },
    {
      validate() {
        cy.visit(DeepUrl.myView);
      }
    }
  );
});
