
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
            "q": "The meaning of D<sub>30</sub> is",
            "a": [
                {"option": "Diameter of the aggregate is 30mm",      "correct":false},
                {"option": "Size at 70% finer by weight ",      "correct": false},
                {"option": "Size at 30% finer by weight",      "correct": true},		// no comma here
				{"option": "None of the above",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Size at 30% finer by weight.</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Coefficient of curvature is",
            "a": [
                {"option": "C<sub>c</sub>=D<sub>60</sub><sup>2</sup>/(D<sub>30</sub> * D<sub>10</sub>)", "correct": false},
                {"option": "C<sub>c</sub>=D<sub>30</sub><sup>2</sup>/(D<sub>60</sub> * D<sub>10</sub>)", "correct": true},
				{"option": "C<sub>c</sub>=D<sub>10</sub><sup>2</sup>/(D<sub>60</sub> * D<sub>30</sub>)", "correct": false},
				{"option": "C<sub>c</sub>=D<sub>30</sub>/(D<sub>60</sub> * D<sub>10</sub>)", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: C<sub>u</sub>=D<sub>30</sub><sup>2</sup>/(D<sub>60</sub> * D<sub>10</sub>)</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The IS Standard for sieve analysis test on aggregate is",
            "a": [
                {"option": "IS 2386-III (1963)",  "correct": false},
                {"option": "IS 2386-II (1963)",  "correct": false},
                {"option": "IS 2386-VII (1963) ",  "correct": false},		
                {"option": "IS 2386-I (1963)",  "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: IS 2386-I (1963) </p>" // no comma here
        }
        
      // no comma here
    ]
};
