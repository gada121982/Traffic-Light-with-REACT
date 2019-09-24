


class ABC {

    constructor( a, b ){
        this.a = a ; 
        this.b = b ; 
    } ; 

    test(){
        console.log(this.a  , this.b); 
    }
    
}


var z = new ABC(1,2) ; 

z.test(); 