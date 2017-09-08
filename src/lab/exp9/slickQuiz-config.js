// Setup your quiz text and questions here
//quiz
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
        { // Question 1 - Multiple Choice, Multiple True Answers, Select All
            "q": "The portion of concrete slips off and collapse sideways is ",
            "a": [
                {"option": "Collapse slump",  "correct": false},
                {"option": "Shear slump",  "correct": true},
                {"option": "True slump",  "correct": false},		
                {"option": "None",  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Shear slump</p>" // no comma here
        },
        
		 { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Workability of concrete depends upon",
            "a": [
                {"option": "Water Content",	 "correct": false},
				{"option": "Mix Proportion",	 "correct": false},
				{"option": "Aggregate Size",	 "correct": false},				
                {"option": "All the above", 		"correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above</p>" // no comma here
        },
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Slump test is not suitable for very dry or very wet concrete mix.",
            "a": [
                {"option": "True",	 "correct": true},
				{"option": "False",	 "correct": false}
				 // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: True</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Slump value is measured as the difference in height between the ",
            "a": [
                {"option": "Height of the mould and the average value of the subsidence.",	 "correct": true},
				{"option": "Height of the mould and the highest value of the subsidence.",	 "correct": false},
				{"option": "Height of the mould and the lowest value of the subsidence.",	 "correct": false},				
                {"option": "All the above", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Height of the mould and the average value of the subsidence.</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Slump test is suitable for slumps of ",
            "a": [
                {"option": "Medium to high workability.",	 "correct": true},
				{"option": "Low to high workability.",	 "correct": false},
				{"option": "Low to medium workability.",	 "correct": false},				
                {"option": "High workability", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Medium to high workability</p>" // no comma here
        }
   // no comma here
    ]
};
