
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
            "q": "Which is correct?<br>Specific gravity value changes with the<br>1)Presence of deleterious materials<br>2)	Change in mineral property<br>3)Change in physical property",
            "a": [
                {"option": "1 and 2",      "correct": false},
                {"option": "1 and 3",      "correct": false},
                {"option": "2 and 3",      "correct": false},		// no comma here
				{"option": "1,2 and 3",      "correct": true}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:1,2 and 3</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Specific gravity helps in identifying deleterious materials in aggregates.",
            "a": [
                {"option": "True",               "correct": true},
				{"option": "False", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:True</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Presence of large number of deleterious materials on aggregate results in high specific gravity value.",
            "a": [
                 {"option": "False",               "correct": true},
				{"option": "True", "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:False</p>" // no comma here
        }
        
      // no comma here
    ]
};
