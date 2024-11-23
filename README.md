# MovieApp Front-End

Este repositório contém o front-end do MovieApp, uma aplicação que permite aos usuários se registrarem, realizarem login, acessarem seus perfis e, para administradores, gerenciar usuários e permissões.

## Pré-requisitos

Antes de executar o front-end, certifique-se de que a **API MovieApp** está em execução na porta **8080**.

## Estrutura do Projeto

- **Cadastro de Usuário**  
  Página para registro de novos usuários.  
  Acesse: `/FORM-CADASTRO/index.html`

- **Login de Usuário**  
  Página para autenticação de usuários existentes.  
  Acesse: `/FORM-LOGIN/index.html`

- **Perfil do Usuário Logado**  
  Página onde o usuário pode visualizar e editar seus dados.  
  Acesse: `/PROFILE/profile.html`

- **Tela de Administração**  
  Página de administração onde administradores podem gerenciar usuários e permissões.  
  Acesse: `/ADMIN/admin.html`

## Instruções de Uso

1. **Clonar o repositório**  
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd movieapp-frontend
   ```

2. **Configurar a API MovieApp**  
   Certifique-se de que a API MovieApp está rodando localmente na porta **8080**.

3. **Abrir o projeto no navegador**  
   Use qualquer navegador moderno para abrir os arquivos HTML diretamente ou configure um servidor local.

4. **Fluxo de navegação**
   - **Cadastro**: Navegue até `/FORM-CADASTRO/index.html` para registrar um novo usuário.
   - **Login**: Navegue até `/FORM-LOGIN/index.html` para autenticar.
   - **Perfil**: Após realizar o login, acesse `/PROFILE/profile.html` para gerenciar seu perfil.
   - **Administração**: Caso tenha permissões de administrador, acesse `/ADMIN/admin.html` para gerenciar usuários.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Fetch API e Axios** para comunicação com o back-end

## Observações

- Certifique-se de que o token de autenticação está sendo gerado corretamente na API e enviado nos cabeçalhos de requisição para as páginas protegidas.
- Qualquer alteração na estrutura da API pode exigir ajustes no front-end.

## Contribuição

Se desejar contribuir com o projeto, faça um fork deste repositório, crie uma branch para sua feature ou correção e envie um pull request.

---

**Equipe MovieApp**