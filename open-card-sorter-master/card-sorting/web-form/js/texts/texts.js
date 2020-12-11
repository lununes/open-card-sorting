var texts = {
    appTitle: [ `Open Card Sorting` ],
    introTitle: [ `Vamos começar%userNameComma?` ],
    introText: [
        `Nesta atividade de card sorting, queremos entender melhor como você relaciona algumas informações para projetarmos uma experiência do usuário melhor.`,
        `Ela dura em torno de <b>10 a 15 minutos</b> para ser completada. É rapidinho e vai nos ajudar muito!`,
    ],
    introPreAuth: [
        `Para começar, como posso te chamar?`,
    ],
    start: [`Iniciar`],
    nameInputPlaceholder: [`Digite seu nome`],
    // googleConnectPlaceholder: [`Aguarde...`],
    googleAuthConnect: [ `Conectar com Google` ],
    googleAuthConnectAs: [ `Continuar como` ],
    googleAuthDisconnect: [ `Desconectar` ],
    sidebarTitle: [`Cartões`],
    sidebarSubtitle: [`%n de %n cartões agrupados.`],

    newCardGroup: [`Arraste para criar um novo grupo`],
    cardTopDivider: [`<strong>Topo</strong>: mais relevante`],
    cardBottomDivider: [`<strong>Fundo</strong>: menos relevante`],
    cardGroupTitlePlaceholder: [`Dê um nome ao grupo`],

    steps: [
        {
            title: [`Passo 1`],
            text: [
                `Observe os cartões ao lado, %userName. Cada ítem é um tema relacionado a questões ambientais, todos retirados de sites oficiais da área, como do MMA, IBAMA, ICMBio, SEAS e INEA.`,
                `Sua tarefa será organizar esses cartões em grupos que façam sentido para você.`,
                `Arraste um dos cartões para a direita para criar seu primeiro grupo.`
            ]
        },
        {
            title: [`Passo 2`],
            text: [
                `Mova os cartões ao lado até que todos estejam agrupados. Agrupe cartões que você considera relacionados. Você pode criar quantos grupos quiser, inclusive grupos com apenas 1 cartão!`,
                `Lembre-se, %userName: não tem certo ou errado. Você escolhe como organizar os cartões de acordo com o que fizer mais sentido para você!`
            ]
        },
        {
            title: [`Passo 3`],
            text: [
                `Revise os grupos criados e <strong>dê um nome para cada um</strong>. Pense em um título que represente os cartões contidos nele.`,
            ]
        },
        {
            title: [`Passo 4`],
            text: [
                `Certifique-se de ordenar os cartões mais relevantes para cima e os menos relevantes para baixo em cada grupo.`,
            ]
        },
        {
            title: [`Passo 5`],
            text: [
                `Parece que ficou bom, %userName! Dê uma revisada final e depois é só clicar em “Finalizar” ali em cima para terminar.`,
            ]
        }
    ],
    stepsRemainingTitle: [`Está faltando algum passo para você completar sua atividade`],
    stepsRemainingText: [`Verifique se você completou a tarefa abaixo:`],

    endingTitle: [ `Obrigada%userNameComma!` ],
    endingText: [
        `Prontinho! Sua atividade vai ajudar bastante na construção do nosso Observatório.`,
        `Muito obrigada pela participação! :)`,
    ],

    infoButton: [ `Instruções` ],
    finishButton: [ `Finalizar` ],
    resetButton: [ `Reiniciar` ],

    anonymousLabel: [ `Anônimo` ],

    alerts: {
        generic: {
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" }
            ]
        },
        steps: {
            title: [`Instruções`],
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" }
            ]
        },
        noKeys: {
            title: [`Código App Script não encontrado`],
            text: [
                'Verifique se você gerou o link corretamente e reinicie a página.'
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" }
            ]
        },
        noSheet: {
            title: [`Falha ao conectar`],
            text: [
                `Não foi possível acessar os dados para iniciar este card sorting. Verifique o link ou tente novamente atualizando a página.`,
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Tentar novamente`], action: "refresh" },
                { class: [`btn-secondary`], text: [`Fechar`], action: "close" },
            ]
        },
        saveFail: {
            title: [`Falha ao salvar atividade`],
            text: [
                `Não foi possível acessar o servidor.`,
                `Aguarde um pouco e tente novamente atualizando a página.`
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" },
                { class: [`btn-secondary`], text: [`Reiniciar`], action: "refresh" },
            ]
        },
    },
}
