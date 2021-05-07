class EighthPage {
    constructor() {
        this.button42 = createButton('QUIZ ON SHAPES');
        this.button43 = createButton('NEXT');
        this.button44 = createButton('NEXT');
        this.button45 = createButton('NEXT');
        this.button46 = createButton('NEXT');
        this.input1 = createInput("CHOOSE YOUR OPTION");
        this.input2 = createInput("CHOOSE YOUR OPTION");
        this.input3 = createInput("CHOOSE YOUR OPTION");
        this.input4 = createInput("CHOOSE YOUR OPTION");
        this.input5 = createInput("CHOOSE YOUR OPTION");
        this.button47 = createButton('SUBMIT');
        this.button48 = createButton('SUBMIT');
        this.button49 = createButton('SUBMIT');
        this.button50 = createButton('SUBMIT');
        this.button51 = createButton('SUBMIT');
    }
    display() {
        this.button42.position(350, 450);
        this.button43.position(580, 480);
        this.button44.position(580, 480);
        this.button45.position(580, 480);
        this.button46.position(580, 480);
        this.button47.position(490, 480);
        this.button48.position(490, 480);
        this.button49.position(490, 480);
        this.button50.position(490, 480);
        this.button51.position(490, 480);
        this.input1.position(475, 450);
        this.input2.position(475, 450);
        this.input3.position(475, 450);
        this.input4.position(475, 450);
        this.input5.position(475, 450);

        this.button42.mousePressed(() => {
            if(gameState == 1){
            gameState = 42;
            }
        });
        this.button43.mousePressed(() => {
            if(gameState == 42){
            gameState = 43;
            }
        });
        this.button44.mousePressed(() => {
            if(gameState == 43){
            gameState = 44;
            }
        });
        this.button45.mousePressed(() => {
            if(gameState == 44){
            gameState = 45;
            }
        });
        this.button46.mousePressed(() => {
            if(gameState == 45){
            gameState = 46;
            }
        });
        this.button47.mousePressed(() => {
        
        });
    };

}