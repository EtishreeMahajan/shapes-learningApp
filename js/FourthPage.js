class FourthPage {
    constructor() {
        this.button9 = createButton("SEE");
        this.button10 = createButton("SEE");
        this.button11 = createButton("SEE");
        this.button12 = createButton("SEE");
        this.button13 = createButton("SEE");
        this.button14 = createButton("SEE");
        this.button15 = createButton("SEE");
        this.button16 = createButton("SEE");
        this.button48 = createButton("Back");

    }
    display() {
        this.button9.position(620, 130);
        this.button10.position(620, 170);
        this.button11.position(620, 210);
        this.button12.position(620, 250);
        this.button13.position(620, 290);
        this.button14.position(620, 330);
        this.button15.position(620, 370);
        this.button16.position(620, 410);
        this.button48.position(120, 90);

        this.button9.mousePressed(() => {
            if (gameState == 4) {
                gameState = 12;
            }
        });
        this.button10.mousePressed(() => {
            if (gameState == 4) {
                gameState = 13;
            }
        });
        this.button11.mousePressed(() => {
            if (gameState == 4) {
                gameState = 14;
            }
        });
        this.button12.mousePressed(() => {
            if (gameState == 4) {
                gameState = 15;
            }
        });
        this.button13.mousePressed(() => {
            if (gameState == 4) {
                gameState = 16;
            }
        });
        this.button14.mousePressed(() => {
            if (gameState == 4) {
                gameState = 17;
            }
        });
        this.button15.mousePressed(() => {
            if (gameState == 4) {
                gameState = 18;
            }
        });
        this.button16.mousePressed(() => {
            if (gameState == 4) {
                gameState = 19;
            }
        });
        this.button48.mousePressed(() => {
            if(gameState != 2 && gameState != 0)
            gameState = 1;
            firstPageNot.setVisibleEach(false);
        });
    }
}