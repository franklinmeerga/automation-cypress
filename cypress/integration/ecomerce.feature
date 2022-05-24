Feature: compra de um produto

    como um usuario eu  quero fazer a compra de um produto qualquer

Scenario: Fazer login com e-mail valido e senha valida
    Given que o usuario esta na pagina de login
    When o usuario ingreasar o email "franklinmeerga@ufps4.edu.co" e o usuario ingressar a senha "12345"
    And o usuario clicar no botao login
    Then ele debe ser redirecionado pra pagina de my accout

Scenario: Fazer login com e-mail2 valido e senha2 valida
    Given que o usuario esta na pagina de login
    When o usuario ingreasar o email "franklinmeerga@ufps5.edu.co" e o usuario ingressar a senha "12345"
    And o usuario clicar no botao login
    Then ele debe ser redirecionado pra pagina de my accout
@focus
Scenario Outline: ingresar varios email e senhas validas
    Given que o usuario esta na pagina de login
    When o usuario ingreasar o email "<email>" e o usuario ingressar a senha "<senha>"
    And o usuario clicar no botao login
    Then ele debe ser redirecionado pra pagina de my accout

    Examples:
        | email | senha |
        | franklinmeerga@ufps5.edu.co  | 12345  |:

    
  
    
    