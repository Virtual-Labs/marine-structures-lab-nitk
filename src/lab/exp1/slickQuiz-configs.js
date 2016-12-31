
// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following will float in water? The density of water is 1 g/ml",
            "a": [
                {"option": "Object 1: m = 5 g, and v = 2 m",      "correct": true},
                {"option": "Object 2: m = 3 g, and v = 4 ml",      "correct": false},
                {"option": "Object 3: m = 3 g, and v = 1 ml",      "correct": false},		// no comma here
				{"option": "Object 4: m = 4 g, and v = 3 ml",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Object 1: m = 5 g, and v = 2 m</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Standard code for physical test for hydraulic cement is",
            "a": [
                {"option": "IS 4031 (1988)",               "correct": true},
                {"option": "IS 3535 (1986)",  			 "correct": false},
				{"option": "IS 10262 (2009)",               "correct": false},
				{"option": "IS 516 (1959)", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: IS 4031 (1988)</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The specific gravity of cement is greater than 3.19, it indicates that ",
            "a": [
                {"option": "The cement is not minced finely as per the industry standard",  "correct": false},
                {"option": "It has more moisture content",  "correct": false},
                {"option": "Both of these",  "correct": true},		
                {"option": "None of these",  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Both of these </p>" // no comma here
        }
        
      // no comma here
    ]
};
