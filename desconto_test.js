Feature("Desconto");

var faker = require("faker");

Scenario("Resgatar cupom de desconto com sucesso", async ({ I }) => {
  I.amOnPage("/curso.html");
  I.fillField("#email", faker.internet.email());
  I.wait(1);
  I.click("Ganhar cupom");

  let text_da_tela = await I.grabTextFrom("#cupom > .cupom-text > span");

  console.log(text_da_tela);
  I.see(text_da_tela);
});
