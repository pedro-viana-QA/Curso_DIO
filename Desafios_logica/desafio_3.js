class heroi{
    constructor(nome,idade,tipo,ataque){
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo,
        this.ataque = ataque 
    }

    atacar(){
        switch(this.tipo){
            case 'mago': 
                this.ataque = "magia"
                break;
            case 'guerreiro':
                this.ataque = "espada"
                break;
            case 'monge':
                this.ataque = "artes marciais"
                break;
            case 'ninja':
                this.ataque = "shuriken"
                break;
            default:
                console.log("Você selecionou um tipo inválido inválida")
        }       
    }

    resultado(){
        console.log(`O heroi ${this.nome}, que tem ${this.idade} anos e é um ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let batalhaVelho = new heroi("Tibério", "88", "mago", "")
batalhaVelho.atacar()
batalhaVelho.resultado()
console.log("--------------")

let batalhaJovem = new heroi("Orácio", "33", "monge", "")
batalhaJovem.atacar()
batalhaJovem.resultado()
console.log("--------------")

let batalhaTroll = new heroi("Resmungo", "65", "guerreiro", "")
batalhaTroll.atacar()
batalhaTroll.resultado()
console.log("--------------")

let batalhaEpica = new heroi("Oninchu", "120", "ninja", "")
batalhaEpica.atacar()
batalhaEpica.resultado()