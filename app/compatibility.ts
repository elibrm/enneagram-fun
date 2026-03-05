export interface Tip {
  emoji: string;
  text: string;
}

export interface CompatibilityTip {
  forType1: Tip[];
  forType2: Tip[];
}

export type CompatibilityMap = Record<string, CompatibilityTip>;

export const compatibility: CompatibilityMap = {
  '1-2': {
    forType1: [
      { emoji: '💛', text: "Recognize that Type 2's warmth and generosity come from a genuine place — receive their care graciously rather than viewing it as pressure." },
      { emoji: '🌸', text: "Soften your critical edge; Type 2 is deeply sensitive to disapproval, and a perceived judgment can cause them to withdraw." },
      { emoji: '🤝', text: "Let go of the urge to point out when the Helper's methods could be 'done better' — their way of caring is valid even when different from yours." },
    ],
    forType2: [
      { emoji: '💡', text: "Understand that Type 1's directness isn't rejection — they show love through honest feedback and high standards, not warmth alone." },
      { emoji: '🌿', text: "Give the Reformer space to work through their inner critic without jumping in to help; they need to resolve it themselves." },
      { emoji: '🗣️', text: "Express your own needs clearly and early — the Reformer appreciates directness and won't always intuitively sense what you need." },
    ],
  },
  '1-3': {
    forType1: [
      { emoji: '✨', text: "Appreciate the Achiever's adaptability and results-orientation — not every task requires the 'right way'; sometimes the done way is enough." },
      { emoji: '🕊️', text: "Avoid moralizing about the Three's concern for image; their awareness of perception is part of how they navigate the world." },
      { emoji: '🎉', text: "Celebrate the Three's accomplishments openly — they thrive on recognition and your validation carries special weight." },
    ],
    forType2: [
      { emoji: '🏔️', text: "Honor the Reformer's principled process — cutting corners will erode their trust quickly, even when shortcuts seem efficient." },
      { emoji: '🎯', text: "Be authentic with the One; they are highly sensitive to performance and value integrity over polish." },
      { emoji: '🌟', text: "Acknowledge the Reformer's attention to detail as a genuine strength, even when their perfectionism slows the pace." },
    ],
  },
  '1-4': {
    forType1: [
      { emoji: '🌊', text: "Honor the Four's emotional depth — resist the impulse to 'correct' their feelings or urge them toward positivity." },
      { emoji: '🎨', text: "Let the Individualist's creativity and aesthetic sense enrich you; beauty and meaning matter as much as correctness." },
      { emoji: '👂', text: "Practice listening without problem-solving when the Four shares struggles — presence is often what they need most." },
    ],
    forType2: [
      { emoji: '🛡️', text: "Appreciate the Reformer's consistency and principles — their high standards are a form of care, not control." },
      { emoji: '💡', text: "Try not to interpret the One's factual corrections as emotional rejection; they mean well and can't always read emotional registers." },
      { emoji: '🌱', text: "Ground your creative visions in practical steps that Type 1 appreciates — collaboration deepens when both head and heart are present." },
    ],
  },
  '1-5': {
    forType1: [
      { emoji: '🌿', text: "Respect the Five's need for privacy and withdrawal — it is not rejection; they recharge alone to bring their best thinking back." },
      { emoji: '🔍', text: "Let the Investigator's depth of research inform your standards; their knowledge is an asset, not a challenge to your expertise." },
      { emoji: '🤫', text: "Allow for more silence and less commentary — the Five appreciates thoughtful reflection over immediate reaction." },
    ],
    forType2: [
      { emoji: '🤝', text: "Meet the One's desire for clear agreements and follow-through — reliability signals respect in their world." },
      { emoji: '💬', text: "Share your analysis and conclusions, not just your data — the Reformer wants to understand your reasoning and values transparency." },
      { emoji: '🌱', text: "Acknowledge when the One's moral frameworks have merit, even if they feel rigid; engaging rather than retreating prevents distance." },
    ],
  },
  '1-6': {
    forType1: [
      { emoji: '💛', text: "Understand that the Six's questioning isn't personal doubt in you — they test trustworthiness as a survival strategy; patient reassurance builds the bond." },
      { emoji: '🤝', text: "Be consistent and follow through on your word; nothing builds the Loyalist's trust faster than a One who does what they say." },
      { emoji: '🌸', text: "Soften absolute statements — the Six is attuned to authority and can feel dominated rather than guided by the One's certainty." },
    ],
    forType2: [
      { emoji: '🛡️', text: "Trust the Reformer's intentions — they are not arbitrary with their principles; understanding their 'why' helps reduce your anxiety." },
      { emoji: '🗣️', text: "Speak up directly when you disagree; the One respects honest pushback more than silent compliance followed by resentment." },
      { emoji: '🧭', text: "Channel your preparedness and foresight into shared plans — the Reformer appreciates thoroughness and will see your caution as wisdom." },
    ],
  },
  '1-7': {
    forType1: [
      { emoji: '☀️', text: "Let the Seven's enthusiasm and spontaneity lighten your world — not every departure from the plan is a failure." },
      { emoji: '🌸', text: "Resist overloading the Enthusiast with critique; offer one piece of feedback at a time paired with genuine appreciation." },
      { emoji: '🌈', text: "Find joy in the Seven's wide curiosity — they can reveal delight in the unexpected that perfectionism often screens out." },
    ],
    forType2: [
      { emoji: '🏔️', text: "Honor the Reformer's need for structure and completion — following through on commitments builds enormous trust with a One." },
      { emoji: '🎯', text: "Resist the impulse to reframe difficult things as positives; the One needs you to sit with what's hard, not skip past it." },
      { emoji: '🌟', text: "Show genuine interest in the One's principled work — even small acknowledgments of their effort earn deep goodwill." },
    ],
  },
  '1-8': {
    forType1: [
      { emoji: '💪', text: "Stand your ground with the Eight — they respect conviction and are energized by someone who holds their position calmly." },
      { emoji: '🔍', text: "See the Challenger's bluntness as directness, not attack; meet it with calm clarity rather than defensive withdrawal." },
      { emoji: '🧭', text: "Pick your battles carefully — the Eight needs to feel respected, not lectured; choose confrontations that are truly principle-based." },
    ],
    forType2: [
      { emoji: '🌟', text: "Acknowledge the Reformer's integrity — they are not trying to control you; their rules come from values, not from a power struggle." },
      { emoji: '🌿', text: "Lower the intensity when disagreements arise; the One needs calm conversation, not confrontation, to stay engaged." },
      { emoji: '💡', text: "Trust that the One's critiques are meant constructively — they hold themselves to the same exacting standards they apply to others." },
    ],
  },
  '1-9': {
    forType1: [
      { emoji: '🧘', text: "Don't push the Nine to decide faster than is comfortable — their deliberateness is part of their wisdom, not a flaw." },
      { emoji: '💛', text: "Appreciate how the Peacemaker's calm presence soothes your inner critic and creates a naturally low-stress environment." },
      { emoji: '🌸', text: "Invite, don't demand — the Nine will disengage if they sense the One's perfectionism turning into control." },
    ],
    forType2: [
      { emoji: '🗣️', text: "Gently assert your preferences instead of merging with the One's agenda — your voice matters and the Reformer genuinely wants to hear it." },
      { emoji: '💡', text: "Understand that the One's criticism is aimed at better outcomes, not at diminishing you — try not to internalize it personally." },
      { emoji: '🤝', text: "Show up for commitments reliably; the Reformer's world runs on follow-through, and dependability signals deep respect." },
    ],
  },
  '2-3': {
    forType1: [
      { emoji: '✨', text: "Appreciate that the Three's drive and productivity are how they contribute — not everything needs to become personal warmth." },
      { emoji: '🌿', text: "Resist the impulse to manage the Achiever's schedule or relationships — they need autonomy to feel effective." },
      { emoji: '🗣️', text: "Name your own emotional needs clearly; the Three can miss subtle bids for connection when they are focused on goals." },
    ],
    forType2: [
      { emoji: '💛', text: "Make time for the Helper's emotional world — slowing down for genuine connection is what keeps the Two feeling truly valued." },
      { emoji: '🤗', text: "Receive care without immediately redirecting to a task — the Two needs to feel that their warmth lands, not gets deflected." },
      { emoji: '🎯', text: "Be transparent about your actual feelings; the Two is sensitive to inauthenticity and will sense when you're performing rather than sharing." },
    ],
  },
  '2-4': {
    forType1: [
      { emoji: '🌿', text: "Give the Four space to feel without rushing to comfort or fix — sometimes they need to inhabit an emotion, not escape it." },
      { emoji: '✨', text: "Celebrate the Individualist's uniqueness rather than trying to smooth their edges to make the relationship easier." },
      { emoji: '🎯', text: "Be honest about your own needs without disguising them as help for the Four; they appreciate authenticity over self-sacrifice." },
    ],
    forType2: [
      { emoji: '💛', text: "Receive the Two's care as genuine — not everyone who gives has a hidden agenda; practice accepting help without suspicion." },
      { emoji: '🌟', text: "Acknowledge the Helper's feelings and efforts explicitly; they need to know their care is seen, not taken for granted." },
      { emoji: '🏡', text: "Share the mundane alongside the profound — the Two connects through daily presence, not just peak emotional moments." },
    ],
  },
  '2-5': {
    forType1: [
      { emoji: '🌿', text: "Respect the Five's privacy and solitude — interpret their withdrawal as recharging, not rejection, and resist pursuing too closely." },
      { emoji: '🔍', text: "Let intellectual engagement be a form of connection — the Investigator bonds through ideas as much as through warmth." },
      { emoji: '🤐', text: "Reduce unsolicited advice and help; ask before assisting, as the Five values self-sufficiency highly." },
    ],
    forType2: [
      { emoji: '💛', text: "Make small, consistent gestures of warmth — the Two's need for acknowledgment is real; a little appreciation goes a long way." },
      { emoji: '💬', text: "Try not to disappear completely when overwhelmed; brief communication prevents the Two from spiraling into worry." },
      { emoji: '🤗', text: "Allow yourself to receive care occasionally — letting the Helper in actually strengthens, rather than depletes, your energy." },
    ],
  },
  '2-6': {
    forType1: [
      { emoji: '⚓', text: "Offer steady reassurance without becoming the Six's sole emotional anchor — they also need to develop inner trust." },
      { emoji: '💡', text: "Understand that the Loyalist's questioning isn't about doubting your love — it's their nature to test safety before committing." },
      { emoji: '🌱', text: "Encourage the Six's own problem-solving rather than rushing to solve everything for them." },
    ],
    forType2: [
      { emoji: '🛡️', text: "Trust that the Two's helpfulness is genuine, not manipulative — accept support without immediately looking for strings attached." },
      { emoji: '🌟', text: "Affirm the Helper's efforts and care consistently — they can interpret silence as meaning their love isn't enough." },
      { emoji: '🗣️', text: "Be direct about what you need rather than testing the relationship through indirect signals." },
    ],
  },
  '2-7': {
    forType1: [
      { emoji: '☀️', text: "Match the Seven's lightness with your own — not every moment needs emotional depth; enjoy the adventure together." },
      { emoji: '🌿', text: "Give the Enthusiast room to pursue their many interests without reading absence as abandonment." },
      { emoji: '✨', text: "Celebrate the Seven's generosity and curiosity — they show love through shared experience as much as through direct affirmation." },
    ],
    forType2: [
      { emoji: '🧘', text: "Slow down to be fully present with the Two — they need connection, not just fun, and your focused attention is a true gift." },
      { emoji: '🌟', text: "Acknowledge the Helper's care explicitly and often — they need to hear that their efforts matter, not just enjoy the outcome." },
      { emoji: '🤝', text: "Follow through on emotional commitments; the Two interprets broken promises as evidence they aren't worth staying for." },
    ],
  },
  '2-8': {
    forType1: [
      { emoji: '💪', text: "Stand in your own power with the Eight — match their directness rather than shrinking; they respect strength over appeasement." },
      { emoji: '🌊', text: "Don't try to soften or manage the Eight's anger — create space for it without taking it as a personal attack." },
      { emoji: '🔍', text: "Distinguish between care and control; the Eight will push back hard if they sense they're being handled or managed." },
    ],
    forType2: [
      { emoji: '💛', text: "Recognize that the Two's giving comes from love, not weakness — receive it without suspicion or dismissiveness." },
      { emoji: '🌟', text: "Express appreciation, even briefly — the Helper genuinely needs to know their care is valued, not just accepted in silence." },
      { emoji: '🫂', text: "Lower your guard enough to be vulnerable with the Two; they are trustworthy with tenderness and will honor it." },
    ],
  },
  '2-9': {
    forType1: [
      { emoji: '🗣️', text: "Encourage the Nine to express preferences rather than accommodating everyone — you want their real voice, not endless harmony." },
      { emoji: '💛', text: "Appreciate the Peacemaker's gentle, low-key presence; not every moment of quiet is disconnection." },
      { emoji: '🌿', text: "Resist over-giving to fill the Nine's calm silences — sometimes peace is its own form of gift." },
    ],
    forType2: [
      { emoji: '🗣️', text: "Assert your needs and desires clearly — the Two genuinely wants to help and can only do so if you tell them what you need." },
      { emoji: '🌟', text: "Show appreciation for the Helper's care actively and verbally — small acknowledgments keep them feeling seen and valued." },
      { emoji: '🌈', text: "Bring your full self to the relationship; the Two is hungry for genuine connection, not just peaceful coexistence." },
    ],
  },
  '3-4': {
    forType1: [
      { emoji: '🌊', text: "Make room for the Four's emotional complexity — don't rush them toward resolution; sit with the depth they bring." },
      { emoji: '👂', text: "Resist the urge to rebrand their struggles as opportunities; the Four needs to feel understood before they can be inspired." },
      { emoji: '🎯', text: "Share your own authentic feelings and vulnerabilities — the Individualist craves real connection, not a polished performance." },
    ],
    forType2: [
      { emoji: '✨', text: "Appreciate the Three's genuine competence and drive — their ambition is part of who they are, not a substitute for depth." },
      { emoji: '🌟', text: "Try not to dismiss the Achiever's successes as superficial; what they accomplish can carry real personal meaning." },
      { emoji: '🤝', text: "Show up consistently — the Three needs to know the Four will stay engaged even when things get challenging." },
    ],
  },
  '3-5': {
    forType1: [
      { emoji: '🧘', text: "Honor the Five's need to think before acting — not every decision needs to be made at the pace of your ambition." },
      { emoji: '🔍', text: "Appreciate intellectual depth as a form of excellence; let the Investigator's research inform and elevate your goals." },
      { emoji: '💭', text: "Create space for ideas-only conversations without an agenda or outcome attached — the Five values thinking for its own sake." },
    ],
    forType2: [
      { emoji: '🌟', text: "Acknowledge the Three's achievements genuinely — they need recognition, and a sincere nod from you carries real weight." },
      { emoji: '🤝', text: "Engage with the Achiever's goals rather than retreating into analysis — they value a thinking partner who can also act." },
      { emoji: '💡', text: "Share your expertise openly rather than hoarding it; collaboration helps the Three while keeping you stimulated." },
    ],
  },
  '3-6': {
    forType1: [
      { emoji: '🎯', text: "Be consistent and transparent — the Six needs to trust your motives; any gap between your presentation and reality erodes the relationship." },
      { emoji: '👂', text: "Make time to address the Six's worries directly rather than pivoting to optimism; they need to feel heard, not dismissed." },
      { emoji: '🛡️', text: "Show loyalty through your actions, not just your words — the Loyalist watches what you do over time." },
    ],
    forType2: [
      { emoji: '🛡️', text: "Trust the Three's intentions more than your anxiety tells you to — they want to succeed, and that includes succeeding with you." },
      { emoji: '🔍', text: "Offer your analytical strengths to the Achiever's projects — your ability to spot risks is genuinely useful and appreciated." },
      { emoji: '🌟', text: "Acknowledge the Three's accomplishments openly; your genuine affirmation means a great deal to them." },
    ],
  },
  '3-7': {
    forType1: [
      { emoji: '🌈', text: "Match the Seven's spontaneity sometimes — not everything needs to serve a goal; shared fun builds genuine rapport." },
      { emoji: '🤝', text: "Avoid competing for the spotlight; celebrate each other's wins rather than keeping score." },
      { emoji: '🎯', text: "Be honest about your actual feelings rather than projecting confidence — the Seven responds to authenticity over image." },
    ],
    forType2: [
      { emoji: '💪', text: "Channel your energy into the Three's goals occasionally — following through together builds a bond beyond good times." },
      { emoji: '👂', text: "Don't reframe the Achiever's serious moments as problems to escape; sit with their drive and ambition." },
      { emoji: '🌟', text: "Acknowledge the Three's hard work explicitly — they thrive on recognition and your enthusiasm for their efforts is energizing." },
    ],
  },
  '3-8': {
    forType1: [
      { emoji: '⚡', text: "Match the Eight's directness — they respect people who say what they mean; don't over-polish your message around them." },
      { emoji: '🤝', text: "Don't compete for dominance; align your ambitions so you're driving toward the same target rather than past each other." },
      { emoji: '🎯', text: "Be genuine — the Eight can detect performance and will lose respect quickly if they sense you're managing them." },
    ],
    forType2: [
      { emoji: '✨', text: "Appreciate the Three's ability to read the room and adapt — their social intelligence complements your bold directness." },
      { emoji: '🌿', text: "Dial back the need to dominate every interaction; the Achiever needs to feel like an equal partner, not a subordinate." },
      { emoji: '🎉', text: "Celebrate the Three's wins with genuine enthusiasm — your recognition is powerful precisely because it's rare." },
    ],
  },
  '3-9': {
    forType1: [
      { emoji: '🧘', text: "Slow down to genuinely ask for the Nine's perspective rather than just moving forward — they have wisdom in their stillness." },
      { emoji: '💛', text: "Appreciate the Peacemaker's calming influence as a healthy counterweight to your driven pace." },
      { emoji: '🌟', text: "Give the Nine credit for their contributions, even when those contributions are subtle or behind-the-scenes." },
    ],
    forType2: [
      { emoji: '🤝', text: "Engage with the Three's goals actively — showing genuine interest in what they're building is itself a form of love." },
      { emoji: '💬', text: "Offer your perspective clearly when asked — the Achiever values direct input and benefits from your balanced view." },
      { emoji: '✨', text: "Celebrate the Three's accomplishments with them — they need external acknowledgment and your quiet affirmation is meaningful." },
    ],
  },
  '4-5': {
    forType1: [
      { emoji: '🌿', text: "Respect the Five's boundaries around solitude — don't experience their withdrawal as rejection; it's renewal." },
      { emoji: '🔍', text: "Engage with the Investigator's intellectual interests with genuine curiosity — they bond deeply through shared exploration." },
      { emoji: '🌊', text: "Distinguish between healthy emotional processing and pulling the Five into an emotional vortex they can't navigate." },
    ],
    forType2: [
      { emoji: '🌊', text: "Allow the Four's emotional world to move you — resist the impulse to intellectualize their feelings; sometimes presence is the only response needed." },
      { emoji: '💭', text: "Share your inner world with the Individualist — they long for authentic depth and will treasure your rare disclosures." },
      { emoji: '💛', text: "Make a small gesture of connection before retreating; a brief check-in signals that you haven't disappeared, just stepped away." },
    ],
  },
  '4-6': {
    forType1: [
      { emoji: '🧘', text: "Be patient with the Six's need for reassurance — their questioning isn't distrust of you specifically; it's their anxiety seeking solid ground." },
      { emoji: '⚓', text: "Offer consistency alongside depth — the Loyalist thrives when their world is predictable and their fears are taken seriously." },
      { emoji: '🗣️', text: "Name your emotional states clearly rather than expressing them cryptically — it reduces the Six's anxiety significantly." },
    ],
    forType2: [
      { emoji: '✨', text: "Appreciate the Four's authentic self-expression — their refusal to conform is a form of courage, not instability." },
      { emoji: '🌊', text: "Stay present with the Individualist's emotional depths rather than fleeing when things get intense." },
      { emoji: '💬', text: "Share your fears with the Four openly — they understand vulnerability and won't judge you for anxiety." },
    ],
  },
  '4-7': {
    forType1: [
      { emoji: '☀️', text: "Allow the Seven's lightness to lift you occasionally — not all darkness needs to be explored; shared joy is also meaningful." },
      { emoji: '💡', text: "Resist interpreting the Enthusiast's optimism as denial; they genuinely experience life's brightness and want you to join them." },
      { emoji: '🌈', text: "Find a middle ground: let the Seven accompany your depths while you accompany their heights." },
    ],
    forType2: [
      { emoji: '🛡️', text: "Don't flee from the Four's emotional heaviness — staying present through intensity builds profound trust with them." },
      { emoji: '🌟', text: "Honor the Individualist's need to feel uniquely seen; generic enthusiasm isn't enough, and specificity matters deeply." },
      { emoji: '🔍', text: "Slow down enough to explore what lies beneath the surface — the Four will open up fully when you show you can handle depth." },
    ],
  },
  '4-8': {
    forType1: [
      { emoji: '💡', text: "Trust that the Eight's directness is a form of respect, not cruelty — they engage most fully with those they take seriously." },
      { emoji: '🎯', text: "Meet the Challenger's intensity with your own truth — don't collapse or perform; authentic vulnerability earns their regard." },
      { emoji: '💛', text: "Appreciate the Eight's protectiveness; underneath their toughness is a fierce loyalty to those they love." },
    ],
    forType2: [
      { emoji: '🌊', text: "Honor the Four's emotional complexity — don't dismiss their feelings as drama; their depth is real and their sensitivity is a gift." },
      { emoji: '🫂', text: "Share your own vulnerability with the Individualist; they are trustworthy with tenderness and will not use it against you." },
      { emoji: '🎨', text: "Let the Four's creativity and meaning-making enrich your world — they can help you access emotions you tend to bypass." },
    ],
  },
  '4-9': {
    forType1: [
      { emoji: '💛', text: "Appreciate the Nine's calming presence rather than reading their steadiness as blandness or emotional avoidance." },
      { emoji: '🌸', text: "Invite the Peacemaker into your inner world gradually — they won't push, but they will come in warmly when welcomed." },
      { emoji: '🤗', text: "Recognize that the Nine's gentle acceptance of you is itself a form of deep love, even without dramatic expression." },
    ],
    forType2: [
      { emoji: '⚓', text: "Show up for the Four's emotional intensity without disappearing — your steady presence is exactly what they need." },
      { emoji: '🎨', text: "Let yourself be moved by the Individualist's creative vision; express genuine appreciation for their unique perspective." },
      { emoji: '🗣️', text: "Share your own feelings and preferences clearly — the Four wants to know the real you, not just the harmonious surface." },
    ],
  },
  '5-6': {
    forType1: [
      { emoji: '💬', text: "Offer the Six more of your inner thinking than feels comfortable — sharing your reasoning reduces their anxiety and builds real trust." },
      { emoji: '🤝', text: "Show up consistently and follow through on commitments — reliability is the Six's primary language of trust." },
      { emoji: '💛', text: "Reassure the Loyalist gently when they spiral; a calm, reasoned perspective from you genuinely helps them find ground." },
    ],
    forType2: [
      { emoji: '🛡️', text: "Trust the Five's expertise and let their competence be reassuring rather than distancing." },
      { emoji: '🌿', text: "Give the Investigator space without interpreting it as abandonment — they return from solitude richer and more present." },
      { emoji: '🔍', text: "Ask questions about the Five's inner world with genuine curiosity rather than interrogation — they open up when safety is clear." },
    ],
  },
  '5-7': {
    forType1: [
      { emoji: '💡', text: "Match the Seven's enthusiasm for ideas with your own depth — your expertise elevates their wide-ranging interests." },
      { emoji: '🌈', text: "Venture outside your comfort zone occasionally — the Enthusiast's spontaneity can open doors you'd never find alone." },
      { emoji: '✨', text: "Appreciate the Seven's ability to synthesize quickly, even if their analysis seems shallow; they often see connections you'd miss." },
    ],
    forType2: [
      { emoji: '🧘', text: "Slow down enough to let the Five's depth actually land — their insights require your full attention to absorb." },
      { emoji: '🗓️', text: "Honor the Investigator's need for advance notice; springing plans on them creates anxiety, not excitement." },
      { emoji: '🌿', text: "Resist filling every silence — comfortable quiet is how the Five feels at home, and learning to rest there deepens connection." },
    ],
  },
  '5-8': {
    forType1: [
      { emoji: '💪', text: "Stand your ground when the Eight pushes — they respect those who don't capitulate; a clear, reasoned position earns real respect." },
      { emoji: '⚡', text: "Engage with the Eight's directness without retreating into analysis — they need real-time responses, not delayed memos." },
      { emoji: '🔍', text: "Find ways to apply your expertise to shared challenges — the Challenger values competence above nearly everything." },
    ],
    forType2: [
      { emoji: '🌿', text: "Respect the Five's autonomy and boundaries — forcing entry into their space will cause permanent withdrawal." },
      { emoji: '🧘', text: "Slow down to absorb the Investigator's analysis before acting — their thinking often prevents costly mistakes." },
      { emoji: '🛡️', text: "Create a safe environment for the Five to share ideas — they will contribute their full intelligence only when not under threat." },
    ],
  },
  '5-9': {
    forType1: [
      { emoji: '💛', text: "Appreciate the Nine's accepting presence — their non-intrusiveness is a gift that lets you breathe without obligation." },
      { emoji: '🌸', text: "Gently draw the Peacemaker out; ask for their opinions and wait for the answers — they have wisdom they rarely volunteer." },
      { emoji: '🤗', text: "Show warmth through small, consistent actions rather than grand gestures — the Nine notices and deeply values quiet attentiveness." },
    ],
    forType2: [
      { emoji: '🔍', text: "Engage with the Five's ideas and expertise with genuine curiosity — intellectual conversation is their primary love language." },
      { emoji: '🗣️', text: "Speak up about your own needs and preferences — the Investigator won't read between lines; clarity is kindness." },
      { emoji: '🌊', text: "Allow yourself to be stimulated by the Five's depth — their intensity, though different from your ease, enriches your world." },
    ],
  },
  '6-7': {
    forType1: [
      { emoji: '☀️', text: "Let the Seven's optimism be contagious rather than suspect — their glass-half-full view balances your worst-case thinking." },
      { emoji: '🌈', text: "Engage with the Enthusiast's adventures rather than always running risk analysis first — some joy requires leaping." },
      { emoji: '🌅', text: "Appreciate that the Seven's future-focus can free you from ruminating on fears that may never materialize." },
    ],
    forType2: [
      { emoji: '👂', text: "Acknowledge the Six's fears as real rather than problems to reframe — sitting with their worry before offering solutions builds trust." },
      { emoji: '🤝', text: "Be reliable and follow through — the Loyalist's sense of security depends on people doing what they say they will." },
      { emoji: '🧘', text: "Slow down enough to address concerns directly rather than pivoting to the next exciting plan." },
    ],
  },
  '6-8': {
    forType1: [
      { emoji: '⚡', text: "Match the Eight's directness — passive or indirect communication will lose their respect; say what you mean." },
      { emoji: '🛡️', text: "Trust the Challenger's strength rather than feeling threatened by it — their protection is genuine and fierce once given." },
      { emoji: '💪', text: "Stand your convictions under pressure; the Eight tests loyalty and deeply respects those who hold firm." },
    ],
    forType2: [
      { emoji: '🧘', text: "Be patient with the Six's anxiety — it is not weakness; it is their way of preparing for every contingency." },
      { emoji: '🤝', text: "Follow through on your promises — the Loyalist's trust is built on consistency, and breaking it is hard to repair." },
      { emoji: '🔍', text: "Let the Six's caution temper your impulse to act — their risk-awareness often saves the situation." },
    ],
  },
  '6-9': {
    forType1: [
      { emoji: '⚓', text: "Appreciate the Nine's steadying presence — their calm is not indifference; it is a genuine anchor during anxious moments." },
      { emoji: '🌱', text: "Encourage the Peacemaker to share their actual views rather than just agreeing — their perspective is genuinely valuable." },
      { emoji: '🌸', text: "Be gentle with your warnings and 'what ifs' around the Nine; they can shut down under too much alarm." },
    ],
    forType2: [
      { emoji: '👂', text: "Acknowledge the Six's fears and concerns without dismissing them as overblown — validation reduces their anxiety more than solutions." },
      { emoji: '🗣️', text: "Assert yourself when you have concerns of your own — the Loyalist respects and needs your honest voice." },
      { emoji: '⚓', text: "Show up reliably and consistently — your steady presence is the most powerful gift you can give an anxiety-prone Six." },
    ],
  },
  '7-8': {
    forType1: [
      { emoji: '💪', text: "Hold your position when the Eight pushes back — they are testing, not attacking; your conviction earns their respect." },
      { emoji: '⚡', text: "Match the Challenger's directness — be straight with the Eight even when you soften your message for others." },
      { emoji: '🌈', text: "Channel your optimism productively — help the Eight see possibilities beyond their current position without dismissing their instincts." },
    ],
    forType2: [
      { emoji: '☀️', text: "Allow the Seven's lightness in — not every moment needs intensity; their joy is refreshing, not frivolous." },
      { emoji: '✨', text: "Appreciate the Enthusiast's wide vision — their ability to pivot and reframe helps when you're locked in a fixed position." },
      { emoji: '🌿', text: "Dial back aggression that isn't necessary — the Seven can handle directness but will disengage from sustained dominance." },
    ],
  },
  '7-9': {
    forType1: [
      { emoji: '🧘', text: "Slow down long enough to draw out the Nine's genuine preferences — they have real desires that get buried under accommodation." },
      { emoji: '⚓', text: "Appreciate the Peacemaker's steadiness as a complement to your pace — let their calm slow and ground you." },
      { emoji: '🤝', text: "Include the Nine in plans rather than presenting them as done deals; co-creation deepens their engagement." },
    ],
    forType2: [
      { emoji: '🗣️', text: "Speak up about what you actually want rather than going along — the Seven genuinely enjoys knowing your real preferences." },
      { emoji: '✨', text: "Let yourself be pulled into the Enthusiast's energy — their excitement is an invitation, not an imposition." },
      { emoji: '🌟', text: "Share your own positive visions; when you do, the Seven feels they have a real partner rather than just a passenger." },
    ],
  },
  '8-9': {
    forType1: [
      { emoji: '🌿', text: "Lower the volume around the Nine — intensity that energizes you can cause them to shut down and disengage." },
      { emoji: '👂', text: "Ask for the Peacemaker's perspective and wait for the full answer — they need space to form and express their thoughts." },
      { emoji: '🌟', text: "Appreciate the Nine's ability to see all sides as a genuine asset, not fence-sitting — their mediation is a form of strength." },
    ],
    forType2: [
      { emoji: '🗣️', text: "Share your honest feelings and grievances with the Eight — they need and respect directness, and silence reads as passive aggression." },
      { emoji: '💪', text: "Trust that conflict with the Eight won't destroy the relationship — they are built for it and can handle your pushback." },
      { emoji: '⚡', text: "Match the Challenger's energy when something matters to you — showing up fully engaged earns deep respect from the Eight." },
    ],
  },
};
