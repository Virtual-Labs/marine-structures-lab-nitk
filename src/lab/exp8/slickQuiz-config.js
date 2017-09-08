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
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Consistency of standard cement paste for setting time test is",
            "a": [
                {"option": "P",      "correct": false},
                {"option": "0.5P",     "correct": false},
                {"option": "0.85P",      "correct": true },
                {"option": "0.78P",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 0.85P</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Initial setting time of cement is the ",
            "a": [
                {"option": "Time elapsed between  water is added to the cement to the time that the paste starts losing its plasticity",	 "correct": true},
				{"option": "Time elapsed between  water is added to the cement to the time that the paste completely lost  its plasticity",	 "correct": false},
				{"option": "Time elapsed between the paste starts losing plasticity to the tome the paste completely lost its plasticity",	 "correct": false},				
                {"option": "None of the above",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Time elapsed between  water is added to the cement to the time that the paste starts losing its plasticity</p>" // no comma here
        },
        
		
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The initial setting time of cement is recorded when ",
            "a": [
                {"option": "the needle penetrates the paste to a depth 5-7 mm from the top ",	 "correct": false},
				{"option": "the needle penetrates the paste to a depth 33 to 35mm from the top ",	 "correct": true},
				{"option": "the needle penetrates the paste to a depth 33 to 35mm from the bottom ",	 "correct": false},				
                {"option": "All are wrong", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: the needle penetrates the paste to a depth 33 to 35mm from the top </p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The minimum initial setting time for different grades of OPC are same.",
            "a": [
                {"option": "True",	 "correct": true},
				{"option": "False",	 "correct": false}
				],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: True/p>" // no comma here
        }
		
   // no comma here
    ]
};
