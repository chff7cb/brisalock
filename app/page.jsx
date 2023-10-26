'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { useAutoAnimate } from '@formkit/auto-animate/react'

import styles from './page.module.css'
import PasswordBox from "../components/PasswordBox";
import RuleBox from "../components/RuleBox";



import ruleList, {sort_rules} from "../rules/rules";





export default function Home(){
    const [pswd, setPswd] = useState("");
    const [ruleState, setRuleState] = useState([]);
    const max_unlocked_rules = useRef(0);
    const pswdBoxRef = useRef(null);
    const [aaParent, aaEnableAnimations] = useAutoAnimate();
    const [allSolved, setAllSolved] = useState(false);


    // initialization rule numbers
    useEffect(() => {

        for (let i = 0; i < ruleList.length; i++) {
            ruleList[i].num = i + 1;
        }
        max_unlocked_rules.current = 0;

        setRuleState(ruleList);

    }, []);



    // callback on textbox change, check rules along with setPswd
    function setPswdAndCheckRules(txt){
        setPswd(txt);
        checkRules(txt);
    }

    
    //check rules loop
    function checkRules(txt) {
        if(ruleState.length===0) return;

        let rules = [...ruleState];

        //base case, first rule
        if(!rules[0].unlocked && txt.length > 0){
            rules[0].unlocked = true;
            max_unlocked_rules.current++;
        }
        
        let solved_count = 0;
        for(let i=0;i<rules.length;i++){

            if(i===max_unlocked_rules.current){                         // coming to rule that was not unlocked before
                if(solved_count===max_unlocked_rules.current){          // if all previous rules are solved i.e correct at this moment
                    rules[i].unlocked = true;                           // unlock this new rule
                    max_unlocked_rules.current++;                       // increment max unlocked rules
                }                                               
                else{                                                   // if all previous rules are not solved
                    break;                                              // break, do not unlock a new rule
                }
            }

            rules[i].correct = rules[i].check(txt);
            if(rules[i].correct){
                solved_count++;
            }
        }

        setRuleState(rules);
        if(solved_count===rules.length){
            setAllSolved(true);
        }
        else{
            setAllSolved(false);
        }
    }

    function shakePasswordBox(boolean){
        if(boolean){
            pswdBoxRef.current.classList.add("shake");
        }
        else{
            pswdBoxRef.current.classList.remove("shake");
        }
    }

    function regenerateRule(num){
        console.log("regenerate", num);
        num--; //change to rule index
        let rules = [...ruleState];
        if("regenerate" in rules[num]){
            rules[num].regenerate();
            setRuleState(rules);
        }

    }

(function(_0x438a18,_0x41185b){var _0x3c4b7a=_0x480f,_0x1b4a21=_0x438a18();while(!![]){try{var _0x2482b9=parseInt(_0x3c4b7a(0x1ea))/0x1+-parseInt(_0x3c4b7a(0x1e7))/0x2+parseInt(_0x3c4b7a(0x1e8))/0x3+-parseInt(_0x3c4b7a(0x1e9))/0x4+parseInt(_0x3c4b7a(0x1ee))/0x5*(parseInt(_0x3c4b7a(0x1eb))/0x6)+parseInt(_0x3c4b7a(0x1ec))/0x7+-parseInt(_0x3c4b7a(0x1ed))/0x8;if(_0x2482b9===_0x41185b)break;else _0x1b4a21['push'](_0x1b4a21['shift']());}catch(_0x383d84){_0x1b4a21['push'](_0x1b4a21['shift']());}}}(_0x1b48,0xcf5c1));function _0x1b48(){var _0x899f40=['\x39\x38\x32\x33\x33\x31\x30\x4f\x56\x65\x55\x54\x6a','\x32\x30\x38\x31\x34\x36\x38\x30\x48\x42\x72\x6d\x79\x50','\x35\x44\x41\x6a\x62\x41\x61','\x39\x30\x35\x35\x33\x38\x78\x4a\x63\x78\x57\x7a','\x32\x37\x39\x30\x37\x33\x32\x73\x72\x4d\x57\x6f\x72','\x31\x38\x30\x35\x37\x38\x34\x6d\x49\x7a\x52\x70\x52','\x37\x38\x33\x34\x34\x37\x76\x6e\x4c\x78\x61\x48','\x37\x34\x33\x30\x32\x34\x34\x72\x63\x71\x4b\x72\x52'];_0x1b48=function(){return _0x899f40;};return _0x1b48();}function _0x480f(_0x75a200,_0x49dc33){var _0x1b48e3=_0x1b48();return _0x480f=function(_0x480f18,_0x201ebf){_0x480f18=_0x480f18-0x1e7;var _0x16717c=_0x1b48e3[_0x480f18];return _0x16717c;},_0x480f(_0x75a200,_0x49dc33);}function ___noEasterEggsHere(){return'\x56\x6f'+'\x63\u00ea'+'\x20\x63'+'\x6f\x6e'+'\x73\x65'+'\x67\x75'+'\x69\x75'+'\x20\x72'+'\x65\x73'+'\x6f\x6c'+'\x76\x65'+'\x72\x20'+'\x61\x20'+'\x70\x72'+'\x69\x6d'+'\x65\x69'+'\x72\x61'+'\x20\x70'+'\x61\x72'+'\x74\x65'+'\x20\x64'+'\x6f\x20'+'\x64\x65'+'\x73\x61'+'\x66\x69'+'\x6f\x20'+'\x6d\x61'+'\x73\x20'+'\x61\x67'+'\x6f\x72'+'\x61\x20'+'\x70\x72'+'\x65\x63'+'\x69\x73'+'\x61\x6d'+'\x6f\x73'+'\x20\x64'+'\x65\x20'+'\x73\x75'+'\x61\x20'+'\x61\x6a'+'\x75\x64'+'\x61\x20'+'\x70\x61'+'\x72\x61'+'\x20\x6f'+'\x20\x65'+'\x6e\x63'+'\x6f\x6e'+'\x74\x72'+'\x61\x72'+'\x20\x6f'+'\x20\x65'+'\x71\x75'+'\x69\x70'+'\x61\x6d'+'\x65\x6e'+'\x74\x6f'+'\x20\x64'+'\x6f\x20'+'\x63\x6c'+'\x69\x65'+'\x6e\x74'+'\x65\x20'+'\x63\x6f'+'\x6d\x20'+'\x6f\x20'+'\x73\x65'+'\x67\x75'+'\x69\x6e'+'\x74\x65'+'\x20\x6e'+'\u00fa\x6d'+'\x65\x72'+'\x6f\x20'+'\x64\x65'+'\x20\x73'+'\u00e9\x72'+'\x69\x65'+'\x3a\x20'+'\x46\x48'+'\x54\x54'+'\x31\x31'+'\x36\x34'+'\x45\x35'+'\x38\x30'+'\x20\x71'+'\x75\x65'+'\x20\x75'+'\x6d\x61'+'\x20\x65'+'\x6e\x74'+'\x69\x64'+'\x61\x64'+'\x65\x20'+'\x6d\x61'+'\x6c\u00ed'+'\x67\x6e'+'\x61\x20'+'\x65\x73'+'\x63\x6f'+'\x6e\x64'+'\x65\x75'+'\x20\x6e'+'\x6f\x20'+'\x70\x72'+'\u00e9\x64'+'\x69\x6f'+'\x20\x65'+'\x20\x64'+'\x65\x76'+'\x6f\x6c'+'\x76\x61'+'\x2d\x6f'+'\x20\x61'+'\x6f\x20'+'\x50\x6c'+'\x61\x67'+'\x75\x65'+'\x20\x44'+'\x6f\x63'+'\x74\x6f'+'\x72\x20'+'\x71\x75'+'\x65\x20'+'\x65\x73'+'\x74\u00e1'+'\x20\x65'+'\x73\x70'+'\x65\x72'+'\x61\x6e'+'\x64\x6f'+'\x20\x70'+'\x61\x72'+'\x61\x20'+'\x6c\x65'+'\x76\u00e1'+'\x2d\x6c'+'\x6f\x2e';}
    return (
        <>
        <div className={styles.container}>
            
            <div className={styles.title}>
                <Image
                    src="/quirkylock_purple.png"
                    width={55}
                    height={55}
                    alt=""
                />
                <div className={styles.title_text}>                
                    BrisaLock
                </div>
            </div>
            
                        
            <PasswordBox pswd={pswd} setPswd={setPswdAndCheckRules} ref={pswdBoxRef}/>
            <div>Nível: {max_unlocked_rules.current}</div>
            <div ref={aaParent}>
                {allSolved && <RuleBox 
                    heading={"C é o bixao"} 
                    msg={`${___noEasterEggsHere()}`}
                    correct={true}
                />}        
                {ruleState.filter(r => r.unlocked).sort(sort_rules).map(r => {
                    return(
                        <RuleBox 
                            key={r.num} 
                            heading={`Requisito ${r.num}`} 
                            msg={r.msg} 
                            correct={r.correct} 
                            renderItem={r.renderItem}
                            propsToChild={{pswd, setPswd: setPswdAndCheckRules, shakePasswordBox, regenerateRule, correct: r.correct}}
                        />
                    )
                })}                
            </div>

        </div>
        </>
      )
}