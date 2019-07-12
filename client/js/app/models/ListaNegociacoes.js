class ListaNegociacoes {
    
    constructor(armadilha) {
        
        this._negociacoes = [];
        this._armadilha = armadilha;
     
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        // //apply é um método estático de apply, que permite trocar o contexto do this. Primeiro, recebe o método que vc quer chamar, segundo qual vai ser o this da função e terceiro, os parâmetros, através de um array 
        // Reflect.apply(this._armadilha, this._contexto, [this]);  
        this._armadilha(this);
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        // Reflect.apply(this._armadilha, this._contexto, [this]);
        this._armadilha(this);
    }
}