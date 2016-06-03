module.exports = [

    // TEMPLATE
    // {
    //     id: "",
    //     type: "multiple-choice", "text-only", "multiple-choice-with-text", "paragraph",
    //     question: '?',
    //     answers: [{id: "" , answer: ""}, 
    //               {id: "", answer: ""}, 
    //               {id: "", answer: ""}, 
    //               {id: "", answer: ""}]
    // }, 
    
    //AIM

    {
        id: "ai:0",
        type: "multiple-choice",
        question: "Hey there, By answering a few quick questions you'll get to know yourself and your chances on the jobs market a bit better! It'll take less than 5 minutes, we promise!",
        answers: [{id:"0", answer: "Let's go!"}, 
                  {id:"1", answer: "Tell me more before I do this."}]
    }, 

    // CATEGORY
    {
        id: "ca:0",
        type: "multiple-choice",
        question: "What is the most important factor in choosing your next job?",
        answers: [{id: "29", answer: "Learning as much as possible."}, 
                  {id: "30", answer: "$$$$ ¥€£"}, 
                  {id: "31", answer: "Having fun with my colleagues."}, 
                  {id: "32", answer: "Social/environmental impact"}]
    }, 

    {
        id: "ca:1",
        type: "multiple-choice",
        question: "Do you have a stong preference for the type of your next job?",
        answers: [{id: "33", answer: "Yes, I'd like to work full-time, 9-5."}, 
                  {id: "34", answer: "I'd maybe try a 9-5 if I really, really had to."}, 
                  {id: "35", answer: "I really prefer freelancing, or a highly flexible job."}, 
                  {id: "36", answer: "I'm totally flexible!"}]
    }, 
*/

    {
        id: "ca:2",
        type: "multiple-choice",
        question: "If you had a qood idea, where would you write it down?",
        answers: [{id: "41", answer: "Little black notebook / a piece of paper."}, 
                  {id: "42", answer: "Sublime Text"}, 
                  {id: "43", answer: "Evernote"}, 
                  {id: "44", answer: "Google docs"}]
    }, 


    // AVAILABILITY
    {
        id: "av:0",
        type: "multiple-choice",
        question: "Are you actually looking for something new? Why?",
        answers: [{id: "37", answer: "I have an awesome job, but would consider switching if something awesome came along."}, 
                  {id: "38", answer: "I'm still studying, but I started looking around."}, 
                  {id: "39", answer: "I'm looking for a freelancing gig, or something part-time/remote."}, 
                  {id: "40", answer: "I'm bored.}]
    }, 


    // LOSTSOUL
    

    // STUDENT
    
    {
        id: "st:0",
        type: "multiple-choice",
        question: "Where are you now with school?",
        answers: [{id: "45", answer: "High school, soon to be over!"}, 
                  {id: "46", answer: "Freshman / Sophomore"}, 
                  {id: "47", answer: "Graduating soon!"}, 
                  {id: "48", answer: "Postgrad / PHd"}]
    }, 

    {
        id: "st:1",
        type: "multiple-choice",
        question: "Where are you now with school?",
        answers: [{id: "37", answer: "High school, soon to be over!"}, 
                  {id: "38", answer: "Freshman / Sophomore"}, 
                  {id: "39", answer: "Graduating soon!"}, 
                  {id: "40", answer: "Postgrad / PHd"}]
    },

    {
        id: "st:2",
        type: "multiple-choice",
        question: "What kind of a job are you looking for?",
        answers: [{id: "37", answer: ""}, 
                  {id: "38", answer: "Freshman / Sophomore"}, 
                  {id: "39", answer: "Graduating soon!"}, 
                  {id: "40", answer: "Postgrad / PHd"}]
    },




    // TECHIE
    

    // STARTUP
    

    // CULTURE (meaning work ethics, attitude towards management and problem solving)
    
    {
        id: "av:0",
        type: "multiple-choice",
        question: "Do you enjoy working under a project manager?",
        answers: [{id: "10" , answer: "Usually yes. Everything would be more chaotic without them."}, 
                  {id: "11", answer: "No, they are mostly useless."}, 
                  {id: "12", answer: "I never had a project manager."}, 
                  {id: "13", answer: "Other: "}]
    }, 

    {
        id: "lo:0",
        type: "multiple-choice",
        question: "Do you enjoy working under a project manager?",
        answers: [{id: "10" , answer: "Usually yes. Everything would be more chaotic without them."}, 
                  {id: "11", answer: "No, they are mostly useless."}, 
                  {id: "12", answer: "I never had a project manager."}, 
                  {id: "13", answer: "Other: "}]
    },

    {
        id: "st:0",
        type: "multiple-choice",
        question: "Do you enjoy working under a project manager?",
        answers: [{id: "10" , answer: "Usually yes. Everything would be more chaotic without them."}, 
                  {id: "11", answer: "No, they are mostly useless."}, 
                  {id: "12", answer: "I never had a project manager."}, 
                  {id: "13", answer: "Other: "}]
    },

    {
        id: "te:0",
        type: "multiple-choice",
        question: "Do you enjoy working under a project manager?",
        answers: [{id: "10" , answer: "Usually yes. Everything would be more chaotic without them."}, 
                  {id: "11", answer: "No, they are mostly useless."}, 
                  {id: "12", answer: "I never had a project manager."}, 
                  {id: "13", answer: "Other: "}]
    },

    {
        id: "su:0",
        type: "multiple-choice",
        question: "Do you enjoy working under a project manager?",
        answers: [{id: "10" , answer: "Usually yes. Everything would be more chaotic without them."}, 
                  {id: "11", answer: "No, they are mostly useless."}, 
                  {id: "12", answer: "I never had a project manager."}, 
                  {id: "13", answer: "Other: "}]
    },

    {
        id: "cu:0",
        type: "multiple-choice",
        question: "Do you enjoy working under a project manager?",
        answers: [{id: "10" , answer: "Usually yes. Everything would be more chaotic without them."}, 
                  {id: "11", answer: "No, they are mostly useless."}, 
                  {id: "12", answer: "I never had a project manager."}, 
                  {id: "13", answer: "Other: "}]
    }, 

    {
        id: "cu:1",
        type: "multiple-choice",
        question: "What is the most annoying thing about working in an office?",
        answers: [{id: "14" , answer: "That I have to be on time."}, 
                  {id: "15", answer: "I get distracted by the crowd."}, 
                  {id: "16", answer: "Sitting at the same desk all day."}, 
                  {id: "17", answer: "I'm not too bothered by any of the above."}]
    }, 

    {
        id: "cu:2",
        type: "multiple-choice",
        question: "Would you actually be willing to work in an office?",
        answers: [{id: "18" , answer: "Yes, if they payed me enough."}, 
                  {id: "19", answer: "It depends on the office vibe and the colleagues."}, 
                  {id: "20", answer: "Most probably not."}, 
                  {id: "21", answer: "Definitely not."}]
    }, 

    {
        id: "cu:3",
        type: "multiple-choice",
        question: "Is money the primary influencing factor in choosing your next job?",
        answers: [{id: "22" , answer: "Yes"}, 
                  {id: "23", answer: "Not entirely"}, 
                  {id: "24", answer: "Definitely not."}]
    }, 

    {
        id: "cu:4",
        type: "multiple-choice",
        question: "How would you go about solving an incredibly hard problem in your field?",
        answers: [{id: "25" , answer: "I’d put in hours required and work as hard as I can."}, 
                  {id: "26", answer: "I’d find someone who could tell me (part of) the solution."}, 
                  {id: "27", answer: "Google."},
                  {id: "28", answer: "I would hire a freelancer to get it done for me."}]
    }, 

    // PERSONALITY

    {
        id: "pe:0",
        type: "multiple-choice",
        question: "How punctual are you? Honestly.",
        answers: [{id: "2" , answer: "I take pride in always being on time."}, 
                  {id: "3", answer: "I’m mostly on time."}, 
                  {id: "4", answer: "I’m always running late, but I always have a good excuse."}, 
                  {id: "5", answer: "I'm chronically late most of the times."}]
    }, 

    {
        id: "pe:1",
        type: "multiple-choice",
        question: "How much do you value punctuality?",
        answers: [{id: "6" , answer: "I expect others to be exactly on time, always."}, 
                  {id: "7", answer: "Somewhat, as long as the delay is under 5 minutes."}, 
                  {id: "8", answer: "I don’t mind if someone’s late as long as they tell me on time."}, 
                  {id: "9", answer: "I’m quite flexible about it."}]
    },

    {
        id: "pe:2",
        type: "multiple-choice",
        question: "In a certain light, wouldn't nuclear war be exciting?",
        answers: [{id: "49" , answer: "I suppose, yes."}, 
                  {id: "50", answer: "Nope."}, 
                  {id: "51", answer: "Isn't this an OKc question?"}]
    },

    {
        id: "pe:3",
        type: "multiple-choice",
        question: "Yes it is. Moving on, how much do you wanna focus on solving a specific problem at work?",
        answers: [{id: "52" , answer: "I’d like to dedicate my full attention to solving a single problem really well."}, 
                  {id: "53", answer: "I’d like to work on multiple problems simultaneously."}, 
                  {id: "54", answer: "Not sure."}]
    }



    {
        id: "fe:0",
        type: "text-only",
        question: "Feedback"
    } 





 

    // {
    //     id: 'purpose:0',
    //     type: 'multiple-choice',
    //     question: 'Why would you like to have a new job?',
    //     answers: [{id: '0', answer: 'I’m bored at my current job.'}, {id: '1', answer: 'I’m a fresh graduate.'}, {id: '2', answer: 'I want something more challenging.'}, {id: '3', answer: 'Other...'}]
    // }, {
    //     id: 'aim:5',
    //     type: 'text-only',
    //     question: 'How many jobs have you applied for this year?'
    // }, {
    //     id: 'aim:4',
    //     type: 'multiple-choice',
    //     question: 'What is the most important factor in finding your next job?',
    //     answers: [{id: '0', answer: 'Getting a high salary'}, {id: '1', answer: 'Learning as much as possible.'}, {id: '2', answer: 'Having fun with my colleagues.'}, {id: '3', answer: 'Other...'}]
    // }, {
    //     id: 'aim:3',
    //     type: 'multiple-choice',
    //     question: 'What are your thoughts on remote work?',
    //     answers: [{id: '0', answer: 'Yes, I hate sitting in the same office every day.'}, {id: '1', answer: 'I would prefer having an office, but it’s not necessary.'}, {id: '2', answer: 'I find myself most productive in the office.'}, {id: '3', answer: 'Other'}]
    // }, {
    //     id: 'aim:2',
    //   
    //     id: 'aim:1',
    //     type: 'multiple-choice',
    //     question: 'What’s the ideal office size you would like to have?',
    //     answers: [{id: '0', answer: 'I want us to all fit around a table.'}, {id: '1', answer: 'Smaller startup (10-20).'}, {id: '2', answer: 'Medium-sized.'}, {id: '3', answer: 'I would like to work for a long-established, big company (300+).'}]
    // }
];
