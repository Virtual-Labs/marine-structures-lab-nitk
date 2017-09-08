//self evaluation
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
            "q": "Slump test is the more precise test to obtain workability of concrete. ",
            "a": [
                {"option": "False",      "correct": true},
                {"option": "True",      "correct": false}
      			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Zero slump concrete indicates",
            "a": [
                {"option": "High water cement ratio and wet mix",    "correct": false},
                {"option": "Low water cement ratio and Dry mix",  	 "correct": true},
				{"option": "Very harsh mix",     "correct": false},
				{"option": "Lean concrete mix", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Low water cement ratio and Dry mix</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "IS Standard for slump test is",
            "a": [
                {"option": "IS 1199 :1959",  "correct": true},
                {"option": "IS 456:2000",  "correct": false},
                {"option": "IS 1343:1980",  "correct": false},		
                {"option": "IS 5515:1983",  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: IS 1199 :1959</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Slump cone test is not suitable for ",
            "a": [
                {"option": "Very dry mix",  "correct": false},
                {"option": "collapsed slump",  "correct": false},
                {"option": "aggregate size >38mm",  "correct": false},		
                {"option": "All the above",  "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All the above</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following is correct?<br>  Collapse slump indicates <br>1.	High water cement ratio<br> 2.	Low workability mix<br>3.	Harsh and Lean mix <br>4.	Slump test is unsuitable ",
            "a": [
                {"option": "1,2 and 3",  "correct": false},
                {"option": "2,3 and 4",  "correct": false},
                {"option": "1,2,3 and 4",  "correct": false},		
                {"option": "1,3 and 4",  "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 1,3 and 4</p>" // no comma here
        }
		
      // no comma here
    ]
};
