class TWriter {
    constructor(element) {
        this.element = element;
        this.duration = parseInt(element.dataset.twrDuration) || 2000;
        this.txt = element.innerHTML.replace(/\n/g, '').replace(/<br[^>]*>/gi, '\n');
        this.written = 0;
        this.timePerLetter = Math.floor(this.duration/this.txt.length);
        element.innerHTML = '';
        
    }
    async start() {
        for (let i = 0; i < this.txt.length; i++) {
            await this.writeLetter();
        }
    }
    writeLetter() {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                if (this.written >= this.txt.length) {
                    reject();
                } else {
                    let letter = this.txt[this.written++];
                    if(letter == '\n') {
                        letter = '<br>'
                    }
                    this.element.innerHTML += letter;
                    resolve();
                }
            }, this.timePerLetter);
        } )
    }
}
