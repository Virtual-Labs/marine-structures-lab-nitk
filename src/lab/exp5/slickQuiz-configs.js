
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
            "q": "Open gradation refers an aggregate sample with ",
            "a": [
                {"option": "Very little fine aggregate particles.",      "correct":true},
                {"option": "Very little coarse aggregate particles",      "correct": false},
                {"option": "All size particles",      "correct": false},		// no comma here
				{"option": "None of the above",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Very little fine aggregate particles.</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Fineness modulus is  ",
            "a": [
                {"option": "Sum of cumulative % weight passed /100", "correct": false},
                {"option": "Sum of cumulative % weight retained /100", "correct": true},
				{"option": "Sum of cumulative weight retained  /100", "correct": false},
				{"option": "Sum of cumulative weight passed  /100", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Sum of cumulative % weight retained /100" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Effective size of the aggregate is the",
            "a": [
                {"option": "maximum particle size of the smallest 10% of the aggregate",  "correct": true},
                {"option": "maximum particle size of the smallest 30% of the aggregate",  "correct": false},
                {"option": "maximum particle size of the smallest 60% of the aggregate",  "correct": false},		
                {"option": "All the above ",  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:maximum particle size of the smallest 10% of the aggregate</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Larger size aggregates lead to ______ strength in concrete.",
            "a": [
                {"option": "Higher",	 "correct": false},
				{"option": "Lower",	 "correct": true},
				{"option": "No variation",	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:Lower</p>" // no comma here
        }
        
      // no comma here
    ]
};
