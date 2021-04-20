class Question {
    constructor() {
      this.input = createInput("name");
      this.button = createButton("Play");
      this.greeting = createElement('h3');
    }
  
    hide(){
      this.greeting.hide();
      this.input.hide();
      this.button.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- What is black while it is clean and white when it is dirty?");
        this.question.position(150, 80);
        this.option1.html("1: Hat");
        this.option1.position(150, 100);
        this.option2.html("2: Table");
        this.option2.position(150, 120);
        this.option3.html("1: Blackboard");
        this.option3.position(150, 140);

        this.input1.position(150, 230);
    }
};