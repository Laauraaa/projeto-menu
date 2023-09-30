//Desenvolvido por Laura Messias
var prompt = require('prompt-read')
var y = 0
console.clear()
menu()

function menu() {
    console.log('Bem-vindo(a) ao menu de navegação da Minha Farma. \nDigite o número do departamento que deseja navegar:  \n1-Medicamentos \n2-Itens de higiene \n3-Infantil')
    var departamento = prompt('')
    switch (departamento) {
        case '1':
            console.log('Você está no departamento de medicamentos, digite abaixo o número do item que deseja comprar:\n1-Analgésico\n2-Relaxante Muscular\n3-Antibiótico')
            
            var itemId = prompt('', 'number')
            var quantidade = prompt('Digite quantas unidades deseja comprar deste item: ')

            var produtos = {
                1: { nome: 'Analgésico', preco: 50 },
                2: { nome: 'Relaxante Muscular', preco: 30 },
                3: { nome: 'Antibiótico', preco: 80 }
             }

        break
        case '2':
            console.log('Você está no departamento de itens de higiene, digite abaixo o número do item que deseja comprar:\n1-Sabonete\n2-Shampoo\n3-Condicionador\n4-Escova dental\n5-Creme dental\n6-Fio dental\n7-Desodorante\n8-Enxaguante bucal')

            var itemId = prompt('', 'number')
            var quantidade = prompt('Digite quantas unidades deseja comprar deste item: ')
            
            var produtos = {
                1: { nome: 'Sabonete', preco: 2 },
                2: { nome: 'Shampoo', preco: 20 },
                3: { nome: 'Condicionador', preco: 25 },
                4: { nome: 'Escova dental', preco: 18 },
                5: { nome: 'Creme dental', preco: 5 },
                6: { nome: 'Fio dental', preco: 10 },
                7: { nome: 'Desodorante', preco: 16 },
                8: { nome: 'Enxaguante bucal', preco: 20 }

             }

        break
        case '3':
            console.log('Você está no departamento infantil, digite abaixo o número do item que deseja comprar:\n1-Fralda\n2-Lenço umedecido\n3-Pomada para assadura\n4-Talco\n5-Fórmula infantil')
            
            var itemId = prompt('', 'number')
            var quantidade = prompt('Digite quantas unidades deseja comprar deste item: ')

            var produtos = {
                1: { nome: 'Fralda', preco: 80 },
                2: { nome: 'Lenço umedecido', preco: 20 },
                3: { nome: 'Pomada para assadura', preco: 25 },
                4: { nome: 'Talco', preco: 15 },
                5: { nome: 'Fórmula infantil', preco: 65 }
                
             }
        break
    }
    if (itemId in produtos) {
        var item = produtos[itemId]
        var total = item.preco * quantidade
    
        console.log('Digite "prosseguir" para finalizar a compra ou "continuar" para selecionar outros itens')
        var resposta = prompt('')
    
        if (resposta == 'continuar') {
            y += total
            console.log('Total parcial: ' + y)
            menu() 
        } else if (resposta == 'prosseguir') {
            y += total
            console.log('O total a pagar é', y)

            console.log('Digite a forma de pagamento: ')
            var forma_pagamento = prompt('')

            console.log('Opções de entrega: \n1-Bom Princípio\n2-Granja Esperança\n3-Monte Carlo\n4-Morada do Vale 1\n5-Parque da Matriz\n6-Parque Ipiranga\n7-Vale do Sol\n8-Vista Alegre')
            var entregaId = prompt('Digite o número referente ao bairro que será realizada a entrega: ', 'number')
            var bairro = {
                1: { nome: 'Bom Princípio', valor: 6 },
                2: { nome: 'Granja Esperança', valor: 4 },
                3: { nome: 'Monte carlo', valor: 5 },
                4: { nome: 'Morada do Vale 1', valor: 3 },
                5: { nome: 'Parque da Matriz', valor: 6 },
                6: { nome: 'Parque Ipiranga', valor: 4 },
                7: { nome: 'Vale do Sol', valor: 6 },
                8: { nome: 'Vista Alegre', valor: 5 }
            }
            
            if (entregaId in bairro) {
                var endereco = prompt('Por favor, digite o nome da rua e o nome da casa: ')
                var entrega = bairro[entregaId]
                var valor_total = entrega.valor + y
                console.clear()
                console.log('Nota fiscal:\n')
                console.log(`Endereço: ${bairro[entregaId].nome}, ${endereco}
                \nValor de entrega: R$${entrega.valor},00
                \nModo de pagamento: ${forma_pagamento}
                \nTotal a pagar: R$${valor_total},00`)
                var end = prompt('\nPressione qualquer tecla para iniciar novamente...')
                console.clear()

                while (end != 'sair') {
                    menu()
                }
            }
            else {
                console.clear()
                console.log('Bairro inválido. Tente novamente.')
                menu()
            }
        }
      } else {
            console.log('Item não encontrado. Tente novamente.')
            menu()
      }
}
