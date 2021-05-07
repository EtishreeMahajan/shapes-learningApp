class FirstPage {
    constructor() {
        this.button = createButton('DETAILS');
        this.button1 = createButton("BACK");
        this.button2 = createButton('BEGIN');
    }
    display() {
        this.button.position(610, 650);
        this.button1.position(385, 650);
        this.button2.position(130, 650);

        this.button.mousePressed(() => {
            firstPageGroup.setVisibleEach(false);
            firstPageNot.setVisibleEach(false);
            gameState = 0
        });
        this.button1.mousePressed(() => {
            firstPageGroup.setVisibleEach(true);
            firstPageNot.setVisibleEach(false);
            gameState = 2
        });
        this.button2.mousePressed(() => {
            gameState = 1
            firstPageGroup.setVisibleEach(false);
            firstPageNot.setVisibleEach(false);
        });
    }
}