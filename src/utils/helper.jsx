const nameList = [
  "Time","Past","Future","Dev","Fly","Flying","Soar","Soaring","Power",
  "Falling","Fall","Jump","Cliff","Mountain","Rend","Red","Blue","Green",
  "Yellow","Gold","Demon","Demonic","Panda","Cat","Kitty","Kitten","Zero",
  "Memory","Trooper","XX","Bandit","Fear","Light","Glow","Tread","Deep",
  "Deeper","Deepest","Mine","Your","Worst","Enemy","Hostile","Force","Video",
  "Game","Donkey","Mule","Colt","Cult","Cultist","Magnum","Gun","Assault",
  "Recon","Trap","Trapper","Redeem","Code","Script","Writer","Near","Close",
  "Open","Cube","Circle","Geo","Genome","Germ","Spaz","Shot","Echo","Beta",
  "Alpha","Gamma","Omega","Seal","Squid","Money","Cash","Lord","King","Duke",
  "Rest","Fire","Flame","Morrow","Break","Breaker","Numb","Ice","Cold","Rotten",
  "Sick","Sickly","Janitor","Camel","Rooster","Sand","Desert","Dessert","Hurdle",
  "Racer","Eraser","Erase","Big","Small","Short","Tall","Sith","Bounty","Hunter",
  "आर्य", "सुरेश", "किरण", "दीपक", "अनु", "राहुल", "अर्जुन", "विक्रम", "नेहा", "प्रीति"
];

export const messageList = [
  "Hello everyone! Hope you’re having a great day.",
  "Good job on that last move, it was really impressive!",
  "Well done! Keep up the amazing work.",
  "Awesome play! You’re getting better and better.",
  "Keep going, don’t stop now! You got this.",
  "Nice move, I didn’t see that coming!",
  "Watch out! Something interesting is about to happen.",
  "Amazing! That was an epic moment for sure.",
  "Unbelievable! I can’t believe you just did that.",
  "Haha! That made me laugh so hard!",
  "LOL, I was not expecting that at all!",
  "Wow, this is getting really intense.",
  "Cool strategy! I might try that next time.",
  "Fantastic work, you’re dominating this round.",
  "Nice shot! Perfect timing and accuracy.",
  "Let's go, we can totally win this together.",
  "Epic! That was one for the highlight reel.",
  "GG everyone, it was a fun match.",
  "No way, that was too close to call!",
  "Oh no! That was a risky move, but it worked.",
  "Yay! Finally, we made it through that level.",
  "Oops! That didn’t go as planned, but keep trying.",
  "Hurry up, time is running out!",
  "Good luck to everyone in the next round.",
  "Nice try! Don’t worry, you’ll get it next time.",
  "Great work so far, keep the momentum going.",
  "Incredible play! You really know what you’re doing.",
  "Sweet! That was an amazing combination move.",
  "Boom! That move was legendary.",
  "Yes! That’s exactly how it should be done.",
  "Haha, gotcha! You didn’t see that coming.",
  "Wow, that was close! Almost didn’t make it.",
  "Keep it up! You’re doing an amazing job.",
  "So fast! I can barely keep up with you.",
  "That’s insane! Truly impressive skills.",
  "Amazing play! You are unstoppable today.",
  "Unstoppable! Nothing can stop this momentum.",
  // Hindi messages
  "बहुत बढ़िया! आपने कमाल कर दिया।",
  "शाबाश! इसी तरह मेहनत करते रहो।",
  "कमाल है! यह वाकई में शानदार है।",
  "जबरदस्त! आप सच में शानदार खेल रहे हो।",
  "धांसू! यह पल यादगार रहेगा।",
  "वाह! यह तो बिल्कुल सही था।",
  "सही पकड़ा! आपकी चाल बहुत तेज़ है।",
  "अरे वाह! यह वाकई में अद्भुत था।",
  "जियो! आप इस खेल के लिए तैयार हैं।",
  "ध्यान रखना! अगला कदम बहुत महत्वपूर्ण है।",
  "Fantastic move! Keep pushing forward, don’t stop now.",
  "Perfect! You handled that situation really well.",
  "You got this! Just stay focused and continue.",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage() {
  return messageList[Math.floor(Math.random() * messageList.length)];
}
