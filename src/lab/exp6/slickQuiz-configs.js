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
            "q": "Bleeding of concrete is due to <br>  1)	settlement of coarse cement particles at the bottom<br>   2) settlement of fine cement particles at the bottom",
            "a": [
                {"option": "Both 1 and 2 are correct",      "correct": false},
                {"option": "Only 1 is correct",      "correct": true},
                {"option": "Only 2 is correct",      "correct": false},		// no comma here
				{"option": "None of the above are correct",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Only 1 is correct</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The fineness modulus is calculated by adding the percentages by mass retained on each of a specified series of sieves and dividing the sum by 100. ",
            "a": [
                {"option": "True",               "correct": false},
                {"option": "False",  			 "correct": true}// no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Sieving should be done by rotating the sieve and not by translation.",
            "a": [
                {"option": "True",  "correct": true},		
                {"option": "False",  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "IS Standard for determining fineness of cement is ",
            "a": [
                {"option": "IS:3485 (part I):1995",  "correct": false},		
                {"option": "IS : 2386 (Part III):1963",  "correct": false},
                {"option": "IS:4031(part I):1996",  "correct": true},		
                {"option": "IS : 2386 (Part I):1963",  "correct": false}				// no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: IS:4031(part I):1996</p>" // no comma here
        }
      // no comma here
    ]
};
