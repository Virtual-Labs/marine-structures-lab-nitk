
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
            "q": "If large number of deleterious materials are present on aggregates then it results",
            "a": [
                {"option": "Low specific gravity",      "correct": true},
                {"option": "High specific gravity",      "correct": false},
                {"option": "No change on specific gravity",      "correct": false},		// no comma here
				{"option": "None of the above",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Low specific gravity</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "According to the IS Code, Zone IV aggregate is finer than Zone I aggregate.",
            "a": [
                {"option": "Yes",               "correct": true},
				{"option": "No",  "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Yes</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The purpose of using fine aggregate in concrete is to ",
            "a": [
                {"option": "Fill voids",  "correct": false},
                {"option": "Workability agent",  "correct": false},
                {"option": "Both the above",  "correct": true},		
                {"option": "Provide strength",  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Both the above </p>" // no comma here
        }
        
      // no comma here
    ]
};
