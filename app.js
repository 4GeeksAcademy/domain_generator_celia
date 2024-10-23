
let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'pink'];
let noun = ['jogger', 'racoon', 'box'];


for (let ad of adj) {
    for (let pro of pronoun) {
        for( let name of noun){
            console.log(ad+pro+name+'.com')
        }
    }

}