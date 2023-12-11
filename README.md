#  **Porkin** - Sistema de Gestão Financeira Coletiva 

**Projeto:** Porkin - Controle de gestão financeira coletiva.  

**Membros:** Felipe dos Santos Bento, Lauri Ellen Santinelli Biral e Mariana Parducci. 

**Tecnologia Front End:** React Native.  

**Tecnologias Back End:** Java, Ruby on Rails. 

## Resumo Sistema de Gestão Financeira Coletiva:

<p style="text-align:justify;">O aplicativo Porkin foi desenvolvido para simplificar o controle financeiro compartilhado em residências. Com esta plataforma, os usuários podem facilmente administrar as finanças coletivas do lar de forma eficiente. Iniciar a gestão é simples: um membro do grupo cria uma unidade familiar e pode adicionar até três integrantes gratuitamente. Cada participante obtém sua própria seção para administrar suas finanças pessoais, a qual também é acessível aos outros membros do grupo. Notificações bancárias das transações realizadas por qualquer usuário são lidas e ele poderá escolher se deseja ou não adicionar o valor no registro coletivo.</p>

<p style="text-align:justify;">Uma característica fundamental do Porkin é a capacidade de categorizar cada transação. Por exemplo, um gasto de R$15 em um Pet Shop pode ser devidamente categorizado, tornando mais claro o destino dos recursos. Ao acumular informações de compra e venda, o aplicativo proporciona uma visão aprofundada das despesas de cada membro e do grupo como um todo. Essa abordagem auxilia a identificar padrões de gastos e oportunidades de economia.</p>

<p style="text-align:justify;">Para a análise geral, o aplicativo apresenta uma aba dedicada ao extrato das transações do grupo, promovendo uma visão panorâmica e abrangente das finanças coletivas. Através dessa funcionalidade, os usuários podem monitorar o fluxo de dinheiro de maneira mais ampla e tomar decisões informadas para a gestão financeira geral do lar.</p>  

* **Público Alvo:** 

<p style="text-align:justify;">O Porkin é direcionado a famílias e grupos residenciais que desejam otimizar seu controle financeiro coletivo. Ele é especialmente útil para famílias numerosas, casas compartilhadas, e grupos que buscam manter um registro organizado das despesas conjuntas.</p>

* **Principais Dores Resolvidas pelo Projeto:** 

    <p style="text-align:justify;">1- Desafio no Controle Financeiro Coletivo:  O projeto atende à necessidade de famílias e grupos residenciais que enfrentam dificuldades na administração de finanças compartilhadas. Com o Porkin, as complexidades do gerenciamento conjunto são simplificadas. </p>

    <p style="text-align:justify;">2- Falta de Transparência: Muitas vezes, a falta de clareza nas transações e gastos compartilhados pode gerar conflitos. O aplicativo resolve esse problema ao permitir a categorização detalhada das transações, garantindo uma visão transparente das despesas.</p>

    <p style="text-align:justify;">3- Conflitos de comunicação: Com dados claros e a opção de adicionar transações no registro coletivo, o aplicativo ajuda a prevenir conflitos resultantes de despesas não comunicadas ou mal compreendidas.</p>

    <p style="text-align:justify;">4- Monitoramento Simplificado: A funcionalidade de extrato das transações oferece uma visão geral e panorâmica das finanças coletivas, facilitando o monitoramento do fluxo de dinheiro e permitindo ajustes conforme necessário.</p>

    <p style="text-align:justify;">Em síntese, o Porkin é uma ferramenta eficaz para aliviar os desafios do controle financeiro compartilhado, oferecendo uma abordagem estruturada e transparente para gerenciar as finanças de famílias e grupos residenciais.</p>

* **Formas de Monetização:**  

    * Possibilidade de adicionar mais de 4 membros: Pagamento de Taxa (R$9,90).

    * Possibilidade de se tornar um membro PRO: sem anúncios, criar mais do que 2 grupos e adicionar mais de 4 membros (R$4,00/mês).

## Requisitos da primeira versão (MVP): 

* Os usuários devem ser capazes de criar contas de usuário com informações básicas, como nome e senha. 

* Usuários podem registrar suas despesas pessoais, incluindo o valor da despesa, categoria e descrição. 

* O aplicativo disponibiliza uma lista de despesas pré-definidas, como planos de assinaturas de streaming e outros serviços, que os usuários podem selecionar em vez de digitar manualmente os valores. Isso simplifica o processo de registro de despesas e agiliza a inserção de informações financeiras.  

* Os usuários podem criar grupos personalizados, definindo um nome e uma descrição para o grupo. 

    * Os usuários podem adicionar outros membros ao grupo, convidando-os através de e-mail ou nome de usuário. 

    * Quando um membro registra uma despesa, ele tem a possibilidade de compartilhar com o grupo para acompanhamento. 

* Permitir que os usuários definam níveis de acesso aos detalhes dos gastos e outros membros do grupo.

* Criar uma interface simples e fácil de usar, com design responsivo para dispositivos móveis.

* Enviar notificações quando novos gastos forem registrados ou houver atualizações importantes no grupo.

* O aplicativo se integra às APIs dos bancos para receber notificações de transações financeiras, como compras, transferências e pagamentos. 

    * O aplicativo lê as notificações recebidas do banco e identifica as informações relevantes, como valor, data, categoria de gasto e descrição. 
    
<br>

## Diagrama de casos de uso:
<br>    
<picture>
<source media="(prefers-color-scheme: dark)" srcset="documentation/use-cases-dark.drawio.svg" />
<source media="(prefers-color-scheme: light)" srcset="documentation/use-cases-light.drawio.svg" />
 <img width="100%">
</picture>

<br>
<br>

## Modelo conceitual:
<br>
<picture>
<source media="(prefers-color-scheme: dark)" srcset="documentation/concept-model-dark.drawio.svg" />
<source media="(prefers-color-scheme: light)" srcset="documentation/concept-model-light.drawio.svg" />
<img width="100%">
</picture>

<br>

## Protótipo em baixa fidelidade:
<br>
<picture>
<source media="(prefers-color-scheme: dark)" srcset="documentation/Prototype.png" />
<source media="(prefers-color-scheme: light)" srcset="documentation/Prototype.png" />
<img width="30%">
</picture>


