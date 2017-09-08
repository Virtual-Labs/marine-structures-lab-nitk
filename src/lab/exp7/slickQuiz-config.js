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
            "q": "Standard consistency of the cement is",
            "a": [
                {"option": "Consistency in which the needle penetrate to a point 5 to 7 mm from the bottom of mould.",      "correct": true},
                {"option": "Consistency in which the needle penetrate to a point 5 to 7 mm from the top of mould.",     "correct": false},
                {"option": "Consistency in which the needle penetrate to a point 25 mm from the bottom of mould.",      "correct": false },
                {"option": "None of the above.",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Consistency in which the needle penetrate to a point 5 to 7 mm from the bottom of mould.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "IS Standard for determination of consistency of standard cement paste is",
            "a": [
                {"option": "IS 4031 (Part 4) : 1988",	 "correct": true},
				{"option": "IS 4031 (Part 3) : 1988",	 "correct": false},
				{"option": "IS 4031 (Part 2) : 1988",	 "correct": false},				
                {"option": "IS 4031 (Part 1) : 1988",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: IS 4031 (Part 4) : 1988</p>" // no comma here
        },
         { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Select the correct one!<br>The gauging time of the paste should not be <br>1. less than 5 minutes<br>2. more than 5 minutes<br>3. less than 3 minutes",
            "a": [
                {"option": "only 2",	 "correct": false},
				{"option": "2 and 3 ",	 "correct": true},
				{"option": "1 and 2",	 "correct": false},				
                {"option": "only 3", 		"correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 2 and 3 </p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The diameter of the plunger used  for testing standard consistency of the cement is",
            "a": [
                {"option": "10mm",	 "correct": true},
				{"option": "1mm",	 "correct": false},
				{"option": "5mm",	 "correct": false},				
                {"option": "None of the above", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 10mm</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The specified temperature and humidity for conducting consistency test is",
            "a": [
                {"option": "29&#177;2 &deg;C and 65&#177;5%",	 "correct": false},
				{"option": "27&#177;2 &deg;C and 90 %",	 "correct": false},
				{"option": "29&#177;2 &deg;C and 90%",	 "correct": true},				
                {"option": "27&#177;2 &deg;C and 65&#177;5%", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 29&#177;2 &deg;C and 90%</p>" // no comma here
        }
   // no comma here
    ]
};
