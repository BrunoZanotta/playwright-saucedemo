Feature: Compra de produto na Sauce Demo

  Como um usuário logado,
  Eu quero poder adicionar um produto ao carrinho e finalizar a compra
  Para garantir que o fluxo de ponta a ponta está funcionando.

  Scenario: Finalizar a compra de um produto com sucesso
    Given que eu estou logado no sistema com o usuário "standard_user" e senha "secret_sauce"
    When eu adiciono o primeiro produto da lista ao carrinho
    And eu navego para o carrinho de compras
    And eu prossigo para o checkout
    And eu preencho as informações de checkout com nome "Bruno", sobrenome "Zanotta" e CEP "90000-000"
    And eu finalizo a compra
    Then eu devo ver a mensagem de confirmação "Thank you for your order!"