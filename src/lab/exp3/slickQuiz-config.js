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
            "q": "The cumulative percent passing of the aggregate is found by",
            "a": [
                {"option": "100% + %Cumulative Retained ",      "correct": false},
                {"option": "%Cumulative Retained/ 100%",     "correct": false},
                {"option": "100% - %Cumulative Retained",      "correct": true },
                {"option": "%Cumulative Retained *100%",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 100% - %Cumulative Retained.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The Grading curve is a curve having",
            "a": [
                {"option": "% finer passing on X-axis and Sieve size on Y-axis",	 "correct": false},
				{"option": "Sieve size on X-axis and cumulative % finer passing on Y-axis",	 "correct": false},
				{"option": "Sieve size on X-axis and % finer passing on Y-axis",	 "correct": true},				
                {"option": "Sieve size on X-axis and cumulative % finer retained on Y-axis",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Sieve size on X-axis and % finer passing on Y-axis.</p>" // no comma here
        },
        
		
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The sieve passage is the fine material that passes through the sieve during a sieve analysis. ",
            "a": [
                {"option": "False",	 "correct": false},
				{"option": "True",	 "correct": true}//no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: True.</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Sieve residue is the",
            "a": [
                {"option": "Material retained on larger sieve",	 "correct": true},
				{"option": "Material retained on smaller sieve",	 "correct": false},
				{"option": "Material retained on pan",	 "correct": false},				
                {"option": "None of the above", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Material retained on larger sieve.</p>" // no comma here
        },
		
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The higher is the Fineness Modulus of aggregate, then ",
            "a": [
                {"option": "Coarser is the aggregate",	 "correct": true},
				{"option": "Finer is the aggregate",	 "correct": false},
				{"option": "Coarser or finer the aggregate",	 "correct": false},				
                {"option": "None of the above", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Coarser is the aggregate</p>" // no comma here
        }
		
   // no comma here
    ]
};
