// Exercise, field and story content
const C={
 "FIELDS": [
  {
   "id": "design",
   "name": "Design",
   "blurb": "Shaping how things look, feel and work for people.",
   "desc": "How things look, feel and work. Try three short exercises and notice what pulls you in."
  },
  {
   "id": "psychology",
   "name": "Psychology",
   "blurb": "Understanding why people think, feel and act.",
   "desc": "How people think, feel and decide. Try three short exercises and notice what pulls you in."
  },
  {
   "id": "business",
   "name": "Business",
   "blurb": "Turning ideas into something people choose and pay for.",
   "desc": "How ideas become things people choose. Try three short exercises and notice what pulls you in."
  },
  {
   "id": "tech",
   "name": "Technology",
   "blurb": "Building software and systems that solve problems.",
   "desc": "How software and systems solve problems. Try three short exercises and notice what pulls you in."
  },
  {
   "id": "science",
   "name": "Science",
   "blurb": "Asking questions and testing what is really true.",
   "desc": "How we find out what is really true. Try three short exercises and notice what pulls you in."
  },
  {
   "id": "health",
   "name": "Health",
   "blurb": "Caring for bodies and minds, one person at a time.",
   "desc": "How we care for bodies and minds. Try three short exercises and notice what pulls you in."
  },
  {
   "id": "law",
   "name": "Law & Policy",
   "blurb": "Making and weighing the rules a community lives by.",
   "desc": "How rules are made and weighed. Try three short exercises and notice what pulls you in."
  },
  {
   "id": "media",
   "name": "Media & Arts",
   "blurb": "Telling stories that make people stop and feel.",
   "desc": "How stories reach people. Try three short exercises and notice what pulls you in."
  }
 ],
 "EXPERIENCES": [
  {
   "id": "understanding-someone",
   "field": "design",
   "title": "Understanding Someone",
   "blurb": "Step into another point of view and notice what changes about how you see a problem.",
   "minutes": 4,
   "scene": "A new student keeps missing the bus home. Everyone says, “Just check the app.”",
   "steps": [
    {
     "prompt": "What is the first thing you would do?",
     "options": [
      {
       "label": "Ask how they get to the stop each morning",
       "field": "design"
      },
      {
       "label": "Count how many taps the bus app needs",
       "field": "tech"
      },
      {
       "label": "Ask how they feel about being new",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "They say the app is “confusing.” What now?",
     "options": [
      {
       "label": "Watch them use it and see where they get stuck",
       "field": "design"
      },
      {
       "label": "Ask what they expected it to do",
       "field": "psychology"
      },
      {
       "label": "Sketch a simpler screen with only the next bus",
       "field": "design"
      }
     ]
    },
    {
     "prompt": "You can fix one thing this week. Which?",
     "options": [
      {
       "label": "A clearer screen for first-time riders",
       "field": "design"
      },
      {
       "label": "A friendly guide for new students",
       "field": "health"
      },
      {
       "label": "A reminder before the bus arrives",
       "field": "tech"
      }
     ]
    }
   ]
  },
  {
   "id": "fix-the-sign",
   "field": "design",
   "title": "Fix the Sign",
   "blurb": "Rewrite a confusing sign so anyone gets it in two seconds.",
   "minutes": 4,
   "scene": "A school door sign reads: “Do not enter unless you are authorised personnel only.”",
   "steps": [
    {
     "prompt": "What is the real problem?",
     "options": [
      {
       "label": "Too many words, so people will not read it",
       "field": "design"
      },
      {
       "label": "Nobody knows who “authorised” means",
       "field": "law"
      },
      {
       "label": "It has no symbol to catch the eye",
       "field": "design"
      }
     ]
    },
    {
     "prompt": "What should a sign do in two seconds?",
     "options": [
      {
       "label": "Show what to do next",
       "field": "design"
      },
      {
       "label": "Warn about the risk",
       "field": "health"
      },
      {
       "label": "Explain the rule",
       "field": "law"
      }
     ]
    },
    {
     "prompt": "How do you test your new sign?",
     "options": [
      {
       "label": "Show it to five people for three seconds",
       "field": "science"
      },
      {
       "label": "Ask a teacher if it looks right",
       "field": "law"
      },
      {
       "label": "Put it up and watch what people do",
       "field": "design"
      }
     ]
    }
   ]
  },
  {
   "id": "make-it-feel-right",
   "field": "design",
   "title": "Make It Feel Right",
   "blurb": "Work out why a perfectly good product still does not feel good to use.",
   "minutes": 5,
   "scene": "A leak-proof water bottle works perfectly, but nobody wants to carry it.",
   "steps": [
    {
     "prompt": "What do you do first?",
     "options": [
      {
       "label": "Watch how people carry their bottles",
       "field": "design"
      },
      {
       "label": "Check what it costs to make",
       "field": "business"
      },
      {
       "label": "Ask what they love about their current one",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "People say it is “boring.” What next?",
     "options": [
      {
       "label": "Try three quick shapes in paper",
       "field": "design"
      },
      {
       "label": "Offer more colour choices",
       "field": "media"
      },
      {
       "label": "Ask what “not boring” means to them",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "You can improve one thing. Which?",
     "options": [
      {
       "label": "How it feels in the hand",
       "field": "design"
      },
      {
       "label": "The story on the label",
       "field": "media"
      },
      {
       "label": "The price",
       "field": "business"
      }
     ]
    }
   ]
  },
  {
   "id": "read-the-room",
   "field": "psychology",
   "title": "Read a Room",
   "blurb": "Spot what people really feel when their words say something different.",
   "minutes": 5,
   "scene": "In group work, a teammate says “It’s fine, whatever you want” but stops looking up from their notebook.",
   "steps": [
    {
     "prompt": "What do you think is going on?",
     "options": [
      {
       "label": "They have an idea but do not feel safe sharing it",
       "field": "psychology"
      },
      {
       "label": "They are tired and need the task made smaller",
       "field": "health"
      },
      {
       "label": "The group has no plan, so they checked out",
       "field": "business"
      }
     ]
    },
    {
     "prompt": "How do you check without making it awkward?",
     "options": [
      {
       "label": "Ask a low-pressure question: “What part sounds hardest?”",
       "field": "psychology"
      },
      {
       "label": "Split the work so everyone picks a piece",
       "field": "business"
      },
      {
       "label": "Wait and watch how they react",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "They say, “I just don’t want to be wrong.” What helps?",
     "options": [
      {
       "label": "Say rough ideas are welcome first",
       "field": "psychology"
      },
      {
       "label": "Share a time you were wrong and it was fine",
       "field": "health"
      },
      {
       "label": "Make a quick way to test ideas",
       "field": "science"
      }
     ]
    }
   ]
  },
  {
   "id": "why-did-i-do-that",
   "field": "psychology",
   "title": "Why Did I Do That",
   "blurb": "Look for the trigger behind a habit instead of blaming yourself.",
   "minutes": 4,
   "scene": "You promised yourself you would study, but ended up scrolling for two hours.",
   "steps": [
    {
     "prompt": "Which question is most useful?",
     "options": [
      {
       "label": "What was I feeling right before?",
       "field": "psychology"
      },
      {
       "label": "What made scrolling easier than studying?",
       "field": "design"
      },
      {
       "label": "How long did it actually take?",
       "field": "science"
      }
     ]
    },
    {
     "prompt": "It happens mostly when you are stressed. Now what?",
     "options": [
      {
       "label": "Try a calm start: just five minutes",
       "field": "health"
      },
      {
       "label": "Move the phone out of reach",
       "field": "design"
      },
      {
       "label": "Ask a friend to check in",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "What does this show?",
     "options": [
      {
       "label": "Habits have triggers",
       "field": "psychology"
      },
      {
       "label": "Environment shapes behaviour",
       "field": "design"
      },
      {
       "label": "I can test small changes",
       "field": "science"
      }
     ]
    }
   ]
  },
  {
   "id": "be-a-good-listener",
   "field": "psychology",
   "title": "Be a Good Listener",
   "blurb": "Practise helping someone feel heard without trying to fix everything.",
   "minutes": 4,
   "scene": "A friend says, “I think I failed that test,” before they have even got it back.",
   "steps": [
    {
     "prompt": "What do you say first?",
     "options": [
      {
       "label": "Ask what makes them think so",
       "field": "psychology"
      },
      {
       "label": "Say it will be fine",
       "field": "health"
      },
      {
       "label": "Offer to study together next time",
       "field": "health"
      }
     ]
    },
    {
     "prompt": "They go quiet. What do you do?",
     "options": [
      {
       "label": "Stay with the silence for a moment",
       "field": "psychology"
      },
      {
       "label": "Change the subject to cheer them up",
       "field": "media"
      },
      {
       "label": "Share a time something similar happened to you",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "Afterwards, you would:",
     "options": [
      {
       "label": "Check in the next day",
       "field": "health"
      },
      {
       "label": "Send them something funny",
       "field": "media"
      },
      {
       "label": "Trust them to ask if they need you",
       "field": "psychology"
      }
     ]
    }
   ]
  },
  {
   "id": "sixty-second-pitch",
   "field": "business",
   "title": "The 60-Second Pitch",
   "blurb": "Find the one reason someone would care, then say it clearly in a minute.",
   "minutes": 5,
   "scene": "Your friend wants to sell handmade phone cases at school, but nobody has asked for them.",
   "steps": [
    {
     "prompt": "What should they find out first?",
     "options": [
      {
       "label": "Whether people actually want a new case",
       "field": "business"
      },
      {
       "label": "How the case can be made stronger",
       "field": "science"
      },
      {
       "label": "How good the packaging can look",
       "field": "design"
      }
     ]
    },
    {
     "prompt": "Five people say they like it but only one would pay. What do you take from that?",
     "options": [
      {
       "label": "Liking and buying are different: ask what makes it worth paying for",
       "field": "business"
      },
      {
       "label": "Change the price to see how answers change",
       "field": "business"
      },
      {
       "label": "Find out what the one buyer saw",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "You have a minute to pitch. What do you lead with?",
     "options": [
      {
       "label": "The problem it solves for the buyer",
       "field": "business"
      },
      {
       "label": "The story of who made it and why",
       "field": "media"
      },
      {
       "label": "A quick demo in their hands",
       "field": "design"
      }
     ]
    }
   ]
  },
  {
   "id": "price-it",
   "field": "business",
   "title": "Price It",
   "blurb": "Decide what something is worth and learn from what happens next.",
   "minutes": 4,
   "scene": "You are selling homemade cookies at the school fair.",
   "steps": [
    {
     "prompt": "How do you pick a price?",
     "options": [
      {
       "label": "Ask what people usually pay",
       "field": "business"
      },
      {
       "label": "Add up what it cost and add a bit",
       "field": "business"
      },
      {
       "label": "Pick what feels fair",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "You sold out in 20 minutes. What does that tell you?",
     "options": [
      {
       "label": "The price was probably too low",
       "field": "business"
      },
      {
       "label": "You should make more next time",
       "field": "business"
      },
      {
       "label": "Ask who bought and why",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "Next fair, you would:",
     "options": [
      {
       "label": "Track sales hour by hour",
       "field": "science"
      },
      {
       "label": "Add a second flavour",
       "field": "design"
      },
      {
       "label": "Team up with another stall",
       "field": "business"
      }
     ]
    }
   ]
  },
  {
   "id": "win-a-customer",
   "field": "business",
   "title": "Win Them Back",
   "blurb": "Work out why people left and what would bring them back.",
   "minutes": 5,
   "scene": "A local gym lost half its members this year.",
   "steps": [
    {
     "prompt": "What is your first step?",
     "options": [
      {
       "label": "Call ex-members and ask why they left",
       "field": "business"
      },
      {
       "label": "Look at when people stopped coming",
       "field": "science"
      },
      {
       "label": "Check what other gyms offer",
       "field": "business"
      }
     ]
    },
    {
     "prompt": "The answer is “too crowded at 6pm.” What now?",
     "options": [
      {
       "label": "Offer a quiet hour",
       "field": "business"
      },
      {
       "label": "Add a booking app",
       "field": "tech"
      },
      {
       "label": "Open earlier",
       "field": "health"
      }
     ]
    },
    {
     "prompt": "How will you know it worked?",
     "options": [
      {
       "label": "Members come back",
       "field": "business"
      },
      {
       "label": "Fewer complaints",
       "field": "psychology"
      },
      {
       "label": "Both, tracked over three months",
       "field": "science"
      }
     ]
    }
   ]
  },
  {
   "id": "fix-the-bug",
   "field": "tech",
   "title": "Fix the Bug",
   "blurb": "Follow clues like a developer to find why something stopped working.",
   "minutes": 5,
   "scene": "A school sign-up form accepts names but never sends the confirmation email. No error shows up.",
   "steps": [
    {
     "prompt": "Where do you look first?",
     "options": [
      {
       "label": "Reproduce it: fill the form in and see when it fails",
       "field": "tech"
      },
      {
       "label": "Check whether other forms send emails fine",
       "field": "science"
      },
      {
       "label": "Ask users what they did just before",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "The email is sent but lands in spam. Best fix?",
     "options": [
      {
       "label": "Fix the cause so emails stop looking like spam",
       "field": "tech"
      },
      {
       "label": "Tell users to check spam",
       "field": "design"
      },
      {
       "label": "Show the confirmation on screen too",
       "field": "design"
      }
     ]
    },
    {
     "prompt": "It works now. How do you stop it breaking again?",
     "options": [
      {
       "label": "Add an automatic test",
       "field": "tech"
      },
      {
       "label": "Write down what went wrong and what fixed it",
       "field": "science"
      },
      {
       "label": "Ask a friend to try it with fresh eyes",
       "field": "design"
      }
     ]
    }
   ]
  },
  {
   "id": "make-it-faster",
   "field": "tech",
   "title": "Make It Faster",
   "blurb": "Find what is slowing something down before you start fixing.",
   "minutes": 5,
   "scene": "The school website takes 12 seconds to load on a phone.",
   "steps": [
    {
     "prompt": "What is your first move?",
     "options": [
      {
       "label": "Measure which part is slow",
       "field": "tech"
      },
      {
       "label": "Ask students what they notice",
       "field": "psychology"
      },
      {
       "label": "Rebuild the whole site",
       "field": "tech"
      }
     ]
    },
    {
     "prompt": "You find the images are huge. Now what?",
     "options": [
      {
       "label": "Shrink them",
       "field": "tech"
      },
      {
       "label": "Remove most of them",
       "field": "design"
      },
      {
       "label": "Load them only when scrolled to",
       "field": "tech"
      }
     ]
    },
    {
     "prompt": "Before calling it done, you would:",
     "options": [
      {
       "label": "Test on an old, slow phone",
       "field": "science"
      },
      {
       "label": "Ask if students still like how it looks",
       "field": "design"
      },
      {
       "label": "Write the steps so the next person can repeat them",
       "field": "tech"
      }
     ]
    }
   ]
  },
  {
   "id": "lock-it-down",
   "field": "tech",
   "title": "Lock It Down",
   "blurb": "Think like a security engineer about everyday habits.",
   "minutes": 4,
   "scene": "Your friend uses the same password everywhere.",
   "steps": [
    {
     "prompt": "What do you explain first?",
     "options": [
      {
       "label": "What happens if one site leaks",
       "field": "tech"
      },
      {
       "label": "That they should change it right now",
       "field": "health"
      },
      {
       "label": "How a password manager works",
       "field": "tech"
      }
     ]
    },
    {
     "prompt": "They say, “Too many to remember.” What helps?",
     "options": [
      {
       "label": "Use a password manager",
       "field": "tech"
      },
      {
       "label": "Use three random words",
       "field": "science"
      },
      {
       "label": "Write them somewhere safe at home",
       "field": "design"
      }
     ]
    },
    {
     "prompt": "Thinking bigger, you would:",
     "options": [
      {
       "label": "Turn on two-step login everywhere",
       "field": "tech"
      },
      {
       "label": "Teach your class",
       "field": "media"
      },
      {
       "label": "Make a one-page guide for the school",
       "field": "business"
      }
     ]
    }
   ]
  },
  {
   "id": "spot-the-pattern",
   "field": "science",
   "title": "Spot the Pattern",
   "blurb": "Look at messy results and decide what you can and cannot say for sure.",
   "minutes": 5,
   "scene": "Students who sleep more got higher scores in your class survey.",
   "steps": [
    {
     "prompt": "What can you say for sure?",
     "options": [
      {
       "label": "The two go together, but sleep may not be the cause",
       "field": "science"
      },
      {
       "label": "Sleep causes better scores",
       "field": "health"
      },
      {
       "label": "Not enough to say without more data",
       "field": "science"
      }
     ]
    },
    {
     "prompt": "How would you test whether sleep really helps?",
     "options": [
      {
       "label": "Compare the same students on short and long sleep weeks",
       "field": "science"
      },
      {
       "label": "Survey many more students",
       "field": "science"
      },
      {
       "label": "Interview students about how they study",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "Your result is the opposite of what you expected. Now what?",
     "options": [
      {
       "label": "Check for mistakes, then trust the data",
       "field": "science"
      },
      {
       "label": "Find out why it might be true",
       "field": "science"
      },
      {
       "label": "Explain the finding so others can use it",
       "field": "media"
      }
     ]
    }
   ]
  },
  {
   "id": "design-the-test",
   "field": "science",
   "title": "Design the Test",
   "blurb": "Plan a fair test so you can trust the answer.",
   "minutes": 5,
   "scene": "You want to find out if music helps you focus.",
   "steps": [
    {
     "prompt": "How do you test it?",
     "options": [
      {
       "label": "Do the same task with and without music",
       "field": "science"
      },
      {
       "label": "Ask classmates what they think",
       "field": "psychology"
      },
      {
       "label": "Read what experts say first",
       "field": "science"
      }
     ]
    },
    {
     "prompt": "What should stay the same?",
     "options": [
      {
       "label": "The task, the time and the place",
       "field": "science"
      },
      {
       "label": "Your mood",
       "field": "psychology"
      },
      {
       "label": "Nothing, real life is messy",
       "field": "health"
      }
     ]
    },
    {
     "prompt": "The result is unclear. What next?",
     "options": [
      {
       "label": "Repeat with more people",
       "field": "science"
      },
      {
       "label": "Say it works and move on",
       "field": "media"
      },
      {
       "label": "Look for what else changed",
       "field": "science"
      }
     ]
    }
   ]
  },
  {
   "id": "read-the-graph",
   "field": "science",
   "title": "Read the Graph",
   "blurb": "Tell what a chart shows from what it only suggests.",
   "minutes": 4,
   "scene": "A graph shows ice-cream sales and sunburns rising together.",
   "steps": [
    {
     "prompt": "What is the most honest reading?",
     "options": [
      {
       "label": "Both rise in summer",
       "field": "science"
      },
      {
       "label": "Ice cream causes sunburn",
       "field": "health"
      },
      {
       "label": "We need more data",
       "field": "science"
      }
     ]
    },
    {
     "prompt": "What could be the hidden factor?",
     "options": [
      {
       "label": "Sunny weather",
       "field": "science"
      },
      {
       "label": "The age of the buyers",
       "field": "psychology"
      },
      {
       "label": "The price",
       "field": "business"
      }
     ]
    },
    {
     "prompt": "How would you share it honestly?",
     "options": [
      {
       "label": "Show both lines and the weather",
       "field": "design"
      },
      {
       "label": "Headline: “Ice cream burns”",
       "field": "media"
      },
      {
       "label": "Leave it out",
       "field": "law"
      }
     ]
    }
   ]
  },
  {
   "id": "first-aid-decision",
   "field": "health",
   "title": "The First Five Minutes",
   "blurb": "Make calm decisions when someone needs help and you are not sure what to do.",
   "minutes": 4,
   "scene": "At practice, a teammate goes pale and sits down suddenly, saying they feel dizzy.",
   "steps": [
    {
     "prompt": "What do you do first?",
     "options": [
      {
       "label": "Stay with them and ask a coach to come",
       "field": "health"
      },
      {
       "label": "Ask what happened just before",
       "field": "science"
      },
      {
       "label": "Keep others calm and give them space",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "The coach asks what you saw. What matters most?",
     "options": [
      {
       "label": "Exactly what happened and when, without guessing",
       "field": "science"
      },
      {
       "label": "How they looked and what they said",
       "field": "health"
      },
      {
       "label": "Anything unusual about today",
       "field": "health"
      }
     ]
    },
    {
     "prompt": "They are okay. What would you want to do next?",
     "options": [
      {
       "label": "Learn first aid for next time",
       "field": "health"
      },
      {
       "label": "Check in with them later this week",
       "field": "psychology"
      },
      {
       "label": "Suggest a plan for the team",
       "field": "business"
      }
     ]
    }
   ]
  },
  {
   "id": "plan-a-week",
   "field": "health",
   "title": "Plan a Week",
   "blurb": "Help someone change a habit without making it feel like a lecture.",
   "minutes": 5,
   "scene": "A teammate is always tired and stressed during exams.",
   "steps": [
    {
     "prompt": "What do you do first?",
     "options": [
      {
       "label": "Ask how they are sleeping and eating",
       "field": "health"
      },
      {
       "label": "Make them a study timetable",
       "field": "business"
      },
      {
       "label": "Listen before suggesting anything",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "They sleep about five hours. What helps?",
     "options": [
      {
       "label": "A simple wind-down routine",
       "field": "health"
      },
      {
       "label": "Cut late screens",
       "field": "design"
      },
      {
       "label": "Track sleep for a week",
       "field": "science"
      }
     ]
    },
    {
     "prompt": "After a week, you would:",
     "options": [
      {
       "label": "Look for patterns",
       "field": "science"
      },
      {
       "label": "Celebrate small wins",
       "field": "psychology"
      },
      {
       "label": "Suggest a school counsellor if needed",
       "field": "health"
      }
     ]
    }
   ]
  },
  {
   "id": "explain-it-clearly",
   "field": "health",
   "title": "Explain It Clearly",
   "blurb": "Make something complicated easy for someone to follow.",
   "minutes": 4,
   "scene": "A grandparent has to take three medicines at different times each day.",
   "steps": [
    {
     "prompt": "How do you help?",
     "options": [
      {
       "label": "Make a simple chart",
       "field": "design"
      },
      {
       "label": "Ask the pharmacist to explain",
       "field": "health"
      },
      {
       "label": "Set phone alarms",
       "field": "tech"
      }
     ]
    },
    {
     "prompt": "They worry about side effects. What do you do?",
     "options": [
      {
       "label": "Listen, then find reliable information together",
       "field": "health"
      },
      {
       "label": "Tell them not to worry",
       "field": "psychology"
      },
      {
       "label": "Print the leaflet",
       "field": "media"
      }
     ]
    },
    {
     "prompt": "Success looks like:",
     "options": [
      {
       "label": "They feel confident",
       "field": "psychology"
      },
      {
       "label": "No missed doses",
       "field": "health"
      },
      {
       "label": "They know who to ask",
       "field": "health"
      }
     ]
    }
   ]
  },
  {
   "id": "the-fair-rule",
   "field": "law",
   "title": "The Fair Rule",
   "blurb": "Weigh two reasonable sides and write a rule you could defend.",
   "minutes": 5,
   "scene": "Your school is debating a phone ban during lunch. Some call it unfair, others say it helps.",
   "steps": [
    {
     "prompt": "What do you want to know first?",
     "options": [
      {
       "label": "What problem the rule is meant to solve",
       "field": "law"
      },
      {
       "label": "Who is affected most, and how",
       "field": "psychology"
      },
      {
       "label": "What happened in other schools",
       "field": "science"
      }
     ]
    },
    {
     "prompt": "A student uses their phone to talk to family. What changes?",
     "options": [
      {
       "label": "The rule needs a clear exception",
       "field": "law"
      },
      {
       "label": "It should apply only in some places",
       "field": "law"
      },
      {
       "label": "Hear more students before deciding",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "You write the final rule. What matters most?",
     "options": [
      {
       "label": "That no one can misread it",
       "field": "law"
      },
      {
       "label": "That the reason is stated",
       "field": "media"
      },
      {
       "label": "That it can be reviewed if it fails",
       "field": "business"
      }
     ]
    }
   ]
  },
  {
   "id": "spot-the-loophole",
   "field": "law",
   "title": "Spot the Loophole",
   "blurb": "See how a small gap in wording changes what a rule means.",
   "minutes": 4,
   "scene": "A library rule says “No food.” Someone arrives with a drink.",
   "steps": [
    {
     "prompt": "What do you do?",
     "options": [
      {
       "label": "Ask what the rule was meant to protect",
       "field": "law"
      },
      {
       "label": "Say drinks are not food",
       "field": "law"
      },
      {
       "label": "Let it go",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "How do you fix the rule?",
     "options": [
      {
       "label": "Define the terms clearly",
       "field": "law"
      },
      {
       "label": "Add examples",
       "field": "media"
      },
      {
       "label": "Ask students what they think",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "Who decides the odd cases?",
     "options": [
      {
       "label": "A named person with a clear process",
       "field": "law"
      },
      {
       "label": "Whoever sees it",
       "field": "business"
      },
      {
       "label": "A vote",
       "field": "law"
      }
     ]
    }
   ]
  },
  {
   "id": "whose-right",
   "field": "law",
   "title": "Whose Right?",
   "blurb": "Balance a rule with a person’s needs and find something fair.",
   "minutes": 5,
   "scene": "A student wants to wear a religious headscarf. The dress code says no hats.",
   "steps": [
    {
     "prompt": "Where do you start?",
     "options": [
      {
       "label": "What the rule is for",
       "field": "law"
      },
      {
       "label": "Listening to the student",
       "field": "psychology"
      },
      {
       "label": "Whether exceptions already exist",
       "field": "law"
      }
     ]
    },
    {
     "prompt": "Both sides seem reasonable. What do you suggest?",
     "options": [
      {
       "label": "An exception with clear limits",
       "field": "law"
      },
      {
       "label": "Change the rule",
       "field": "law"
      },
      {
       "label": "Ask a neutral person to decide",
       "field": "law"
      }
     ]
    },
    {
     "prompt": "How do you announce the update?",
     "options": [
      {
       "label": "Short and clear",
       "field": "law"
      },
      {
       "label": "Warm, with the reason",
       "field": "media"
      },
      {
       "label": "Let students vote on wording",
       "field": "business"
      }
     ]
    }
   ]
  },
  {
   "id": "tell-it-true",
   "field": "media",
   "title": "Tell It True",
   "blurb": "Choose what to keep and what to cut so a story lands without lying.",
   "minutes": 4,
   "scene": "You are making a 30-second video about a local bakery that is closing after 40 years.",
   "steps": [
    {
     "prompt": "What do you start with?",
     "options": [
      {
       "label": "One person, one moment: the owner on the last morning",
       "field": "media"
      },
      {
       "label": "The facts: dates, reasons, what happens next",
       "field": "law"
      },
      {
       "label": "The look: warm light, flour, the sound of the door",
       "field": "design"
      }
     ]
    },
    {
     "prompt": "The owner says something strong but a little unfair to the landlord. What do you do?",
     "options": [
      {
       "label": "Check the facts and ask the landlord for a comment",
       "field": "media"
      },
      {
       "label": "Leave it out to keep the story fair",
       "field": "law"
      },
      {
       "label": "Keep it, and make clear it is their view",
       "field": "media"
      }
     ]
    },
    {
     "prompt": "You are 10 seconds too long. What gets cut?",
     "options": [
      {
       "label": "The explanation, let people feel it first",
       "field": "media"
      },
      {
       "label": "The music, so voices are clear",
       "field": "design"
      },
      {
       "label": "The start, to reach the point faster",
       "field": "business"
      }
     ]
    }
   ]
  },
  {
   "id": "find-the-headline",
   "field": "media",
   "title": "Find the Headline",
   "blurb": "Pull the story out of a long, messy event.",
   "minutes": 4,
   "scene": "You sat through a two-hour school council meeting. What is the story?",
   "steps": [
    {
     "prompt": "What do you look for?",
     "options": [
      {
       "label": "What changes for students",
       "field": "media"
      },
      {
       "label": "Who spoke the longest",
       "field": "media"
      },
      {
       "label": "What was actually agreed",
       "field": "law"
      }
     ]
    },
    {
     "prompt": "Which headline works best?",
     "options": [
      {
       "label": "Lunch will change next month",
       "field": "media"
      },
      {
       "label": "Council meets on Tuesday",
       "field": "law"
      },
      {
       "label": "Students angry about lunch",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "Which photo goes with it?",
     "options": [
      {
       "label": "A student holding a lunch tray",
       "field": "media"
      },
      {
       "label": "The empty meeting room",
       "field": "law"
      },
      {
       "label": "A chart of lunch options",
       "field": "design"
      }
     ]
    }
   ]
  },
  {
   "id": "make-it-stick",
   "field": "media",
   "title": "Make It Stick",
   "blurb": "Get an idea across in fifteen seconds.",
   "minutes": 4,
   "scene": "You have 15 seconds to promote a charity bake sale.",
   "steps": [
    {
     "prompt": "What carries the message?",
     "options": [
      {
       "label": "One strong image",
       "field": "design"
      },
      {
       "label": "One clear line",
       "field": "media"
      },
      {
       "label": "One funny moment",
       "field": "media"
      }
     ]
    },
    {
     "prompt": "What about sound?",
     "options": [
      {
       "label": "Silence and text on screen",
       "field": "design"
      },
      {
       "label": "An upbeat track",
       "field": "media"
      },
      {
       "label": "A real person speaking",
       "field": "psychology"
      }
     ]
    },
    {
     "prompt": "How does it end?",
     "options": [
      {
       "label": "Where and when",
       "field": "business"
      },
      {
       "label": "A question that stays with you",
       "field": "psychology"
      },
      {
       "label": "The logo",
       "field": "design"
      }
     ]
    }
   ]
  }
 ],
 "THEMES": [
  {
   "id": "helping",
   "name": "Helping people",
   "fields": [
    "psychology",
    "health"
   ],
   "line": "You light up around people",
   "phrase": "helping someone"
  },
  {
   "id": "solving",
   "name": "Problem solving",
   "fields": [
    "tech"
   ],
   "line": "You light up solving problems",
   "phrase": "fixing or building something"
  },
  {
   "id": "creating",
   "name": "Creating",
   "fields": [
    "design",
    "media"
   ],
   "line": "You light up when you make things",
   "phrase": "creating something new"
  },
  {
   "id": "leading",
   "name": "Leading",
   "fields": [
    "business",
    "law"
   ],
   "line": "You light up when you take the lead",
   "phrase": "organising or leading"
  },
  {
   "id": "analysing",
   "name": "Analysing",
   "fields": [
    "science"
   ],
   "line": "You light up when you dig into how things work",
   "phrase": "figuring out how things work"
  }
 ],
 "MOODS": [
  [
   "happy",
   "Happy"
  ],
  [
   "good",
   "Good"
  ],
  [
   "okay",
   "Okay"
  ],
  [
   "calm",
   "Calm"
  ],
  [
   "down",
   "Down"
  ]
 ],
 "STORIES": [
  {
   "id": "alex",
   "initials": "AM",
   "name": "Alex M.",
   "meta": "Class of 2022",
   "area": "Engineering",
   "tag": "Tech",
   "color": "reflect",
   "mins": 3,
   "quote": "I changed my mind about my major three times.",
   "teaser": "I changed my mind about my major three times. Here is what I wish I knew in Grade 11.",
   "body": [
    "In Grade 11 I was sure I would do medicine. Then a coding club changed that, and a design class changed it again.",
    "What helped was trying small things, writing down how they felt, and noticing which ones I kept coming back to."
   ]
  },
  {
   "id": "priya",
   "initials": "PK",
   "name": "Priya K.",
   "meta": "Class of 2021",
   "area": "Design",
   "tag": "Design",
   "color": "explore",
   "mins": 4,
   "quote": "Nobody told me you can try a field before you commit to it.",
   "teaser": "Nobody told me you can try a field before you commit to it.",
   "body": [
    "I thought choosing a career meant choosing once, forever. Then a teacher let me shadow a designer for an afternoon.",
    "It was messier than I imagined, and I loved it. One afternoon told me more than a year of guessing."
   ]
  },
  {
   "id": "sam",
   "initials": "JO",
   "name": "Jordan O.",
   "meta": "Class of 2020",
   "area": "Nursing",
   "tag": "Health",
   "color": "grow",
   "mins": 3,
   "quote": "The part I thought I would hate turned out to be my favourite.",
   "teaser": "The part I thought I would hate turned out to be my favourite.",
   "body": [
    "I expected to hate talking to strangers all day. In my first placement I realised those conversations were what I looked forward to.",
    "If I had only gone by what I assumed I liked, I would have missed it."
   ]
  },
  {
   "id": "mei",
   "initials": "ML",
   "name": "Mei L.",
   "meta": "Class of 2022",
   "area": "Software",
   "tag": "Tech",
   "color": "reflect",
   "mins": 4,
   "quote": "I started with one tiny project and a lot of questions.",
   "teaser": "I started with one tiny project and a lot of questions.",
   "body": [
    "My first project was a page that told me what to eat for lunch. It barely worked.",
    "But every time it broke, I learned something. That is when I knew I wanted to keep going."
   ]
  }
 ]
};
