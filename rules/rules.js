import Rule from "./Rule";
import RuleWordle from "./RuleWordle/RuleWordle";
import RuleSlidingPuzzle from "./RuleSlidingPuzzle/RuleSlidingPuzzle";
import RuleMorse from "./RuleMorse/RuleMorse";
import RuleRiddle from "./RuleRiddle/RuleRiddle";
import RuleLocation from "./RuleLocation/RuleLocation";
import RuleTimeEmoji from "./RuleTimeEmoji/RuleTimeEmoji";
import RuleQR from "./RuleQR/RuleQR";
import RuleSum from "./RuleSum/RuleSum";
import RuleEarthquake from "./RuleEarthquake/RuleEarthquake";


var rules = [
    new Rule(
        "A senha deve conter no mínimo 6 caracteres.",
        (t) => t?.length >= 6
    ),
    new Rule(
        "A senha deve conter uma letra maiúscula e uma minúscula.",
        (t) => (/[A-Z]/.test(t) && /[a-z]/.test(t))
    ),
    new Rule(
        "A senha deve conter um caractere especial.",
        (t) => /\W/.test(t)
    ),
    new Rule(
        "A senha deve conter um número negativo.",
        (t) => /-\d/.test(t)
    ),
    new Rule(
        "A senha deve conter todas as vogais do alfabeto.",
        (t) => /a/i.test(t) && /e/i.test(t) && /i/i.test(t) && /o/i.test(t) && /u/i.test(t)
    ),
    new Rule(
        "A senha deve conter um número primo de dois dígitos.",
        (t) => /(?:11)|(?:13)|(?:17)|(?:19)|(?:23)|(?:29)|(?:31)|(?:37)|(?:41)|(?:43)|(?:47)|(?:53)|(?:59)|(?:61)|(?:67)|(?:71)|(?:73)|(?:79)|(?:83)|(?:89)|(?:97)/.test(t)
    ),
    new RuleSum(),
    new Rule(
        "A senha deve conter o nome da \"fonte de energia de uma célula\". (Sem acentos) \u{1F9A0}", //&#x1F9A0;
        (t) => /(?:mitocondria)|(?:mitocondrias)/i.test(t)
    ),
    new Rule(
        "A senha deve conter o nome de um continente. (Sem acentos)",
        (t) => /asia|europa|africa|australia|oceania|america do norte|america do sul|antarctica/i.test(t)
    ),
    new Rule(
        "A senha deve conter o valor de π (Pi) com suas 5 primeiras casas decimais.",
        (t) => /(?:3\.14159)/.test(t)
    ),    
    
    // new RuleTimeEmoji(),
    // new RuleWordle(),
    new RuleEarthquake(),
    new RuleQR(),
    new RuleMorse(),
    new RuleLocation(),
    new RuleRiddle(),
    // new Rule(
    //     "A senha deve conter a mesma quantidade de vogais e consoantes.",
    //     (t) => (t.match(/[aeiou]/ig) || []).length === (t.match(/[bcdfghjklmnpqrstvxs]/ig) || []).length
    // ),
    new RuleSlidingPuzzle(),
    new Rule(
        "A senha deve conter o numero de caracteres da senha.",
        (t) => {
            let l = t.length;
            let r = new RegExp(`${l}`);
            return r.test(t);
        }
    )
];

function sort_rules(a, b){
    if(a.correct == b.correct){
        return b.num - a.num;
    }
    else if(!a.correct && b.correct){
        return -1;
    }
    else{
        return 1;
    }
}

export default rules;
export {sort_rules};