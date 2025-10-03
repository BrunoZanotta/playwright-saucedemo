# Automação de Testes de UI com Playwright

Este projeto contém uma suíte de testes automatizados de interface de usuário (UI) para a aplicação web [Sauce Demo](https://www.saucedemo.com/), desenvolvida com foco na validação de jornadas críticas do usuário, funcionalidades e componentes visuais.

---

## Arquitetura e Estrutura de Pastas

O projeto segue uma estrutura padrão para automação com Playwright, utilizando o padrão Page Object Model (POM) para garantir a organização, reutilização de código e fácil manutenção.

    playwright-saucedemo/
    │
    ├── .github/
    │   └── workflows/
    │       └── ci-pipeline.yml         
    │── .vscode
    │   └── settings.json    
    ├── features/
    │   ├── e2e/                        
    │   │   └── purchase.feature            
    │   │   └── login.feature
    │   └── support/                     
    │       └── hooks.ts
    │       └── world.ts
    ├── pages/                          
    │   ├── LoginPage.ts
    │   └── InventoryPage.ts
    │   └── CheckoutPage.ts
    │   └── CartPage.ts
    ├── steps/                          
    │   ├── loginSteps.ts
    │   └── purchaseSteps.ts
    │
    ├── .gitignore
    ├── allure-results/                 
    ├── allure-report/                             
    │── cucumber.js
    ├── package-lock.json
    ├── package.json
    ├── playwright.config.ts            
    ├── reporter.cjs
    ├── tsconfig.json                      
    └── README.md     

---

## Tecnologias e Versões Utilizadas

* **Linguagem:** TypeScript `5.5.3`
* **Framework de Teste:** Playwright `1.45.0`
* **Gerenciador de Pacotes:** Node.js / npm
* **Relatórios:** Allure Report `2.29.0`
* **CI/CD:** GitHub Actions

---

## Pré-requisitos e Instalação

### Pré-requisitos

Para executar este projeto localmente, você precisará ter instalado:
1.  **Node.js (versão LTS):** [Download via Nodejs.org](https://nodejs.org/)
2.  **Allure Commandline:** Para visualizar os relatórios localmente. [Guia de Instalação](https://allurereport.org/docs/gettingstarted-installation-commandline/)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone git@github.com:BrunoZanotta/playwright-saucedemo.git
    cd playwright-saucedemo
    ```

2.  Instale as dependências do projeto (que incluem o Playwright):
    ```bash
    npm install
    ```

3.  Baixe os navegadores que o Playwright utilizará para os testes:
    ```bash
    npx playwright install
    ```

---

## Execução dos Testes

### Execução Local

Você pode executar os testes usando os comandos do Playwright. Os resultados do Allure serão gerados na pasta `allure-results`.

* **Executar todos os testes (headless):**
    ```bash
    npm run test:e2e 
    ```

### Visualizando o Relatório Localmente

Após executar qualquer um dos comandos acima, você pode gerar e abrir o relatório HTML do Allure:

1.  **Gere o relatório:**
    ```bash
    allure generate allure-results --clean -o allure-report
    ```

2.  **Abra o relatório no seu navegador:**
    ```bash
    allure serve allure-results
    ```

### Execução via CI/CD (GitHub Actions)

A pipeline é acionada automaticamente a cada `push` na branch `main`. Ela executa os testes na seguinte sequência:
1.  **Setup Environment** (Instala Node.js)
2.  **Install Dependencies** (Roda `npm install` e `npx playwright install`)
3.  **Run UI Tests**
4.  **Generate Allure Report**

Ao final da execução, um relatório unificado do Allure é gerado e publicado. Você pode acessá-lo através do link disponível na aba **Actions** do repositório ou diretamente na página do GitHub Pages do projeto:

[**https://github.com/BrunoZanotta/playwright-saucedemo**](https://github.com/BrunoZanotta/playwright-saucedemo)
                 