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
            "q": "The major factor which affect the specific gravity is ",
            "a": [
                {"option": "Pores",      "correct": false},
                {"option": "Moisture contents",     "correct": false},
                {"option": "Both the above",      "correct": true },
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Both the above.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "According to standard the specific gravity of coarse aggregate should be in between",
            "a": [
                {"option": "2.7-2.9",	 "correct": false},
				{"option": "2.5-2.8",	 "correct": true},
				{"option": "3.15-3.19",	 "correct": false},				
                {"option": "2.6-2.85",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 2.5-2.8</p>" // no comma here
        },
        
		{ // Question 3 - Multiple Choice, Multiple True Answers, Select Any
              "q": "Match the correct size of the aggregates<br><img src=\"../images/table4.PNG\"\ height=250 width=268/>",
            "a": [
                { "option": "a-1,b-2,c-3,d-4,e-5", "correct": false },
                { "option": "a-5,b-3,c-4,d-1,e-2", "correct": true },
                { "option": "a-3,b-4,c-2,d-5,e-1", "correct": false },
                { "option": "a-5,b-4,c-3,d-2,e-1", "correct": false} // no comma here
            ],

                "correct": "<p><span>Right answer</span></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans: a-5,b-3,c-4,d-1,e-2</p>" // no comma here
        },
		
		
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which is the IS standard for specific gravity test on aggregates?",
            "a": [
                {"option": "IS 2386 (Part I) - 1963",	 "correct": false},
				{"option": "IS 2386 (Part II) - 1963",	 "correct": false},
				{"option": "IS 2386 (Part III) - 1963",	 "correct": true},				
                {"option": "IS 2386 (Part IV) - 1963", 	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: IS 2386 (Part III) - 1963</p>" // no comma here
        }
		
   // no comma here
    ]
};
