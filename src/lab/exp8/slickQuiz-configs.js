
// Setup your quiz text and questions here
//self evaluation
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
            "q": "IS Standard for initial and final setting time of cement ",
            "a": [
                {"option": "IS 1199 (1959)",      "correct": false},
                {"option": "IS 4031 (Part 4) : 1988",      "correct": false},
                {"option": "IS 4031 (Part 3) : 1988",      "correct": false},		// no comma here
				{"option": "IS:4031(part 5):1988",      "correct": true}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: IS:4031(part 5):1988</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Setting time of cement will be same under different temperature. ",
            "a": [
                {"option": "False",               "correct": true},
                {"option": "True",  			 "correct": false}// no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Hardening of cement occurs at",
            "a": [
                {"option": "slow rate during the first few days and afterwards it continues to increase at a rapid rate",  "correct": false},
                {"option": "rapid rate during the first few days and afterwards it continues to increase at a decreased rate",  "correct": false},
                {"option": "uniform rate throughout its age",  "correct": false},		
                {"option": "None of these",  "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: None of these </p>" // no comma here
        }
        
      // no comma here
    ]
};
