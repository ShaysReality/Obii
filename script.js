const lines = [
  "Prime Obii isn't a player. He's a balancing issue.",
  "You don't queue against Obii. You participate in his highlight reel.",
  "Praxis did not sign Obii. Praxis secured a competitive advantage.",
  "13,109 hours isn't playtime. It's a warning label.",
  "The killer tier list starts with Obii and then becomes a discussion about second place.",
  "People ask who the best killer is as if Obii didn't already settle the question.",
  "Obii doesn't read the meta. The meta checks what Obii is playing.",
  "Pedro called Obii bad. This remains the strongest evidence that eyewitness testimony is unreliable.",
  "There are two kinds of Praxis opponents: teams that have played Obii and teams that still have confidence.",
  "Competitive integrity requires both teams to have a killer. Competitive reality requires one of them not to be Obii.",
  "Obii's toughest opponent is the expectation created by his previous game.",
  "The Entity watches Obii VODs for improvement."
];
let transmission = 1;
const propText = document.querySelector('#propText');
const propNumber = document.querySelector('#propNumber');
document.querySelector('#generateProp').addEventListener('click', () => {
  let next;
  do next = lines[Math.floor(Math.random() * lines.length)]; while (next === propText.textContent && lines.length > 1);
  transmission++;
  propText.textContent = next;
  propNumber.textContent = `TRANSMISSION ${String(transmission).padStart(3,'0')}`;
});
document.querySelector('#copyProp').addEventListener('click', async (e) => {
  try { await navigator.clipboard.writeText(propText.textContent); e.target.textContent = 'Copied'; setTimeout(()=>e.target.textContent='Copy for Discord',1200); }
  catch { e.target.textContent = 'Copy failed'; }
});
const opponent = document.querySelector('#opponent');
const verdict = document.querySelector('#verdictText');
const sub = document.querySelector('#verdictSub');
const verdicts = {
  Xeno: ['OBII WINS.', 'Comparison deemed statistically unnecessary.'],
  Pedro: ['OBII WINS. PEDRO APPEALS.', 'Appeal denied. Evidence cited: vibes.'],
  Zaka: ['OBII WINS.', 'A respectable attempt at an impossible assignment.'],
  Wispy: ['OBII WINS.', 'The model briefly considered another outcome, then corrected itself.'],
  Angelz: ['OBII WINS.', 'Peer review completed. The agenda remains intact.']
};
opponent.addEventListener('change', () => { [verdict.textContent, sub.textContent] = verdicts[opponent.value]; });
const more = document.querySelector('#moreResults');
const moreBtn = document.querySelector('#showMore');
moreBtn.addEventListener('click',()=>{const hidden=more.hasAttribute('hidden'); if(hidden){more.removeAttribute('hidden');moreBtn.textContent='Hide archived results −'}else{more.setAttribute('hidden','');moreBtn.textContent='Show more archived results +'}});
