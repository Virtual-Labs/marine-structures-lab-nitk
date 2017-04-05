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
            "q": "Specific gravity is important in",
            "a": [
                {"option": "Mix design",      "correct": false},
                {"option": "Deleterious material identification",     "correct": false},
                {"option": "Material property change",      "correct": false },
                {"option": "All the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The change in specific gravity may result because of",
            "a": [
                {"option": "Change in mineral property",	 "correct": false},
				{"option": "Change in physical property",	 "correct": false},
				{"option": "Both a) and b)",	 "correct": true},				
                {"option": "Only a)",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Both a) and b)</p>" // no comma here
        },
        
		
		
		
		
		{ // Question 3 - Multiple Choice, Multiple True Answers, Select Any
              "q": "Match the correct size of the aggregates<br><img src=\"../images/table.PNG\"\height=250 width=350/>",
            "a": [
                { "option": "a-1,b-2,c-3,d-4,e-5", "correct": false },
                { "option": "a-4,b-3,c-5,d-1,e-2", "correct": true },
                { "option": "a-3,b-4,c-2,d-5,e-1", "correct": false },
                { "option": "a-5,b-4,c-3,d-2,e-1", "correct": false} // no comma here
            ],

                "correct": "<p><span>Right answer</span> Ans:a-4,b-3,c-5,d-1,e-2</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:a-4,b-3,c-5,d-1,e-2</p>" // no comma here
        },
		
		
		
		
		
		
		
		
		
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "IS 2386 - 1963 is a Indian Standard for",
            "a": [
                {"option": "Aggregates Particle  Size and  Shape ",	 "correct": false},
				{"option": "Specific  Gravity,  Density, Voids,  Absorption  and Bulking",	 "correct": false},
				{"option": " Measuring  Mortar  Making  Properties  of  Fine  Aggregate ",	 "correct": false},				
                {"option": "All the above ", 	 "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:All the above </p>" // no comma here
        }
		
   // no comma here
    ]
};
