Feature: Login na Sauce Demo

  Como um usuário válido,
  Eu quero poder fazer login no sistema
  Para acessar a lista de produtos.

  Scenario: Login com sucesso
    Given que eu estou na página de login
    When eu preencho o usuário com "standard_user" e a senha com "secret_sauce"
    Then eu devo ser redirecionado para a página de produtos