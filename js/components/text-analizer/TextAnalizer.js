class TextAnalizer {
    constructor(text){
        this.text = text;
        this.abc = {
            en: {
                lowercase: 'qwertyuiopasdfghjklzxcvbnm',
                uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',

            },

            lt: {
                lowercase: 'ąčęėįšųūž',
                uppercase: 'ĄČĘĖĮŠŲŪŽ',
            },
        };
        this.uppercaseEnabled = true;
        this.lowercaseEnabled = true;
        this.languages = [];
        this.finalAbc = '';

        this.addLanguage('en');
    }

    addLanguage(newLang) {
        if (this.abc[newLang]) {
        this.languages.push(newLang);
        console.log(this.languages)

        let text ='';
        for (let lang of this.languages) {
            if (this.lowercaseEnabled) {
                text += this.abc[lang].lowercase;
            }
            if(this.uppercaseEnabled) {
                text += this.abc[lang].uppercase;
            }
        }

        this.finalAbc = text;


        
        } else {
            console.error (`ERROR: ${newLang} kalba nerasta`);
        }

    }
    letterCount(){
        let count = 0;

        for (let letter of this.text){
            if ( this.finalAbc.includes(letter) ) {
                count++
            }
        }

       return count;
    }

}

export {TextAnalizer}