
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
            "q": "The standard consistency of cement varies from",
            "a": [
                {"option": "26% to 33%",      "correct": true},
                {"option": "29% to 35%",      "correct": false},
                {"option": "22% to 33%",      "correct": false},		// no comma here
				{"option": "None of the above",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 26% to 33%</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The standard consistency test helps to determine the ______________ for other tests.",
            "a": [
                {"option": "Cement content",        "correct": false},
                {"option": "Slump",  	 "correct": false},
				{"option": "Water content",     "correct": true},
				{"option": "Setting time", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Water content</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "Select the odd one out of these",
            "a": [
                {"option": "Slump Test",      "correct": false},
                {"option": "Compaction Factor Test",     "correct": false},
                {"option": "Vee Bee Consistometer   Test",      "correct": false },
                {"option": "Standard Consistency Test",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Standard Consistency Test</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Consistency is a term which indicates the",
            "a": [
                {"option": "Degree of fluidity",	 "correct": false},
				{"option": "Degree of mobility",	 "correct": false},
				{"option": "Both a and b",	 "correct": true},				
                {"option": "None of the above",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Both a and b</p>" // no comma here
        }      
      // no comma here
    ]
};
