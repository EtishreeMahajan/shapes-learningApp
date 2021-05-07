class ThirdPage {
    constructor() {
        this.button4 = createButton("SEE");
        this.button5 = createButton("SEE");
        this.button6 = createButton("SEE");
        this.button7 = createButton("SEE");
        this.button47 = createButton("Back");
    }
    display() {
        this.button4.position(620, 130);
        this.button5.position(620, 170);
        this.button6.position(620, 210);
        this.button7.position(620, 250);
        this.button47.position(120, 90);

        this.button4.mousePressed(() => {
            if (gameState == 3) {
                gameState = 8;
            }
        });
        this.button5.mousePressed(() => {
            if (gameState == 3) {
                gameState = 9;
            }
        });
        this.button6.mousePressed(() => {
            if (gameState == 3) {
                gameState = 10;
            }
        });
        this.button7.mousePressed(() => {
            if (gameState == 3) {
                gameState = 11;
            }
        });
        this.button47.mousePressed(() => {
            if(gameState != 2 && gameState != 0)
            gameState = 1;
            firstPageNot.setVisibleEach(false);
        });
    }
}