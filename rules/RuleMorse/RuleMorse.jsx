import Rule from "../Rule";

const morse = {
    a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", 
    i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", 
    q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." 
}

export default class RuleMorse extends Rule{
    constructor(){
        super("A senha deve conter as três primeiras letras da senha em código morse. (Use . e -)");
    }

    check(txt){
        let letters = txt.match(/[A-Za-z]/g)?.slice(0, 3);
        if(letters?.length===3)
        {
            let code = `${morse[letters[0].toLowerCase()]} ${morse[letters[1].toLowerCase()]} ${morse[letters[2].toLowerCase()]}`;
            
            let exp = `${code}`;
            exp = exp.replaceAll(".", "\\.");
            let r = new RegExp(exp);
            return r.test(txt);
        }
        return false;
    }
}