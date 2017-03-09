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
            "q": "Aggregate size affects which of the following concrete properties?",
            "a": [
                {"option": "Water demand ",      "correct": false},
                {"option": "Cement content ",     "correct": false},
                {"option": "Strength",      "correct": false },
                {"option": "All the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:All the above</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In lean mixes large aggregate give the best value for strength but in rich mixes, smaller aggregates results in higher strength.",
            "a": [
				{"option": "True",	 "correct": true},				
                {"option": "False",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:True</p>" // no comma here
        },
        
		
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "When an aggregate shows size fractions only in two or more well defined and well separated ranges, it is called  ",
            "a": [
			    {"option": "Narrow graded",	 "correct": false},
				{"option": "Open graded",	 "correct": false},
                {"option": "Dense graded",	 "correct": false},
				{"option": "Gap graded",	 "correct": true}//no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:Gap graded</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The coefficient of uniformity is",
            "a": [
                {"option": "C<sub>u</sub> = D<sub>60</sub><sup>2</sup>/D<sub>10</sub>",	 "correct": false},
				{"option": "C<sub>u</sub> = D<sub>10</sub><sup>2</sup>/D<sub>60</sub>",	 "correct": false},
				{"option": "C<sub>u</sub> = D<sub>60</sub>/D<sub>10</sub>",	 "correct": true},				
                {"option": "C<sub>u</sub> = D<sub>30</sub><sup>2</sup>/D<sub>60</sub>", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:C<sub>u</sub> = D<sub>60</sub>/D<sub>10</sub></p>" // no comma here
        },
		
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The gradation graph for the narrow graded aggregates will be",
            "a": [
                {"option": "Very steep curve",	 "correct": true},
				{"option": "Horizontal curve",	 "correct": false},
				{"option": "Even curve",	 "correct": false},				
                {"option": "Linear curve", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:Very steep curve</p>" // no comma here
        }
		
   // no comma here
    ]
};
