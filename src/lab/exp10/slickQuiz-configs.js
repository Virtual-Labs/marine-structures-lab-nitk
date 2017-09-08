
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
            "q": "The addition of super plasticizers reduces the water quantity requirement. ",
            "a": [
                {"option": "True.",      "correct":true},
                {"option": "False",      "correct": false}
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True.</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which type of mix design gives the lean concrete mix?",
            "a": [
                {"option": "Nominal Mix","correct": false},
                {"option": "Design mix", "correct": true},
				{"option": "Standard mix", "correct": false},
				{"option": "None of the above", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Design mix.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The volume of coarse aggregate can be reduced by pumping the concrete.",
            "a": [
                {"option": "Yes",  "correct": true},
                {"option": "No",  "correct": false}
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Yes</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Select the correct one<br/>Addition of plasticizers to the concrete<br/>1)Increases the cement content<br>2)Reduces the water content<br>3)Increases the degree of workability",
            "a": [
                {"option": "1 and 2","correct": false},
                {"option": "2 and 3", "correct": true},
				{"option": "1 and 3", "correct": false},
				{"option": "1,2 and 3", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:2 and 3</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In mix design for every 25mm (above 50mm) variation in slump, the water content increases by ",
            "a": [
                {"option": "1%","correct": false},
                {"option": "2%", "correct": false},
				{"option": "3%", "correct": false},
				{"option": "5%", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:3%</p>" // no comma here
        }
        
   
    ]
};
