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
            "q": "Specific gravity value of cement for nominal mix design is",
            "a": [
                {"option": "3.15 ",      "correct": true},
                {"option": "3.51",     "correct": false},
                {"option": "2.75",      "correct": false },
                {"option": "3.01 ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 3.15</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "stock cements are avoided in concreting especially because of",
            "a": [
                {"option": "Moisture activity",	 "correct": true},
				{"option": "Chemical activity",	 "correct": false},
				{"option": "Thermal activity",	 "correct": false},				
                {"option": "None of the above",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Moisture activity</p>" // no comma here
        },
        
		
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Why is kerosene used to determine the specific gravity of cement?",
            "a": [
                {"option": "Its specific gravity is higher than cement",	 "correct": false},
				{"option": "It does not react with cement as water does",	 "correct": true},
				{"option": "Its specific gravity is lower than cement",	 "correct": false},				
                {"option": "None of these", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: It does not react with cement as water does</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Specific gravity of kerosene is",
            "a": [
                {"option": "0.78-0.82 g/cc",	 "correct": true},
				{"option": "0.85- 0.91 g/cc",	 "correct": false},
				{"option": "0.65-0.78 g/cc",	 "correct": false},				
                {"option": "0.7-0.78 g/cc", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 0.78-0.82 g/cc</p>" // no comma here
        }
		
   // no comma here
    ]
};
