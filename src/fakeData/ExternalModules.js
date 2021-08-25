
const backgrounds = [
  'primary',
  'secondary',
  'warning',
  'danger',
  'success',
  'info',
  'dark',
]

const quotes = [
  {
    quote: "Whether you think you can or "+ 
          "you think you can’t, you’re right.",
    quoter: "Henry Ford"
  },
  {
    quote: "I am not a product of my circumstances. I am a product of my decisions.",
    quoter: "Stephen Covey"
  },
  {
    quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
    quoter: "Bill Cosby"
  },
  {
    quote: "The person who says it cannot be done should not interrupt the person who is doing it.",
    quoter: "Chinese Proverb"
  },
  {
    quote: "It’s not the years in your life that count. It’s the life in your years.",
    quoter: "Abraham Lincoln"
  },
  {
    quote: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
    quoter: "Unknown"
  },
  {
    quote: "Education costs money. But then so does ignorance.",
    quoter: "Sir Claus Moser"
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    quoter: "Arthur Ashe"
  },

  {
    quote: "Do what you can, where you are, with what you have.",
    quoter: "Teddy Roosevelt"
  },

  {
    quote: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    quoter: "Bob Dylan"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    quoter: "Conficius"
  },
  {
    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    quoter: "Henry Ford"
  },
  {
    quote: "A truly rich man is one whose children run into his arms when his hands are empty.",
    quoter: "Unknown"
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    quoter: "Napoleon"
  },
  {
    quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    quoter: "Ann Landers"
  },
  {
    quote: "There are no traffic jams along the extra mile.",
    quoter: "Roger Staubach"
  },
  {
    quote: "The two most important days in your life are the day you are born and the day you find out why.",
    quoter: "Mark Twain"
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    quoter: "Florence Nightingale"
  },
  {
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    quoter: "Robert Frost"
  },
  {
    quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    quoter: "Jesus"
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    quoter: "Albert Einstein"
  },
  {
    quote: "If you can dream it, you can achieve it.",
    quoter: "Zig Ziglar"
  },
  {
    quote: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    quoter: "Maimonides"
  },
  {
    quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    quoter: "Plato"
  },
  {
    quote: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    quoter: "Abigail Van Buren"
  }
]

const randoms = ()=>{
  return {
    bg: Math.floor(Math.random()*backgrounds.length),
    qt: Math.floor(Math.random()*quotes.length)
  }
}
const extra = {
  backgrounds,
  randoms,
  quotes
}
export default extra;