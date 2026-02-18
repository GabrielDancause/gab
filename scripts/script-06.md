# Module 6: Images, Favicons & Polish
**Duration target:** ~6-8 minutes
**Tone:** Detail-oriented but keep it moving, "amateur vs. pro"

---

## INTRO — THE DETAILS THAT MATTER

1. [SHOW: Text on screen — "Module 6: Images, Favicons & Polish"]
2. Alright, welcome back.
3. So your site has pages. It has navigation. It has a footer. The structure is solid.
4. [BEAT]
5. But right now it probably looks a little... plain. Maybe some placeholder images. Maybe no images at all.
6. [SHOW: The current site — placeholder images or empty image areas visible]
7. This is the module where we fix that.
8. [BEAT]
9. And I'll be honest — this is the stuff that separates an amateur-looking site from a professional one.
10. The details. The polish. The little things people can't quite name but they definitely feel.
11. [PAUSE]
12. Let's get into it.

---

## IMAGE OPTIMIZATION RULES — BEFORE YOU ADD ANYTHING

13. [SHOW: Text on screen — "Image Rules"]
14. Before we start throwing images into our site, we need to talk about image rules.
15. [BEAT]
16. Because images are the number one reason websites load slowly.
17. [SHOW: Text on screen — "Images = #1 cause of slow sites"]
18. You take a photo on your phone, it's like four or five megabytes. You put that on a website, and someone on a slow connection is sitting there waiting ten seconds for your page to load.
19. [BEAT]
20. They're not gonna wait. They're gone.
21. [SHOW: Text appearing — Rule 1]
22. So rule number one. Photos should be JPGs and under five hundred kilobytes. Ideally under two hundred.
23. [SHOW: Text appearing — Rule 2]
24. Rule number two. Logos and icons should be PNGs or SVGs. SVG is best for logos because they scale perfectly.
25. [SHOW: Text appearing — Rule 3]
26. Rule number three. No image on your site needs to be wider than twelve hundred to sixteen hundred pixels.
27. [BEAT]
28. Your phone takes photos at like four thousand pixels wide. Nobody's screen needs that. It's just extra weight.
29. [SHOW: Text on screen — "JPG < 500KB | PNG/SVG for logos | Max 1600px wide"]
30. JPG under five hundred K. PNG or SVG for logos. Max sixteen hundred pixels wide.
31. [BEAT]
32. Those three rules. Memorize them.

---

## FREE COMPRESSION TOOLS

33. [SHOW: Text on screen — "Free Tools to Compress Images"]
34. So how do you actually make your images smaller? Free tools.
35. [BEAT]
36. [SHOW: Browser — navigate to tinypng.com]
37. Number one. TinyPNG. Don't let the name fool you — it works on JPGs too.
38. [SHOW: Dragging an image into TinyPNG — showing the compression results]
39. You literally just drag your image in, it compresses it, you download it. Done.
40. I've seen it cut file sizes by seventy, eighty percent. And you can't tell the difference just by looking.
41. [BEAT]
42. [SHOW: Browser — navigate to squoosh.app]
43. Number two. Squoosh. This one's made by Google. It's great because you can see a before and after side by side.
44. [SHOW: Squoosh interface — sliding the comparison slider]
45. See? Left side is the original. Right side is the compressed version. Slide the bar. Can you tell the difference?
46. [BEAT]
47. Exactly. You can't.
48. [BEAT]
49. [SHOW: Mac — right-click an image, Open With > Preview]
50. And if you're on a Mac, you already have a tool built in. Preview.
51. [SHOW: Preview — File > Export, adjusting quality slider and dimensions]
52. Open the image in Preview. Go to File, Export. You can change the size, change the quality. Bring it down to like seventy or eighty percent quality.
53. [BEAT]
54. Nobody will notice. But your site will load way faster.

---

## WHERE TO GET IMAGES

55. [SHOW: Text on screen — "Where to Get Images"]
56. Now. Where do you actually get the images?
57. [BEAT]
58. [SHOW: Text on screen — "Option 1: Your own photos (BEST)"]
59. Best option? Your own photos. Seriously.
60. Real photos of your real business. Your actual products. Your actual space. Your actual team.
61. [BEAT]
62. Nothing beats authenticity. Stock photos are fine but people can tell.
63. Your phone camera is good enough. Just make sure there's decent lighting.
64. [BEAT]
65. [SHOW: Browser — navigate to unsplash.com]
66. But if you don't have photos yet, or you need a placeholder while you get them, here's where to go.
67. Unsplash. Completely free. High quality. No attribution required.
68. [SHOW: Searching for something on Unsplash — browsing results]
69. Search for whatever you need. Bakery, restaurant, office, nature. Download. Use it.
70. [BEAT]
71. [SHOW: Browser — navigate to pexels.com]
72. Pexels is another one. Same deal. Free, high quality, no strings attached.
73. [BEAT]
74. Just remember — compress the images after you download them. Stock photos are usually huge files.

---

## ADDING IMAGES WITH CLAUDE

75. [SHOW: Text on screen — "Adding Images With Claude"]
76. Alright, let's actually add some images to the site.
77. [BEAT]
78. [SHOW: Terminal — Claude Code open in the project folder]
79. First, let's put a logo in the nav bar.
80. [SHOW: Terminal — typing prompt]
81. "Add my logo to the navigation bar. The logo file is logo.png in the images folder. Put it on the left side of the nav, before the links. Make it about forty pixels tall so it doesn't stretch the nav bar."
82. [BEAT]
83. [SHOW: Claude Code making the changes]
84. [SHOW: Browser — refresh, logo appears in the nav]
85. There it is. Logo in the nav. Clean.
86. [BEAT]
87. [SHOW: Terminal — typing next prompt]
88. Now let's do the hero section. This is the big one.
89. "Update the hero section on index.html to use hero.jpg from the images folder as a full-width background image. Add a dark overlay on top of the image so the white text is still readable. Keep the existing heading and subheading text centered over the image."
90. [BEAT]
91. [SHOW: Claude Code making the changes]
92. [SHOW: Browser — refresh, hero section now has a background image with dark overlay]
93. Whoa. That's a huge difference, right?
94. [BEAT]
95. One image. One dark overlay. And suddenly the whole site feels different.
96. [BEAT]
97. [SHOW: Terminal — typing next prompt]
98. And let's add some product photos.
99. "Add a products section to index.html with a grid of six product images. Use the images product-one.jpg through product-six.jpg from the images folder. Each product should have the image, a product name below it, and a short description. Use a three-column grid on desktop that stacks to two columns on tablet and one on mobile."
100. [BEAT]
101. [SHOW: Claude Code generating the product grid]
102. [SHOW: Browser — refresh, scroll to the product grid]
103. Six products. Clean grid. Names and descriptions.
104. [SHOW: Browser — resize to tablet width, grid becomes two columns]
105. And watch — resize it. Two columns on tablet.
106. [SHOW: Browser — resize to mobile width, grid becomes one column]
107. One column on mobile.
108. [BEAT]
109. That's responsive design. And you didn't have to think about any of it.

---

## FIXING STRETCHED OR CROPPED IMAGES

110. [SHOW: Text on screen — "When Images Look Wrong"]
111. Now. Something that's gonna happen. Your images are gonna look weird sometimes.
112. [BEAT]
113. [SHOW: Browser — an image that's stretched or squished or weirdly cropped]
114. Stretched. Squished. Cropped in a weird spot. It happens because not all images are the same proportions.
115. [BEAT]
116. Don't panic. Just describe the problem to Claude.
117. [SHOW: Terminal — typing prompt]
118. "The product images in my grid are getting stretched. Some are landscape and some are portrait so they look uneven. Fix this so all images display at the same size without stretching or distortion."
119. [BEAT]
120. [SHOW: Claude Code making the fix]
121. What Claude's gonna do is use something called object-fit. You don't need to know what that means. Just know that it makes images fit into a box without getting distorted.
122. [SHOW: Browser — refresh, all product images now look consistent]
123. See? All the same size now. No stretching. No weird crops.
124. [BEAT]
125. If it crops a specific image in a bad spot, you can even tell Claude "shift the focus of that image to the top" and it'll adjust.
126. [BEAT]
127. Easy fix. Huge difference.

---

## CREATING A FAVICON

128. [SHOW: Text on screen — "Favicon"]
129. Okay, this one is small but it matters more than you think.
130. [BEAT]
131. [SHOW: Browser — zoom into the tab, showing the default blank page icon]
132. See that little icon in the browser tab? Right now yours is probably just a blank document icon or nothing at all.
133. [BEAT]
134. That's called a favicon. And every real website has one.
135. [SHOW: Browser tabs showing various websites with their favicons — Google, YouTube, etc.]
136. Google has one. YouTube has one. Every site you visit has one.
137. [BEAT]
138. It's tiny but it's a signal. It says "this is a finished website, not a homework project."
139. [BEAT]
140. [SHOW: Terminal — typing prompt]
141. Easiest way to get one? Ask Claude.
142. "Create a favicon for my website. Make it a simple SVG — the letter B in a circle with the circle filled in our brand's primary color. Save it as favicon.svg in the root folder and add the proper link tags to all HTML pages."
143. [BEAT]
144. [SHOW: Claude Code generating the favicon and updating the HTML files]
145. It creates the SVG and links it in every page.
146. [SHOW: Browser — refresh, favicon now appears in the tab]
147. Look at that. There it is. In the tab.
148. [BEAT]
149. [SHOW: Browser — navigate to favicon.io]
150. Now if you want something fancier, you can go to favicon.io. You can generate a favicon from text, from an image, or from an emoji.
151. [SHOW: Clicking through favicon.io — generating one from text]
152. Pick your letter, pick your font, pick your colors, download it. Then just tell Claude to add it to your site.
153. [BEAT]
154. Either way, takes about thirty seconds. And your site looks ten times more legit.

---

## OPEN GRAPH IMAGES FOR SOCIAL SHARING

155. [SHOW: Text on screen — "Social Sharing Preview"]
156. Here's one most people don't think about until it's too late.
157. [BEAT]
158. [SHOW: A mockup of a link being shared on social media — showing the preview card]
159. When someone shares your website link on Facebook, or LinkedIn, or iMessage, it shows a preview.
160. A little card with an image, a title, and a description.
161. [BEAT]
162. [SHOW: A link shared with no preview image — just a plain URL]
163. If you don't set that up, it just shows an ugly plain link. Or a random image from your site. Not great.
164. [BEAT]
165. [SHOW: Text on screen — "Open Graph image: 1200 x 630 pixels"]
166. The image for this needs to be twelve hundred by six thirty pixels. That's the standard.
167. [BEAT]
168. You can create one in Canva, or use any image editor. Just put your business name, a tagline, maybe your logo, on a nice background.
169. [BEAT]
170. [SHOW: Terminal — typing prompt]
171. Then tell Claude to add it.
172. "Add Open Graph meta tags to all pages. Use og-image.jpg from the images folder as the default image. Set the title to our business name and the description to 'Fresh baked goods made with love in Anytown.' Also add a Twitter card meta tag using the same image."
173. [BEAT]
174. [SHOW: Claude Code updating the HTML files with meta tags]
175. Now when someone shares your link, it's gonna look great. Title. Description. Image. Professional.
176. [BEAT]
177. This takes two minutes and makes a huge difference in how your site looks when shared.

---

## FINAL POLISH PROMPTS

178. [SHOW: Text on screen — "Final Polish"]
179. Alright, we're in the home stretch. Let's hit a few more polish items.
180. [BEAT]
181. These are all quick prompts. One or two minutes each. But they add up.
182. [BEAT]
183. [SHOW: Terminal — typing prompt]
184. "Add smooth scrolling to the entire site so that when someone clicks an anchor link or the Back to Top button, it scrolls smoothly instead of jumping."
185. [SHOW: Browser — clicking Back to Top, page scrolls smoothly]
186. See that? Smooth scroll. Little thing. Feels way better.
187. [BEAT]
188. [SHOW: Terminal — typing prompt]
189. "Add subtle fade-in animations to the main sections of each page. When someone scrolls down, the sections should fade in gently as they come into view. Keep it subtle — nothing flashy or distracting."
190. [BEAT]
191. [SHOW: Browser — scrolling down the page, sections gently fading in]
192. See how the sections kind of appear as you scroll? That's the fade-in.
193. The key word in that prompt was "subtle." You don't want things flying in from the left. You want it gentle.
194. [BEAT]
195. [SHOW: Terminal — typing prompt]
196. "Check all the images on my site and make sure every single one has descriptive alt text. If any image is missing alt text, add it. The alt text should describe what the image shows in plain English."
197. [BEAT]
198. Alt text is for accessibility. Screen readers use it. Google uses it for SEO. It matters.
199. [BEAT]
200. [SHOW: Terminal — typing prompt]
201. "Add a simple loading state to the page. Show a brief fade-in when the page first loads so content doesn't just pop in abruptly."
202. [BEAT]
203. Another subtle thing. But it makes the whole experience feel smoother.

---

## MOBILE CHECKING WITH CHROME DEVTOOLS

204. [SHOW: Text on screen — "Mobile Testing"]
205. Now let me show you the proper way to check your site on mobile.
206. [BEAT]
207. You've been resizing your browser window, which is fine. But Chrome has a better way.
208. [SHOW: Browser — Chrome open on the website]
209. [SHOW: Keyboard shortcut on screen — "Cmd + Option + I (Mac) / Ctrl + Shift + I (Windows)"]
210. Hit Command Option I on Mac. Or Control Shift I on Windows.
211. [SHOW: Chrome DevTools opening on the right side]
212. This opens Chrome DevTools. Don't freak out — it looks complicated but we only need one thing.
213. [BEAT]
214. [SHOW: Click the device toolbar icon — the little phone/tablet icon in the top left of DevTools]
215. See this little icon up here? The one that looks like a phone and a tablet? Click it.
216. [SHOW: The page transforms into a mobile view with device controls at the top]
217. Boom. Now you're seeing your site as if you were on a phone.
218. [BEAT]
219. [SHOW: Click the device dropdown — showing iPhone, Samsung Galaxy, iPad, etc.]
220. And you can pick which phone. iPhone fourteen. Samsung Galaxy. iPad. Whatever.
221. [SHOW: Switching between different devices — the page adapts each time]
222. Click through a few of them. Your site should look good on all of them.
223. [BEAT]
224. [SHOW: Scrolling through the site in mobile view — checking everything]
225. Scroll through. Does the text fit? Are images too big? Is the hamburger menu working?
226. [SHOW: Testing the hamburger menu in the mobile view]
227. Test the nav. Test the links. Test the footer.
228. [BEAT]
229. [SHOW: Click the device icon again to toggle back to desktop view]
230. Click that icon again to go back to normal.
231. [BEAT]
232. This tool is built right into Chrome. It's free. Use it every time you make changes.

---

## THE "GOOD ENOUGH" CHECKPOINT

233. [SHOW: Text on screen — "The Good Enough Checkpoint"]
234. Okay. I need to talk to you about something.
235. [BEAT]
236. Perfectionism.
237. [BEAT]
238. I know you. You're gonna spend three hours tweaking the shade of blue on a button. You're gonna obsess over whether the spacing is exactly right. You're gonna keep adding "one more thing."
239. [BEAT]
240. Stop.
241. [SHOW: Text on screen — "Perfection is the enemy of done."]
242. Here's your checkpoint. If your site can pass these five tests, it's good enough to ship.
243. [BEAT]
244. [SHOW: Checklist appearing on screen, one at a time]
245. [SHOW: Check 1 — "Loads fast"]
246. One. Does it load fast? Click a link, does the page appear pretty much instantly? If yes, you're good.
247. [SHOW: Check 2 — "Works on mobile"]
248. Two. Does it work on mobile? Pull out your phone. Go to your site. Can you read everything? Can you navigate? If yes, you're good.
249. [SHOW: Check 3 — "Info is correct"]
250. Three. Is the information correct? Right business name? Right address? Right phone number? No lorem ipsum left over? If yes, you're good.
251. [SHOW: Check 4 — "Has a favicon"]
252. Four. Does it have a favicon? That little icon in the browser tab? If yes, you're good.
253. [SHOW: Check 5 — "Images are optimized"]
254. Five. Are your images optimized? Not taking forever to load? Not blurry? Not stretched? If yes, you're good.
255. [BEAT]
256. [SHOW: All five checks on screen with checkmarks]
257. Five checks. That's the bar.
258. [PAUSE]
259. You can always come back and improve things later. That's the beauty of this. It's your site. You can tweak it anytime.
260. [BEAT]
261. But right now, if those five things check out, you're ready to put this thing live.
262. Don't let perfect be the enemy of done. Ship it.

---

## WRAP UP

263. [SHOW: Browser — the finished site with images, favicon, smooth scroll, everything polished]
264. Look at your site now.
265. [BEAT]
266. [SHOW: Scrolling through the site — hero image with overlay, product grid, smooth animations]
267. Real images. A favicon in the tab. Smooth scrolling. Fade-in animations. Alt text. Social sharing set up.
268. [BEAT]
269. [SHOW: Mobile view of the site — looking clean and professional]
270. Looks great on mobile.
271. [SHOW: Desktop view — full width, polished]
272. Looks great on desktop.
273. [BEAT]
274. These are the details that make people trust a website. And you added them all in like, what, fifteen minutes?
275. [PAUSE]
276. [SHOW: Text on screen — "Structure. Design. Polish. Done."]
277. You've got the structure. You've got the design. You've got the polish.
278. [BEAT]
279. Next up, we're gonna take this site and actually put it on the internet. Live. For real.
280. Where anyone in the world can see it.
281. [BEAT]
282. [SHOW: Text on screen — "Next: Module 7 — Going Live"]
283. That's the next one. I'll see you there.

---

**END OF MODULE 6**
Total lines of dialogue: ~283
Estimated spoken time: ~8 minutes
