const quotes = [
    { text: "Diligence is the mother of good luck.", author: "Benjamin Franklin" },
    { text: "Well done is better than well said.", author: "Benjamin Franklin" },
    { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
    { text: "Lost time is never found again.", author: "Benjamin Franklin" },
    { text: "You may delay, but time will not.", author: "Benjamin Franklin" },

    { text: "Nothing great was ever achieved without enthusiasm.", author: "Ralph Waldo Emerson" },
    { text: "The reward of a thing well done is having done it.", author: "Ralph Waldo Emerson" },
    { text: "All life is an experiment.", author: "Ralph Waldo Emerson" },
    { text: "Hitch your wagon to a star.", author: "Ralph Waldo Emerson" },
    { text: "Adopt the pace of nature: her secret is patience.", author: "Ralph Waldo Emerson" },

    { text: "Go confidently in the direction of your dreams.", author: "Henry David Thoreau" },
    { text: "Things do not change; we change.", author: "Henry David Thoreau" },
    { text: "Live your beliefs and you can turn the world around.", author: "Henry David Thoreau" },
    { text: "Goodness is the only investment that never fails.", author: "Henry David Thoreau" },
    { text: "It's not what you look at that matters, it's what you see.", author: "Henry David Thoreau" },

    { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
    { text: "I will prepare and some day my chance will come.", author: "Abraham Lincoln" },
    { text: "I am a slow walker, but I never walk back.", author: "Abraham Lincoln" },
    { text: "You cannot escape the responsibility of tomorrow by evading it today.", author: "Abraham Lincoln" },
    { text: "My great concern is not whether you have failed, but whether you are content with your failure.", author: "Abraham Lincoln" },

    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
    { text: "It is hard to fail, but it is worse never to have tried to succeed.", author: "Theodore Roosevelt" },
    { text: "The credit belongs to the man who is actually in the arena.", author: "Theodore Roosevelt" },

    { text: "Never, never, never give up.", author: "Winston Churchill" },
    { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
    { text: "Attitude is a little thing that makes a big difference.", author: "Winston Churchill" },
    { text: "To improve is to change; to be perfect is to change often.", author: "Winston Churchill" },
    { text: "You have enemies? Good. That means you've stood up for something.", author: "Winston Churchill" },

    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Alone we can do so little; together we can do so much.", author: "Helen Keller" },
    { text: "Optimism is the faith that leads to achievement.", author: "Helen Keller" },
    { text: "Keep your face to the sunshine and you cannot see a shadow.", author: "Helen Keller" },
    { text: "Character cannot be developed in ease and quiet.", author: "Helen Keller" },

    { text: "Progress is impossible without change.", author: "George Bernard Shaw" },
    { text: "The possibilities are numerous once we decide to act.", author: "George Bernard Shaw" },
    { text: "Don't wait for the right opportunity: create it.", author: "George Bernard Shaw" },
    { text: "Those who cannot change their minds cannot change anything.", author: "George Bernard Shaw" },
    { text: "You see things; and you say 'Why?' But I dream things that never were; and I say 'Why not?'", author: "George Bernard Shaw" },

    { text: "We know what we are, but know not what we may be.", author: "William Shakespeare" },
    { text: "Our doubts are traitors, and make us lose the good we oft might win.", author: "William Shakespeare" },
    { text: "It is not in the stars to hold our destiny but in ourselves.", author: "William Shakespeare" },
    { text: "To thine own self be true.", author: "William Shakespeare" },
    { text: "Sweet are the uses of adversity.", author: "William Shakespeare" },

    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Courage is resistance to fear, mastery of fear.", author: "Mark Twain" },
    { text: "The best way to cheer yourself is to try to cheer someone else up.", author: "Mark Twain" },
    { text: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", author: "Mark Twain" },
    { text: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },

    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "It is in your hands to make a better world for all who live in it.", author: "Nelson Mandela" },
    { text: "A winner is a dreamer who never gives up.", author: "Nelson Mandela" },

    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Don't let the noise of others' opinions drown out your own inner voice.", author: "Steve Jobs" },

    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "The purpose of life is to live it, to taste experience to the utmost.", author: "Eleanor Roosevelt" },
    { text: "You must do the thing you think you cannot do.", author: "Eleanor Roosevelt" },

    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas Edison" },
    { text: "Our greatest weakness lies in giving up.", author: "Thomas Edison" },
    { text: "Everything comes to him who hustles while he waits.", author: "Thomas Edison" },
    { text: "Many of life's failures are people who did not realize how close they were to success.", author: "Thomas Edison" },

    { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi" },

    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "I skate to where the puck is going to be, not where it has been.", author: "Wayne Gretzky" },
    { text: "A good hockey player plays where the puck is. A great hockey player plays where the puck is going to be.", author: "Wayne Gretzky" },
    { text: "The highest compliment that you can pay me is to say that I work hard every day.", author: "Wayne Gretzky" },
    { text: "When you win, say nothing. When you lose, say less.", author: "Paul Brown" },

    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "There are far, far better things ahead than any we leave behind.", author: "C.S. Lewis" },
    { text: "Courage, dear heart.", author: "C.S. Lewis" },
    { text: "You can never get a cup of tea large enough or a book long enough to suit me.", author: "C.S. Lewis" },

    { text: "The future belongs to those who prepare for it today.", author: "Malcolm X" },
    { text: "Education is the passport to the future.", author: "Malcolm X" },
    { text: "The ability to read awoke inside me some long dormant craving to be mentally alive.", author: "Malcolm X" },
    { text: "Without education, you are not going anywhere in this world.", author: "Malcolm X" },
    { text: "Truth is on the side of the oppressed.", author: "Malcolm X" },

    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Nothing is so fatiguing as the eternal hanging on of an uncompleted task.", author: "William James" },
    { text: "The greatest use of life is to spend it for something that will outlast life.", author: "William James" },
    { text: "Begin to be now what you will be hereafter.", author: "William James" },
    { text: "Most people live, whether physically, intellectually or morally, in a very restricted circle of their potential being.", author: "William James" },

    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "When I let go of what I am, I become what I might be.", author: "Lao Tzu" },
    { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { text: "Mastering others is strength; mastering yourself is true power.", author: "Lao Tzu" },
    { text: "He who conquers others is strong; he who conquers himself is mighty.", author: "Lao Tzu" }
];

let lastIndex = -1;

function getQuote() {

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    document.getElementById("quote").innerText =
        quotes[randomIndex].text;

    document.getElementById("author").innerText =
        "— " + quotes[randomIndex].author;
}

getQuote();