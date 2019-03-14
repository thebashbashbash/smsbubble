import React from 'react'
import Classes from './imessage.module.css'

const IMessage = () =>{
    return (
        <div className={Classes.chat}>
            <div className={[Classes.mine, Classes.messages].join(' ')}>
                <div className={[Classes.message, Classes.last].join(' ')}>
                    Godmorgon habibi!! <span role="img" aria-label="Heart">❤️</span>
                </div>
            </div>
            <div className={[Classes.yours, Classes.messages].join(' ')}>
                <div className={Classes.message}>
                    Godmorgon habibi <span role="img" aria-label="Kiss">😘</span>, har du sovit gott? Jag ligger fortfarande i sängen och tänker på dig!
                </div>
                <div className={Classes.message}>
                    Vill du gå på impro-teater? Jag fick sån lust till det idag!
                </div>
                <div className={[Classes.message, Classes.last].join(' ')}>
                    Förresten, jag har köpt massa kläder i färg!
                </div>
            </div>
            <div className={[Classes.mine, Classes.messages].join(' ')}>
                <div className={Classes.message}>
                    Habibi, du är så flink!!!
                </div>
                <div className={[Classes.message, Classes.last].join(' ')}>
                    Jag älskar dig mer än allt annat, du är det finaste jag har
                </div>
            </div>
        </div>
    );
}

export default IMessage;