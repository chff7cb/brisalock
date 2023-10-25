import { useRef } from 'react';
import Rule from "../Rule";
import styles from "./RuleRiddle.module.css";
import ReloadButton from '../../components/ReloadButton';


const riddles = [
    ["Eu posso ser de qualquer cor ou não ter cor nenhuma, as vezes estou vazio, as vezes estou cheio.", "copo"]
]


export default class RuleRiddle extends Rule{
    constructor(){
        super("A senha deve conter a resposta da seguinte charada:");

        this.riddleNum = Math.floor(Math.random()*riddles.length);
        this.renderItem = ({regenerateRule, correct}) => <Riddle riddleNum={this.riddleNum} regenerate={()=>regenerateRule(this.num)} correct={correct}/>
        // this.num is the rule number that is dynamically set later
    }

    regenerate(){
        this.riddleNum = Math.floor(Math.random()*riddles.length);
        console.log("Riddle:", riddles[this.riddleNum][1]);
    }

    check = (txt) => {
        let ans = riddles[this.riddleNum][1];
        let r = RegExp(`(?:${ans})`, "i");
        return r.test(txt);
    }
}

function Riddle({riddleNum, regenerate, correct}){
    const riddle = riddles[riddleNum][0];
    const reloadsLeft = useRef(3);

    return (
        <div className={styles.riddle_wrapper}>
            <div className={styles.riddle}>
                {riddle}
            </div>
            <ReloadButton 
                onClick={()=>{
                    if(reloadsLeft.current>0){
                        regenerate()
                        reloadsLeft.current--; 
                    }
                }} 
                hidden={correct} 
                reloadsLeft={reloadsLeft.current}
            />
        </div>
    )
}