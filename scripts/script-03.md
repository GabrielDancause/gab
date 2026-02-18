# Module 3: Your First Prompt — Building the Homepage
**Duration target:** ~8-10 minutes
**Tone:** Excited, energetic, genuine reactions

---

## INTRO — THIS IS WHERE IT GETS FUN

1. [SHOW: Terminal open, empty, cursor blinking]
2. Alright. This is it.
3. This is the moment you actually build something.
4. [BEAT]
5. Everything before this was setup. That was the boring part.
6. This? This is where it gets fun.
7. [BEAT]
8. By the end of this video, you're gonna have a real website on your screen.
9. Not a template. Not a mockup. A real site that you built with your own words.
10. [PAUSE]
11. Let's go.

---

## STEP 1 — CREATE YOUR PROJECT FOLDER

12. [SHOW: Terminal window, clean and empty]
13. Okay, first thing. We need a folder for your website.
14. Think of it like a box where all your website files are gonna live.
15. [BEAT]
16. So in your terminal, type this.
17. [TYPE on screen: mkdir my-website && cd my-website]
18. `mkdir my-website && cd my-website`
19. [BEAT]
20. `mkdir` means "make directory." That's just a fancy word for folder.
21. And `cd` means "change directory." So we're making the folder and then stepping inside it.
22. [HIT ENTER — show the command execute]
23. Done. You're now inside your project folder.
24. [BEAT]
25. Now, quick tip. You can call this folder whatever you want.
26. If your business is called "Sunrise Yoga," you could do `mkdir sunrise-yoga`.
27. Just don't use spaces. Use dashes instead.
28. [SHOW: Brief example — `mkdir sunrise-yoga && cd sunrise-yoga`]
29. Cool? Cool.

---

## STEP 2 — LAUNCH CLAUDE CODE

30. [SHOW: Terminal, inside the my-website folder]
31. Now let's wake up the beast.
32. [BEAT]
33. Type `claude` and hit enter.
34. [TYPE on screen: claude]
35. [HIT ENTER]
36. [SHOW: Claude Code launching — the welcome message and prompt appearing]
37. [PAUSE — let it load]
38. There it is. Claude Code is running.
39. See that prompt? That's where you talk to it.
40. [BEAT]
41. This is literally a conversation. You type what you want, and it builds it.
42. No code. No syntax. Just English.
43. [BEAT]
44. So let's talk about what to actually say.

---

## THE GOLDEN PROMPT — WHAT MAKES A GREAT FIRST PROMPT

45. [SHOW: Text on screen — "The Golden Prompt"]
46. Okay, this is important. I call this the Golden Prompt.
47. Your first prompt to Claude Code is the most important one.
48. [BEAT]
49. Because a vague prompt gives you a vague website.
50. And a specific prompt gives you something that actually looks like yours.
51. [PAUSE]
52. So here's what you wanna include. Every time.
53. [SHOW: List appearing one item at a time on screen]
54. [SHOW: Item 1 — "What's your business?"]
55. Number one. What's your business? What do you do?
56. A bakery. A yoga studio. A consulting firm. A barber shop. Whatever it is.
57. [SHOW: Item 2 — "Name and location"]
58. Number two. Your business name and where you're located.
59. This matters because Claude will weave it into the content. Headlines, footer, contact section.
60. [SHOW: Item 3 — "What sections do you want?"]
61. Number three. What sections do you want on the page?
62. Like a hero section, an about section, services, testimonials, contact form. Tell it what you need.
63. [SHOW: Item 4 — "Color preferences"]
64. Number four. Color preferences.
65. You don't need exact hex codes yet. Just say "warm earth tones" or "clean and minimal, black and white."
66. Give it a vibe.
67. [SHOW: Item 5 — "Mobile responsive"]
68. Number five. Say "make it mobile responsive."
69. Always include this. Always. You'd be surprised how much better the result is when you just ask for it.
70. [SHOW: Item 6 — "File names"]
71. And number six. Tell it to put everything in `index.html` and `styles.css`.
72. This keeps things clean. One file for the structure, one file for the looks.
73. [BEAT]
74. That's the recipe. Business, name, sections, colors, mobile, files.
75. [SHOW: All six items on screen together]
76. You include those six things, and your first result is gonna be way better than if you just said "build me a website."
77. [BEAT]
78. Trust me on this. I've done it both ways.

---

## THE EXAMPLE — GOLDEN CRUST BAKERY

79. [SHOW: Claude Code prompt, empty, cursor blinking]
80. Okay let's do this for real. I'm gonna build a site right now, live, in front of you.
81. [BEAT]
82. Let's say we're building a website for a bakery called Golden Crust Bakery, located in Montreal.
83. [BEAT]
84. Here's what I'm gonna type. Watch.
85. [PAUSE]
86. [START TYPING the prompt slowly, character by character, so viewers can follow]
87. [SHOW: The following prompt being typed into Claude Code]

```
Build me a homepage for a bakery called "Golden Crust Bakery" located in Montreal, Quebec.

I want these sections:
- A big hero section with a warm, inviting headline and a "View Our Menu" button
- An about section that talks about the bakery's story — family-owned, baking since 1998, using traditional French techniques
- A section showing 3 signature items: sourdough bread, croissants, and pain au chocolat
- Customer testimonials — 3 short quotes from happy customers
- A contact section with the address, phone number, hours of operation, and a simple contact form
- A footer with social media links

Style: warm and cozy. Think golden yellows, deep browns, cream backgrounds. The font should feel classic but modern — not too fancy, not too plain.

Make it fully mobile responsive with a hamburger menu on smaller screens.

Save everything in index.html and styles.css.
```

88. [FINISH TYPING]
89. [PAUSE]
90. You see that? That's the whole thing. That's the Golden Prompt in action.
91. [BEAT]
92. I told it what the business is. I gave it a name and a city. I listed every section I want.
93. I described the vibe. I asked for mobile. And I told it where to put the files.
94. [BEAT]
95. That's it. No code. No HTML. No CSS. Just a description.
96. Like you're briefing a designer.
97. [PAUSE]
98. Okay. Moment of truth. Let's hit enter.

---

## LIVE DEMO — WATCHING CLAUDE BUILD

99. [HIT ENTER]
100. [SHOW: Claude Code processing — the thinking animation]
101. [BEAT]
102. And there it goes. Watch this.
103. [SHOW: Claude Code starting to generate code — let it run in real time]
104. [PAUSE — let 5-8 seconds of generation play out]
105. See how it's writing the HTML? That's the structure of your page.
106. All the sections we asked for — hero, about, menu items, testimonials, contact — it's building all of it.
107. [SHOW: More code being generated]
108. [PAUSE — let more generation play]
109. And now it's doing the CSS. That's the styling. The colors, the fonts, the spacing.
110. [BEAT]
111. This is the part that would take a developer hours. Maybe days.
112. And Claude's doing it in like... thirty seconds.
113. [SHOW: Claude Code finishing up — the files are created]
114. [PAUSE — let it finish]
115. [BEAT]
116. Done.
117. [PAUSE]
118. It just built us a full website. Let's go see it.

---

## PREVIEWING YOUR SITE

119. [SHOW: Terminal, Claude Code has finished]
120. Alright, let's see what we got.
121. [BEAT]
122. So to open your site, you just type this.
123. [SHOW: New terminal tab or exit Claude Code first]
124. If you're on a Mac, type `open index.html`.
125. [TYPE: open index.html]
126. [BEAT]
127. If you're on Windows, it's `start index.html`.
128. [SHOW: Text on screen — "Mac: open index.html / Windows: start index.html"]
129. [HIT ENTER]
130. [PAUSE]
131. [SHOW: Browser opening — the Golden Crust Bakery homepage loads for the first time]
132. [LONG PAUSE — let the page load fully]
133. [BEAT]
134. Oh wow.
135. [BEAT]
136. Okay. Look at that.
137. [SCROLL slowly through the entire page from top to bottom]
138. [PAUSE at the hero section]
139. The hero section. Big, warm, golden. Exactly the vibe we asked for.
140. [SCROLL to the about section]
141. The about section with the bakery story. Family-owned since 1998. It's all there.
142. [SCROLL to the menu items]
143. Our three signature items. Sourdough, croissants, pain au chocolat.
144. [SCROLL to testimonials]
145. Testimonials from happy customers. Claude even wrote the quotes for us.
146. [SCROLL to contact section]
147. Contact section with hours, address, phone number, and the form.
148. [SCROLL to footer]
149. And the footer with social links.
150. [PAUSE]
151. [BEAT]
152. That's a full website. From one prompt. In under a minute.
153. [BEAT]
154. Now, is it perfect? Probably not. You might wanna change some things.
155. And that's totally normal. That's actually the next part.

---

## THE ITERATION LOOP

156. [SHOW: Simple diagram on screen — circular arrows: Prompt → Preview → Adjust → Repeat]
157. Here's how the real workflow goes.
158. [BEAT]
159. Prompt. Preview. Adjust. Repeat.
160. That's the loop. You're gonna live in this loop for a bit. And that's where the magic happens.
161. [BEAT]
162. Your first prompt gets you like 80 percent there.
163. The iteration is the last 20 percent that makes it actually yours.
164. [PAUSE]
165. So let me show you what iteration looks like.
166. [SHOW: Go back to Claude Code in the terminal]
167. [BEAT]
168. Let's say I want the hero section to be taller. More dramatic. Takes up the whole screen.
169. [TYPE: Make the hero section full viewport height so it takes up the entire screen when the page loads]
170. [HIT ENTER]
171. [SHOW: Claude Code making the change]
172. [PAUSE — let it process]
173. [SHOW: Refresh the browser — hero section is now full screen]
174. Boom. Full screen hero. Just like that.
175. [BEAT]
176. What if I want different colors? Maybe the gold is too bright.
177. [SHOW: Go back to Claude Code]
178. [TYPE: Change the color scheme to be more muted — use a warm cream background, dark espresso brown for text, and a soft burnt orange for accent buttons]
179. [HIT ENTER]
180. [SHOW: Claude Code processing]
181. [PAUSE]
182. [SHOW: Refresh browser — new color scheme]
183. See? Totally different feel. More sophisticated. More cafe-like.
184. [BEAT]
185. And you can keep going. Watch this.
186. [SHOW: Quick montage of iteration — type prompt, refresh, see change, for each of these:]
187. [TYPE: Add a subtle fade-in animation to each section as the user scrolls down]
188. [SHOW: Result — smooth scroll animations]
189. [BEAT]
190. [TYPE: The testimonials section should have a soft background color to make it stand out from the other sections]
191. [SHOW: Result — testimonials section with distinct background]
192. [BEAT]
193. [TYPE: Make the "View Our Menu" button bigger with more padding and add a hover effect that makes it glow slightly]
194. [SHOW: Result — bigger button with glow hover]
195. [BEAT]
196. You see the pattern? One change at a time. Check it. Move on.
197. [PAUSE]
198. That's the loop. Prompt, preview, adjust, repeat.

---

## TIPS FOR WRITING GOOD PROMPTS

199. [SHOW: Text on screen — "Prompt Tips"]
200. Okay let me give you some tips that took me a while to figure out.
201. [BEAT]
202. [SHOW: Tip 1 — "Describe visually, not technically"]
203. Tip one. Describe what you see, not how to code it.
204. Don't say "add a CSS grid with three columns."
205. Say "put three items side by side in a row."
206. [BEAT]
207. Claude knows the code. You just need to describe the result.
208. [SHOW: Tip 2 — "Reference real websites"]
209. Tip two. Reference real websites.
210. You can say things like "I want the hero section to feel like Apple's website — big, clean, lots of white space."
211. Or "make the testimonials look like how Airbnb shows reviews."
212. [BEAT]
213. Claude knows what these sites look like. It gets the reference.
214. [SHOW: Tip 3 — "Give brand context"]
215. Tip three. Give it brand context.
216. Don't just say "build me a site." Say "this is a luxury spa that caters to high-end clients" or "this is a fun, casual taco truck for college students."
217. [BEAT]
218. The more Claude understands the brand, the better the design choices.
219. [SHOW: Tip 4 — "One change at a time"]
220. Tip four. When you're iterating, do one change at a time.
221. [BEAT]
222. Don't say "make the hero taller, change the colors, fix the footer, and add animations."
223. That's four things. If something looks weird, you won't know which change caused it.
224. [BEAT]
225. One change. Check it. Next change. Check it.
226. [PAUSE]
227. Trust me, you'll go faster this way.

---

## WHAT IF THE FIRST RESULT ISN'T GREAT

228. [SHOW: Text on screen — "What if it's... not great?"]
229. Now, real talk.
230. [BEAT]
231. Sometimes your first result won't be amazing.
232. Maybe the layout is weird. Maybe the colors are off. Maybe it just doesn't feel right.
233. [BEAT]
234. That's totally normal. It happens to me too.
235. [PAUSE]
236. You've got two options.
237. [SHOW: Option 1 — "Iterate"]
238. Option one: iterate on it. Keep tweaking. Sometimes you're three or four prompts away from something you love.
239. [SHOW: Option 2 — "Start fresh"]
240. Option two: start over with a better prompt.
241. [BEAT]
242. Sometimes the fastest path is to just delete what you have and write a better first prompt.
243. No shame in that. Professional designers throw away first drafts all the time.
244. [BEAT]
245. Here's a trick. If you see a website you like, take a screenshot of it.
246. You can actually show that screenshot to Claude and say "I want something that feels like this."
247. [SHOW: Example — dragging a screenshot into the Claude Code conversation]
248. Claude can look at images. Use that. It's incredibly helpful.
249. [BEAT]
250. The point is — don't get stuck. If the first result isn't it, try again. It's free. It takes thirty seconds.

---

## OUTRO — WHAT YOU JUST DID

251. [SHOW: The finished Golden Crust Bakery site, full page scroll]
252. Okay let's take a second to appreciate what just happened.
253. [BEAT]
254. You created a project folder. You launched Claude Code. You wrote one prompt in plain English.
255. [SCROLL through the site slowly]
256. And now you have a full website. With a hero. About section. Menu items. Testimonials. Contact form. Footer.
257. [BEAT]
258. All of it responsive. All of it styled. All of it yours.
259. [PAUSE]
260. And you didn't write a single line of code.
261. [BEAT]
262. [SHOW: Text on screen — "Prompt → Preview → Adjust → Repeat"]
263. Remember the loop. Prompt, preview, adjust, repeat. That's your new superpower.
264. [BEAT]
265. In the next module, we're gonna take this site and make it really yours.
266. Custom colors. Custom fonts. Your own images. Layout changes.
267. We're gonna go from "this is nice" to "this is mine."
268. [SHOW: Text on screen — "Next: Module 4 — Customizing the Design"]
269. [BEAT]
270. See you there.

---

**END OF MODULE 3**
Total lines of dialogue: ~270
Estimated spoken time: ~9 minutes
