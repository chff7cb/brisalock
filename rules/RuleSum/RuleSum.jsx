import Rule from "../Rule";


export default class RuleSum extends Rule{
    constructor(){
        super("Os dígitos da senha somados devem ser igual a ");
        this.target = 91;
        this.renderItem = () => <span>{this.target}.</span>
    }

    check = (txt) => {
        let s = (txt.match(/-?\d/g)?.map(x => +x).reduce((acc, v) => acc+v, 0));
        return s === this.target;
    }
}