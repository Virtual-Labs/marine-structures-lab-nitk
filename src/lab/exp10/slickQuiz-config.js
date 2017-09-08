// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
		
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "For ensuring quality of concrete, use",                       	
            "a": [
                {"option": "Coarse aggregates ",      "correct": false},
                {"option": "Graded aggregates ",     "correct": true},
                {"option": "Single sized aggregates",      "correct": false },
                {"option": "Flaky aggregates",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:Graded aggregates</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The risk of segregation is more for",	
            "a": [
				 {"option": "Larger sized aggregates ",      "correct": false},
                {"option": "Wetter mix ",     "correct": false},
                {"option": "Coarser mix",      "correct": false },
                {"option": "All the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:All the above</p>" // no comma here
        },
        
		
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The maximum amount of dust which may be permitted in aggregates is  ",
            "a": [
			    {"option": "5% of the total aggregates for low workability with a coarse grading",	 "correct": false},
				{"option": "20% of the total aggregates for a mix having high workability with fine grading",	 "correct": false},
                {"option": "10% of the total aggregates for low workability with a fine grading",	 "correct": false},
				{"option": "All the above",	 "correct": true}//no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:All the above</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following is correct?<br/>Proper proportioning of concrete, ensures<br/>1)Water tightness of the structure<br/>2)Desired durability<br/>3)Resistance to water",
            "a": [
                {"option": "1 and 2", "correct": false},
				{"option": "1 and 3", "correct": false},
				{"option": "2 and 3", "correct": false},				
                {"option": "1,2 and 3", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:1,2 and 3</p>" // no comma here
        },
		
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The grade of concrete not recommended by I.S. : 456, is",
            "a": [
                {"option": "M300",	 "correct": false},
				{"option": "M400",	 "correct": false},
				{"option": "M500",	 "correct": true},				
                {"option": "M200", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:M500</p>" // no comma here
        }
		
   // no comma here
    ]
};
