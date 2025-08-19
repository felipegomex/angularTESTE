# Monitoramento de Importações

## Visão Geral

O módulo de **Monitoramento de Importações** é uma solução completa para acompanhamento em tempo real das importações realizadas em múltiplos servidores. Foi desenvolvido para atender às necessidades da equipe de suporte, proporcionando visibilidade centralizada e facilitando ações preventivas e corretivas.

## Funcionalidades Principais

### 📊 Dashboard de Métricas
- **Total de Importações**: Contador geral de importações processadas
- **Status de Sucessos**: Importações concluídas com sucesso
- **Alertas de Erros**: Importações que falharam (com destaque visual)
- **Warnings**: Importações com problemas não críticos
- **Métricas Financeiras**: Valor total importado e quantidade de registros
- **Status dos Servidores**: Monitoramento em tempo real dos 5 servidores

### 🔍 Sistema de Filtros Avançados
- **Por Servidor**: Filtrar importações por servidor específico
- **Por Empresa**: Busca textual por nome da empresa
- **Por Status**: Filtrar por sucesso, erro, warning ou processando
- **Por Período**: Filtros de data início e fim
- **Limpeza Rápida**: Botão para limpar todos os filtros

### 📋 Tabela Detalhada
Exibe todas as informações conforme especificação:
- ID da importação
- Data/hora de início e fim
- Tempo de execução (com destaque para tempos elevados)
- Empresa e contratante
- Nome do arquivo importado
- Quantidade de registros (destaque para zero registros)
- Valor importado
- Quantidade de pagamentos
- Servidor de origem
- Status com ícones visuais
- Observações (com tooltip para textos longos)

### ⚡ Atualização Automática
- **Horário Ativo**: 06h às 09h (conforme especificação)
- **Frequência**: A cada 5 minutos
- **Indicador Visual**: Badge mostrando se o monitoramento está ativo
- **Atualização Manual**: Botão para forçar atualização

### 📤 Exportação de Relatórios
- **Formato CSV**: Exportação dos dados filtrados
- **Nome Automático**: Arquivo nomeado com data atual
- **Indicador de Progresso**: Loading durante a exportação

## Critérios de Destaque de Erros

### 🚨 Erros Críticos (Vermelho)
- Campo OBSE preenchido com mensagens de erro
- Quantidade de registros igual a zero
- Status "erro" na importação
- Animação de pulso para chamar atenção

### ⚠️ Warnings (Laranja)
- Tempo de execução acima do normal (60+ minutos)
- Status "warning" na importação
- Mensagens de alerta no campo observações

### ✅ Sucessos (Verde)
- Importações concluídas sem problemas
- Servidores online e funcionando

## Servidores Monitorados

| Nome | IP | Status |
|------|----|---------| 
| COBTEC | 192.168.15.206 | Online |
| COBTEC CAEDU | 192.168.15.198 | Online |
| INNOVATECH | 192.168.0.203 | Warning |
| INNOVATECH 2 | 192.168.0.235 | Online |
| INNOVATECH CAEDU | 192.168.0.225 | Offline |

## Tecnologias Utilizadas

- **Frontend**: Angular 17+ com Standalone Components
- **UI Framework**: Angular Material
- **Estilização**: SCSS com design responsivo
- **Gerenciamento de Estado**: RxJS com BehaviorSubject
- **Formatação**: Intl API para moeda e números brasileiros

## Estrutura de Arquivos

```
src/app/monitoramento-importacoes/
├── monitoramento-importacoes.component.ts      # Componente principal
├── monitoramento-importacoes.component.html    # Template HTML
├── monitoramento-importacoes.component.scss    # Estilos SCSS
├── monitoramento-importacoes.component.spec.ts # Testes unitários
└── monitoramento-importacoes.service.ts        # Serviço de dados
```

## Como Acessar

1. **URL**: `/monitoramento-importacoes`
2. **Menu**: Adicionar link no menu lateral da aplicação
3. **Permissões**: Restrito à equipe de suporte (conforme especificação)

## Responsividade

A interface é totalmente responsiva e se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout completo com todas as colunas
- **Tablet**: Ajustes nos cards de métricas
- **Mobile**: Tabela com scroll horizontal e cards empilhados

## Próximos Passos

### Integração com API Real
Atualmente o sistema usa dados simulados. Para produção:

1. **Substituir o serviço mock** por chamadas HTTP reais
2. **Configurar endpoints** da API REST
3. **Implementar autenticação** se necessário
4. **Configurar interceptors** para tratamento de erros

### Melhorias Futuras
- **Notificações Push**: Alertas em tempo real para erros críticos
- **Gráficos**: Visualizações de tendências e estatísticas
- **Histórico**: Armazenamento de dados históricos
- **Relatórios Avançados**: Exportação em Excel com gráficos

## Suporte

Para dúvidas ou problemas relacionados ao Monitoramento de Importações, entre em contato com a equipe de desenvolvimento da JCA Soluções.

---

*Desenvolvido por JCA Soluções - Sistema de Monitoramento de Importações v1.0*