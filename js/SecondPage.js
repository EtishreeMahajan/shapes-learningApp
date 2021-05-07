class SecondPage {
    constructor() {
        this.button3 = createButton("CLICK");
        this.button8 = createButton("CLICK");
        this.button17 = createButton("CLICK");
        this.button28 = createButton("CLICK");
        this.button33 = createButton("CLICK");
    }
    display() {
        this.button3.position(620, 135);
        this.button8.position(620, 175);
        this.button17.position(620, 215);
        this.button28.position(620, 255);
        this.button33.position(620, 295);

        this.button3.mousePressed(() => {
            if (gameState == 1) {
                gameState = 3;
            }
        });

        this.button8.mousePressed(() => {
            if (gameState == 1) {
                gameState = 4;
            }
        });

        this.button17.mousePressed(() => {
            if (gameState == 1) {
                gameState = 5;
            }
        });

        this.button28.mousePressed(() => {
            if (gameState == 1) {
                gameState = 6;
            }
        });

        this.button33.mousePressed(() => {
            if (gameState == 1) {
                gameState = 7;
            }
        });
    }
}