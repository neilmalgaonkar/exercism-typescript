class Pangram {
    private statement: string = '';
    private validChars: string[] = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];
    
    constructor(statement: string) {
        this.statement = statement;
    }

    isPangram(): boolean {
        const statementLength = this.statement.length;
        for(let i = 0; i < statementLength; i++) {
            const char = this.statement[i].toLowerCase();
            const indexOf = this.validChars.indexOf(char);
            if (indexOf > -1) {
                this.removeChar(indexOf);
            }
        }
        return (this.validChars.length) ? false : true;
    }

    removeChar(index: number): void {
        this.validChars.splice(index, 1);
    }
}

export default Pangram;