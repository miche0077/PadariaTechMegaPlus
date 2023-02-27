let produtos = []

let valor

class ClaseRegistradora{
    
    constructor(codigoBarra, preco, nome){
        this.codigoBarra = Number(codigoBarra);
        this.preco = Number(preco);
        this.nome = String(nome);
        this.name = this.name
    }

    

    add(codigoBarra, preco, nome){
        if(codigoBarra && preco && nome){
           let newproduto = {
            codigoBarra,
            preco,
            nome,
        }
        return produtos.push(newproduto)
        }else{
        alert('todos os campos são obrigatorios')
        }
          
    }

    getProduto(codigoDeBarra){
        console.log(codigoDeBarra, produtos);
        return produtos.find(item=> item.codigoBarra === Number(codigoDeBarra))
    }

    init(){
        const name = prompt('digite o seu nome')

        alert(`Sr ${name} pode inserir o codigo de barra e a quantidade`)

        const codigoDeBarra = prompt("Codigo de barra=")

        const produto = this.getProduto(codigoDeBarra)

        if(produto){
            alert(`${produto.nome} seleccionado`)
            const quantidade = prompt("insira a quantidade")

            const valorTotal = this.valorTotal(quantidade, codigoDeBarra)

            alert(`o valor total é ${valorTotal}`)

        }else {
111
        }
    }

    valorTotal(quantidade, codigoDeBarra){
        const produto = this.getProduto(codigoDeBarra)
        return produto.preco * quantidade
    }
}

let registro = new ClaseRegistradora()

registro.add(1, 30, 'cambur')
registro.add(2, 10, 'manzana')
registro.add(3, 36, 'platano')
registro.add(4, 3, 'huevo')
registro.add(5, 35, 'leche')
registro.init()
