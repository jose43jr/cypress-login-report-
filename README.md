# Cypress Login Report

Este projeto foi criado para automatizar testes de login usando o framework Cypress.  
Além dos testes, ele gera relatórios em HTML com Mochawesome e inclui um script `.bat` que executa tudo automaticamente.

---

## Estrutura do Projeto

```
cypress-login-report/
│
├── cypress/
│   ├── e2e/
│   │   └── test_login.cy.js
│   ├── support/
│   │   └── e2e.js
│
├── cypress.config.js
├── rodar_testes.bat
├── package.json
└── mochawesome-report/ (gerado automaticamente)
```

---

## Cenários de Teste

- Login válido com credenciais corretas
- Login inválido com credenciais incorretas

Os testes acessam a página de login do site (https://the-internet.herokuapp.com/login) e verificam se as mensagens de sucesso ou erro aparecem corretamente.

---

 Credenciais válidas para login:
- Usuário: tomsmith
- Senha: SuperSecretPassword!


---

## Como Executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar os testes

Você pode rodar manualmente com:

```bash
npx cypress run
```

Ou usar o script `.bat`:

```bash
rodar_testes.bat
```

Esse script:

- Limpa relatórios antigos
- Executa os testes
- Gera um novo relatório com data e hora
- Abre o relatório automaticamente no navegador



## Resultado do Teste

**Relatório gerado:**  

----------------------------------------------------------------------------------------------------------------------------------

DevTools listening on ws://127.0.0.1:51045/devtools/browser/849693f1-6513-4a9c-94ac-1ba06e9914db

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        14.5.2                                                                         │
  │ Browser:        Electron 130 (headless)                                                        │
  │ Node Version:   v22.17.1 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          1 found (test_login.cy.js)                                                     │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  test_login.cy.js                                                                (1 of 1)


  Login Test with Cypress
    √ Valid login
    √ Invalid login


  2 passing (4s)

[mochawesome] Report JSON saved to C:\Users\feito\Documents\PROJETOS\cypress-login-report\mochawesome-report\mochawesome.json

[mochawesome] Report HTML saved to C:\Users\feito\Documents\PROJETOS\cypress-login-report\mochawesome-report\mochawesome.html


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     4 seconds                                                                        │
  │ Spec Ran:     test_login.cy.js                                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  test_login.cy.js                         00:04        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:04        2        2        -        -        -


------------------------------------------------------------------------------------------------------------------
**Relatório Imágem**

![Relatório Mochawesome](https://raw.githubusercontent.com/seu-usuario/cypress-login-report/main/mochawesome-preview.png)

```md
![Relatório Mochawesome](https://raw.githubusercontent.com/seu-usuario/cypress-login-report/main/mochawesome-preview.png)
```

---

## Tecnologias Utilizadas

- Cypress
- Mochawesome
- JavaScript
- Windows Batch Script

---

## Autor

José Feitoza  
QA Automation | Estudante e entusiasta de testes automatizados  
[LinkedIn](www.linkedin.com/in/josé-feitosa-jr-3997a12bb)

---

## Licença

Este projeto está disponível sob a licença MIT.
```

---

