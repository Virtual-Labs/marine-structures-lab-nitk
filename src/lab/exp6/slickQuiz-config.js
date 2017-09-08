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
            "q": "Disadvantage of very fine cement is ",
            "a": [
                {"option": "susceptible to air-set ",      "correct": false },
                {"option": "early deterioration",     "correct": false},
                {"option": "Drying shrinkage",      "correct": false },
                {"option": "All the above",     "correct": true}, 
				{"option": "None of the above",      "correct": false }// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Finer cement offers lesser surface area for hydration.",
            "a": [
                {"option": "True",	 "correct": false},
				{"option": "False",	 "correct": true}				 // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: False</p>" // no comma here
        },
        
		
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Fineness test of cement measures the ",
            "a": [
                {"option": "Surface area of the cement particle per unit mass",	 "correct": false},
				{"option": "Particle size of cement",	 "correct": false},
				{"option": "Fineness modulus of cement",	 "correct": false},				
                {"option": "All the above", 		"correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The average size of cement particle is",
            "a": [
                {"option": "10&micro;",	 "correct": true},
				{"option": "20&micro;",	 "correct": false},
				{"option": "5&micro;",	 "correct": false},				
                {"option": "50&micro;", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 10&micro;</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Choose the correct one: <br>   More the fineness, more is the <br>    1) Rate of hydration<br>   2) Water demand<br>   3) Drying shrinkage",
            "a": [
                {"option": "1 and 3",	 "correct": false},
				{"option": "1 and 2",	 "correct": false},
				{"option": "2 and 3",	 "correct": false},				
                {"option": "1, 2 and 3", 	 "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 1, 2 and 3</p>" // no comma here
        }
   // no comma here
    ]
};
