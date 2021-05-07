class FifthPage {
    constructor() {
        this.button18 = createButton("SEE");
        this.button19 = createButton("SEE");
        this.button20 = createButton("SEE");
        this.button21 = createButton("SEE");
        this.button22 = createButton("SEE");
        this.button23 = createButton("SEE");
        this.button24 = createButton("SEE");
        this.button25 = createButton("SEE");
        this.button26 = createButton("SEE");
        this.button27 = createButton("SEE");
        this.button49 = createButton("Back");
    }
    display() {
        this.button18.position(620, 130);
        this.button19.position(620, 170);
        this.button20.position(620, 210);
        this.button21.position(620, 250);
        this.button22.position(620, 290);
        this.button23.position(620, 330);
        this.button24.position(620, 370);
        this.button25.position(620, 410);
        this.button26.position(620, 450);
        this.button27.position(620, 490);
        this.button49.position(120, 90);

        this.button18.mousePressed(() => {
            if (gameState == 5) {
                gameState = 20;
            }
        });
        this.button19.mousePressed(() => {
            if (gameState == 5) {
                gameState = 21;
            }
        });
        this.button20.mousePressed(() => {
            if (gameState == 5) {
                gameState = 22;
            }
        });
        this.button21.mousePressed(() => {
            if (gameState == 5) {
                gameState = 23;
            }
        });
        this.button22.mousePressed(() => {
            if (gameState == 5) {
                gameState = 24;
            }
        });
        this.button23.mousePressed(() => {
            if (gameState == 5) {
                gameState = 25;
            }
        });
        this.button24.mousePressed(() => {
            if (gameState == 5) {
                gameState = 26;
            }
        });
        this.button25.mousePressed(() => {
            if (gameState == 5) {
                gameState = 27;
            }
        });
        this.button26.mousePressed(() => {
            if (gameState == 5) {
                gameState = 28;
            }
        });
        this.button27.mousePressed(() => {
            if (gameState == 5) {
                gameState = 29;
            }
        });
        this.button49.mousePressed(() => {
            if(gameState != 2 && gameState != 0)
            gameState = 1;
            firstPageNot.setVisibleEach(false);
        });
    }
}
