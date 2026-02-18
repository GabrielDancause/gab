# Module 5: Adding Pages & Navigation
**Duration target:** ~8-10 minutes
**Tone:** Building momentum, "look how fast this is going"

---

## INTRO — YOUR SITE IS ABOUT TO FEEL REAL

1. [SHOW: Text on screen — "Module 5: Adding Pages & Navigation"]
2. Okay. So you've got a homepage. It looks good.
3. But right now it's just... one page.
4. [BEAT]
5. That's like having a store with one room. You need more space.
6. [SHOW: The current single-page site in the browser]
7. In this module, we're gonna turn your one-page site into a real multi-page website.
8. About page. Contact page. Navigation that ties it all together.
9. [BEAT]
10. And I want you to notice something as we go through this.
11. Notice how fast it happens.
12. [PAUSE]
13. Because it's gonna be scary fast.

---

## WHY MULTI-PAGE — THE CASE FOR EXPANDING

14. [SHOW: Text on screen — "Why Multiple Pages?"]
15. So first, why bother? Why not just put everything on one page?
16. [BEAT]
17. A few reasons.
18. [SHOW: Text appearing one at a time — "Organization"]
19. One. Organization. When everything's on one page, it gets cluttered. People scroll forever and give up.
20. [SHOW: Text appearing — "Room to breathe"]
21. Two. Room to breathe. Each page gets its own purpose. Your about page is about your story. Your contact page is about reaching you. Clean and simple.
22. [SHOW: Text appearing — "More professional"]
23. Three. It just looks more professional. When someone sees a nav bar with multiple pages, they think "okay, this is a real business."
24. [SHOW: Text appearing — "Better SEO"]
25. And four. Better SEO. That's search engine optimization. Basically, Google likes multi-page sites. More pages means more chances to show up in search results.
26. [BEAT]
27. So yeah. Multiple pages. Let's do it.

---

## CREATING THE ABOUT PAGE

28. [SHOW: Terminal with Claude Code open in the project folder]
29. Alright, let's start with the About page. This is where people learn who you are.
30. [BEAT]
31. Now, the key here — and this is important — is telling Claude to match the design you already have.
32. If you don't say that, it might give you a completely different-looking page. And that's weird.
33. [BEAT]
34. [SHOW: Terminal — cursor ready for input]
35. Here's the prompt I want you to use. I'll go through it, then you can type yours.
36. [PAUSE]
37. [SHOW: The full prompt appearing on screen as Gab reads it, highlighting each section]
38. "Create an about.html page that matches the exact same design, fonts, colors, and style as my index.html. Include a hero banner at the top with a background image and the heading 'About Us.' Below that, add a section about the bakery's history — say we started in two thousand fifteen as a small family kitchen and grew from there. Make up two or three paragraphs of backstory that sound warm and personal. Then add a team section showing three team members in a grid — each with a placeholder image circle, their name, their role, and a short bio. Use the names Maria, James, and Sofia. Finally, add a values section with three or four values like 'Fresh Ingredients,' 'Community First,' 'Made With Love' — each with a small icon and a short description. Link the same styles.css file."
39. [BEAT]
40. [SHOW: Terminal — typing the prompt into Claude Code]
41. That's a big prompt. And that's on purpose.
42. The more detail you give, the better the result.
43. [BEAT]
44. [SHOW: Claude Code generating the about.html file — code scrolling]
45. Look at it go. It's writing the entire page.
46. [BEAT]
47. [SHOW: Browser — open about.html, scroll through it]
48. And there it is. A full About page. Hero banner. History section. Team members. Values.
49. [BEAT]
50. And look — it matches the homepage. Same fonts. Same colors. Same vibe.
51. That's because we told it to.
52. [PAUSE]
53. Now obviously, you're not building a bakery. Swap out the details for your business. But the structure is the same.

---

## CREATING THE CONTACT PAGE

54. [SHOW: Text on screen — "Contact Page"]
55. Next up. Contact page.
56. [BEAT]
57. [SHOW: Terminal — cursor ready]
58. Here's the prompt.
59. [SHOW: The full prompt appearing on screen as Gab reads it]
60. "Create a contact.html page that matches the same design as index.html. Include a hero banner with the heading 'Get In Touch.' Below that, create a two-column layout. Left column should have a contact form with fields for name, email, phone number, and a message textarea, plus a Send Message button. Right column should have our address at one two three Main Street, Anytown, followed by our phone number, our email address, and our business hours — Monday to Friday nine to six, Saturday ten to four, closed Sunday. Below the address info, add small social media icons linking to Facebook, Instagram, and Twitter. At the bottom of the page, embed a Google Maps iframe showing a location. Link the same styles.css file."
61. [BEAT]
62. [SHOW: Terminal — typing the prompt into Claude Code]
63. Same idea. Lots of detail. Tell it exactly what you want.
64. [SHOW: Claude Code generating contact.html]
65. [BEAT]
66. [SHOW: Browser — open contact.html, scroll through it]
67. Beautiful. Contact form on the left. Info on the right. Map at the bottom.
68. [BEAT]
69. [SHOW: Highlight the contact form — cursor clicking in the fields]
70. Now I need to tell you something important about this form.
71. [BEAT]
72. It looks great. You can type in it. You can click the button.
73. But right now? It doesn't actually send emails.
74. [SHOW: Text on screen — "Form looks great. Doesn't send yet."]
75. It's just HTML. There's no backend wired up to receive those messages.
76. [BEAT]
77. Don't worry about that right now. We'll cover how to make it actually work in a later module.
78. For now, just know it looks professional and it's ready to be connected.
79. [BEAT]
80. Cool? Cool.

---

## ADDING NAVIGATION TO ALL PAGES

81. [SHOW: Text on screen — "Navigation"]
82. Okay, now here's where it all comes together. Navigation.
83. [BEAT]
84. Right now you've got three pages. But there's no way to get between them.
85. [SHOW: Browser — on about.html, no nav bar visible]
86. If someone lands on your About page, they can't get to your homepage. That's a problem.
87. [BEAT]
88. So we need a nav bar. On every page. That links everything together.
89. [SHOW: Terminal — cursor ready]
90. And here's the important part. We need to update ALL pages at once.
91. [BEAT]
92. Here's the prompt.
93. [SHOW: The full prompt appearing on screen as Gab reads it]
94. "Add a navigation bar to ALL of my pages — index.html, about.html, and contact.html. The nav bar should have the business logo or name on the left and navigation links on the right. The links should be Home, About, and Contact. The nav should be sticky so it stays at the top when you scroll. Add an active state so the current page's link is highlighted. And on mobile, collapse the links into a hamburger menu icon that opens and closes when tapped. Make sure the nav looks the same on every page."
95. [BEAT]
96. [SHOW: Terminal — typing the prompt into Claude Code]
97. Notice I said ALL pages. That's crucial. If you just say "add a nav bar," Claude might only add it to one page.
98. [BEAT]
99. You gotta be explicit. All pages. Same nav. Same look.
100. [SHOW: Claude Code working — updating multiple files]
101. See how it's updating index.html, about.html, AND contact.html? That's what we want.
102. [BEAT]
103. [SHOW: Browser — refresh index.html, nav bar is now visible at the top]
104. There it is. Logo on the left. Links on the right.
105. [SHOW: Click on "About" in the nav — navigates to about.html]
106. Click About. Boom. About page. And look — the About link is highlighted. That's the active state.
107. [SHOW: Click on "Contact" in the nav — navigates to contact.html]
108. Click Contact. Contact page. Contact link is highlighted.
109. [SHOW: Click on "Home" in the nav — back to index.html]
110. Back to Home. Home is highlighted.
111. [BEAT]
112. It all works. Everything's connected.
113. [PAUSE]
114. Tell me that didn't just feel amazing.

---

## TESTING YOUR NAVIGATION

115. [SHOW: Text on screen — "Test Everything"]
116. Now before we move on, let's actually test this properly.
117. [BEAT]
118. I know it feels like it works. But trust me, always test.
119. [SHOW: Browser — on index.html]
120. Start on your homepage. Click every link in the nav.
121. [SHOW: Clicking Home — already on it, should just stay]
122. Home. Good.
123. [SHOW: Clicking About — page loads]
124. About. Good.
125. [SHOW: Clicking Contact — page loads]
126. Contact. Good.
127. [BEAT]
128. [SHOW: On the Contact page — click About in the nav]
129. Now from Contact, go to About.
130. [SHOW: About page loads]
131. Good.
132. [SHOW: From About, click Home]
133. From About, go Home.
134. [SHOW: Homepage loads]
135. Good. Every link works from every page.
136. [BEAT]
137. [SHOW: Highlight the active state on each page — the highlighted link changing]
138. And check the active states. On the homepage, Home is highlighted. On about, About is highlighted. On contact, Contact is highlighted.
139. [BEAT]
140. If any of that isn't working, just tell Claude. Say "the active state isn't working on the About page" and it'll fix it.

---

## KEEPING THE DESIGN CONSISTENT

141. [SHOW: Text on screen — "Design Consistency"]
142. Alright, let's talk about something that trips people up.
143. [BEAT]
144. Consistency.
145. [SHOW: Split screen — Homepage on left, About page on right, side by side]
146. Open your homepage and your About page side by side. Do they look like they belong together?
147. [BEAT]
148. Same fonts? Same colors? Same spacing? Same overall feel?
149. [SHOW: Point out matching elements — headings, button styles, background colors]
150. If something looks off, here's why. And how to fix it.
151. [BEAT]
152. [SHOW: File explorer showing the project — one styles.css file]
153. Tip number one. One stylesheet. All your pages should link to the same styles.css file.
154. If Claude created a separate stylesheet for the About page, tell it to combine them.
155. [BEAT]
156. [SHOW: Terminal — cursor ready]
157. Tip number two. Always include the phrase "match the same design as index.html" in your prompts.
158. That's your magic sentence. It tells Claude to keep things consistent.
159. [BEAT]
160. [SHOW: Split screen comparison again — both pages matching]
161. Tip number three. Actually look at them side by side. Your eyes will catch things that your brain misses.
162. [BEAT]
163. If the headings are a different size, or the colors are slightly off, just tell Claude and it'll fix it in seconds.

---

## ADDING A FOOTER TO ALL PAGES

164. [SHOW: Text on screen — "Footer"]
165. One more big piece. The footer.
166. [BEAT]
167. Every professional website has a footer. It's that section at the very bottom.
168. [SHOW: Example of a nice website footer — any reference site]
169. And we need it on all pages. Just like the nav bar.
170. [BEAT]
171. [SHOW: Terminal — cursor ready]
172. Here's the prompt.
173. [SHOW: The full prompt appearing on screen]
174. "Add a footer to ALL pages — index.html, about.html, and contact.html. The footer should include the business name and a short one-line description, a Quick Links section with links to all pages, social media icons for Facebook, Instagram, and Twitter, and a copyright notice with the current year. Also add a small Back to Top link that scrolls to the top of the page. Make the footer match the overall design. Dark background, light text. Same on every page."
175. [BEAT]
176. [SHOW: Terminal — typing the prompt into Claude Code]
177. Same deal as the nav. Say ALL pages. Be specific about what goes in the footer.
178. [SHOW: Claude Code updating all three files]
179. [BEAT]
180. [SHOW: Browser — scroll to the bottom of index.html, the footer is there]
181. There we go. Business name. Quick links. Social icons. Copyright. Back to Top.
182. [SHOW: Click the "Back to Top" link — page scrolls up]
183. Back to Top works. Nice little touch.
184. [SHOW: Check the footer on about.html — same footer]
185. Same footer on About.
186. [SHOW: Check the footer on contact.html — same footer]
187. Same footer on Contact.
188. [BEAT]
189. Your site is really starting to look professional.

---

## YOUR FILE STRUCTURE RIGHT NOW

190. [SHOW: Text on screen — "File Structure Check"]
191. Alright, let's take a quick look at what you've got right now.
192. [BEAT]
193. [SHOW: Terminal — type: ls in the project folder]
194. If you type ls in your project folder, you should see something like this.
195. [SHOW: Terminal output showing the files, or a visual diagram on screen]
196. [SHOW: File tree diagram —
197. my-website/
198. -- index.html
199. -- about.html
200. -- contact.html
201. -- styles.css
202. -- images/
203. ]
204. index.html. That's your homepage.
205. about.html. Your About page.
206. contact.html. Your Contact page.
207. styles.css. Your one stylesheet that controls how everything looks.
208. And an images folder. If Claude put any images in there.
209. [BEAT]
210. Five items. That's your whole website. Clean and simple.

---

## FULL REVIEW CHECKLIST

211. [SHOW: Text on screen — "Review Checklist"]
212. Before we celebrate, let's do a proper review. I want you to check everything.
213. [BEAT]
214. [SHOW: Checklist appearing on screen, one item at a time]
215. [SHOW: Checklist item 1 — "Open each page"]
216. Open each page in your browser. Homepage. About. Contact. Do they all load?
217. [SHOW: Checklist item 2 — "Click every link"]
218. Click every link in the nav bar. From every page. Do they all work? Do the active states change?
219. [SHOW: Checklist item 3 — "Check the footer links"]
220. Check the footer links too. Quick links, social icons, back to top.
221. [SHOW: Checklist item 4 — "Resize to mobile"]
222. Now resize your browser window. Make it narrow, like a phone screen.
223. [SHOW: Browser being resized to mobile width]
224. Does everything still look good? Does it stack properly?
225. [SHOW: Checklist item 5 — "Test the hamburger menu"]
226. Is the hamburger menu there? Click it. Do the links show up? Click a link. Does it close?
227. [SHOW: Clicking the hamburger menu — links appearing, then clicking a link]
228. [BEAT]
229. If any of that doesn't work, you know the drill. Tell Claude what's wrong. It'll fix it.
230. [PAUSE]
231. But if everything checks out? Your site is solid.

---

## ADDING MORE PAGES — THE PROCESS

232. [SHOW: Text on screen — "Want More Pages?"]
233. Now, I showed you About and Contact because those are the two every business needs.
234. [BEAT]
235. But you might want more. And the process is exactly the same.
236. [SHOW: Text on screen — list appearing: "Services / Gallery / FAQ / Blog / Pricing"]
237. Services page. Gallery page. FAQ page. Blog. Pricing. Whatever your business needs.
238. [BEAT]
239. The formula is the same every time.
240. [SHOW: Text on screen — Step 1]
241. Step one. Ask Claude to create the new page. Tell it to match the design of index.html.
242. [SHOW: Text on screen — Step 2]
243. Step two. Ask Claude to update the navigation on ALL pages to include the new page.
244. [BEAT]
245. That second step is the one people forget. They create a new page but don't update the nav.
246. Then they've got a page that exists but nobody can find it.
247. [BEAT]
248. [SHOW: Text on screen — "Always update nav on ALL pages"]
249. So always, always, always — when you add a page, update the nav on every page.
250. [BEAT]
251. One prompt to create. One prompt to update nav. That's the rhythm.

---

## WRAP UP

252. [SHOW: Browser — cycling through all three pages, nav and footer visible]
253. Okay. Take a second and look at what you've got.
254. [BEAT]
255. A multi-page website. With navigation. With a footer. With consistent design across every page.
256. [PAUSE]
257. You did this in like, what, twenty minutes?
258. [BEAT]
259. Think about that. Twenty minutes ago you had one page. Now you've got a whole site.
260. [SHOW: Quick montage — clicking through pages, the nav working, the footer, mobile view]
261. That's the power of working this way. You describe what you want. Claude builds it. You review it. Done.
262. [BEAT]
263. [SHOW: Text on screen — "3 pages. Navigation. Footer. Consistent design."]
264. Three pages. Navigation that works. A footer on every page. And it all looks like one cohesive site.
265. [BEAT]
266. Now the structure is there. In the next module, we're gonna make it look even better with images, favicons, and all those little details that make a site feel polished.
267. [BEAT]
268. [SHOW: Text on screen — "Next: Module 6 — Images, Favicons & Polish"]
269. I'll see you there.

---

**END OF MODULE 5**
Total lines of dialogue: ~269
Estimated spoken time: ~9 minutes
