class SeventhPage {
    constructor() {
        this.button34 = createButton("SEE");
        this.button35 = createButton("SEE");
        this.button36 = createButton("SEE");
        this.button37 = createButton("SEE");
        this.button38 = createButton("SEE");
        this.button39 = createButton("SEE");
        this.button40 = createButton("SEE");
        this.button41 = createButton("SEE");
        this.button51 = createButton("BACK");
    }
    display() {
        this.button34.position(620, 130);
        this.button35.position(620, 170);
        this.button36.position(620, 210);
        this.button37.position(620, 250);
        this.button38.position(620, 290);
        this.button39.position(620, 330);
        this.button40.position(620, 370);
        this.button41.position(620, 410);
        this.button51.position(120, 90);

        this.button34.mousePressed(() => {
            if (gameState == 7) {
                gameState = 34;
            }
        });
        this.button35.mousePressed(() => {
            if (gameState == 7) {
                gameState = 35;
            }
        });
        this.button36.mousePressed(() => {
            if (gameState == 7) {
                gameState = 36;
            }
        });
        this.button37.mousePressed(() => {
            if (gameState == 7) {
                gameState = 37;
            }
        });
        this.button38.mousePressed(() => {
            if (gameState == 7) {
                gameState = 38;
            }
        });
        this.button39.mousePressed(() => {
            if (gameState == 7) {
                gameState = 39;
            }
        });
        this.button40.mousePressed(() => {
            if (gameState == 7) {
                gameState = 40;
            }
        });
        this.button41.mousePressed(() => {
            if (gameState == 7) {
                gameState = 41;
            }
        });
        this.button51.mousePressed(() => {
            if(gameState != 2 && gameState != 0)
            gameState = 1;
            firstPageNot.setVisibleEach(false);
        });
    }
}