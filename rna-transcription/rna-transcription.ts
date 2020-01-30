export type dnaTypes = 
    | 'A'
    | 'C'
    | 'G'
    | 'T';

class Transcriptor {
    private dnaToRnaMapper: Map<string, string>;
    constructor() {
        this.dnaToRnaMapper = new Map<dnaTypes, string>();
        this.dnaToRnaMapper.set('A', 'U');
        this.dnaToRnaMapper.set('C', 'G');
        this.dnaToRnaMapper.set('G', 'C');
        this.dnaToRnaMapper.set('T', 'A');
    }

    toRna(rna: string): string {
        let convertedRna: string = '';
        for(let i = 0; i < rna.length; i++) {
          if (!this.dnaToRnaMapper.has(rna[i])) {
            throw new Error("Invalid input DNA.");
          }
          convertedRna += this.dnaToRnaMapper.get(rna[i]);
        }
        return convertedRna;
    }
}

export default Transcriptor