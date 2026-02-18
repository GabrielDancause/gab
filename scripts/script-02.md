# Module 2: Setting Up Your Tools
**Duration target:** ~8-10 minutes
**Tone:** Patient, reassuring, "boring but necessary"

---

## INTRO — SETTING EXPECTATIONS

1. [SHOW: Text on screen — "Module 2: Setting Up Your Tools"]
2. Alright, welcome back.
3. So this module is the setup. I'm not gonna lie — this is the boring part.
4. [BEAT]
5. But here's the deal. You only do this once.
6. After today, you never have to do any of this again.
7. [BEAT]
8. And I know the terminal and all this stuff looks intimidating. I get it.
9. When I first opened a terminal window, I felt like I was about to accidentally launch a missile or something.
10. [BEAT]
11. You're not gonna break anything. I promise.
12. So just follow along, step by step, and in about ten minutes you'll be all set up.
13. [PAUSE]
14. There are seven steps. Let's go.

---

## STEP 1 — CREATE A GITHUB ACCOUNT

15. [SHOW: Browser — navigate to github.com]
16. Step one. Go to github.com.
17. [SHOW: GitHub homepage with Sign Up button]
18. If you already have an account, skip ahead. If not, click Sign Up.
19. [SHOW: GitHub signup form]
20. Now here's something important. Pay attention to your username.
21. [BEAT]
22. Your username becomes part of your website URL.
23. [SHOW: Text on screen — "yourusername.github.io"]
24. So if your username is "xXxDarkWolf99xXx"... that's gonna be your website address.
25. [BEAT]
26. Pick something professional. Your name is great. Your business name works too.
27. [SHOW: Examples on screen — "gabduquette.github.io" / "montrealhotel.github.io"]
28. Something like your first and last name, or your business name. Keep it clean.
29. [BEAT]
30. Fill out the rest of the form. Verify your email. Standard stuff.
31. [SHOW: GitHub dashboard after signup]
32. Once you see this dashboard, you're good. Step one, done.

---

## STEP 2 — INSTALL GIT

33. [SHOW: Text on screen — "Step 2: Install Git"]
34. Step two. We need Git on your computer.
35. Git is the tool that lets you send your code to GitHub. Think of it like the delivery truck.
36. [BEAT]
37. [SHOW: Terminal window opening on Mac]
38. Now if you're on a Mac, you might already have it. Let's check.
39. [SHOW: Terminal — type: git --version]
40. Open your terminal — I'll show you how in a sec — and type git dash dash version.
41. [SHOW: Terminal output — "git version 2.x.x"]
42. If you see a version number like this, you're good. Skip to step three.
43. [BEAT]
44. [SHOW: Terminal — pop-up asking to install Xcode Command Line Tools]
45. If you get a pop-up asking you to install developer tools, or if it says "command not found," here's what to do.
46. [SHOW: Terminal — type: xcode-select --install]
47. Type xcode-select dash dash install and hit enter.
48. [SHOW: Installation progress dialog on Mac]
49. A little window will pop up. Click Install. Wait a few minutes. That's it.
50. [BEAT]
51. [SHOW: Text on screen — "Windows Users"]
52. Now if you're on Windows, it's a little different.
53. [SHOW: Browser — navigate to git-scm.com]
54. Go to git-scm.com. Download the installer.
55. [SHOW: Git Windows installer — clicking through steps]
56. Run it and just click Next through everything. The default settings are fine.
57. Don't change anything. Just Next, Next, Next, Install.
58. [BEAT]
59. [SHOW: Terminal — type: git --version]
60. Once it's done, open a new terminal and type git dash dash version again.
61. [SHOW: Terminal output showing version number]
62. You see a version number? Perfect. Step two, done.

---

## STEP 3 — INSTALL NODE.JS

63. [SHOW: Text on screen — "Step 3: Install Node.js"]
64. Step three. Node.js.
65. Node is what makes Claude Code run on your computer. You don't need to know anything about it.
66. You just need it installed.
67. [BEAT]
68. [SHOW: Browser — navigate to nodejs.org]
69. Go to nodejs.org.
70. [SHOW: Node.js homepage — two download buttons, highlight the LTS one]
71. You'll see two big download buttons. Click the one that says LTS. That stands for Long Term Support.
72. It's the stable one. The safe one. That's the one you want.
73. [SHOW: Node.js installer running — clicking through on Mac or Windows]
74. Download it. Run the installer. Again, default settings all the way. Don't change anything.
75. Just keep clicking Next or Continue until it's done.
76. [BEAT]
77. [SHOW: Terminal — type: node --version]
78. Now let's verify. Open your terminal. Type node dash dash version.
79. [SHOW: Terminal output — "v20.x.x" or similar]
80. You should see a version number. Something like v20 or v22. Doesn't matter what the exact number is, as long as you see one.
81. [SHOW: Terminal — type: npm --version]
82. Now type npm dash dash version.
83. [SHOW: Terminal output — "10.x.x" or similar]
84. npm comes with Node. If Node installed correctly, npm is already there.
85. [BEAT]
86. Two version numbers? Step three, done.

---

## STEP 4 — INSTALL CLAUDE CODE

87. [SHOW: Text on screen — "Step 4: Install Claude Code"]
88. Step four. This is the big one. Claude Code.
89. [BEAT]
90. [SHOW: Terminal — cursor blinking]
91. In your terminal, type this exact command.
92. [SHOW: Terminal — type: npm install -g @anthropic-ai/claude-code]
93. npm install dash g at anthropic-ai slash claude-code.
94. [BEAT]
95. I know that looks like a lot. Just type it exactly as you see it. Or pause the video and copy it.
96. [SHOW: Terminal — installation output scrolling]
97. Hit enter and let it do its thing. You'll see a bunch of text scrolling. That's normal. Don't worry about it.
98. [BEAT]
99. [SHOW: Terminal — installation complete message]
100. Once it says it's done, you're good.
101. [PAUSE]
102. [SHOW: Text on screen — "Getting an error? Don't panic."]
103. Now. If you got a permission error — and a lot of you will — here's the fix.
104. [BEAT]
105. [SHOW: Terminal on Mac — type: sudo npm install -g @anthropic-ai/claude-code]
106. On Mac, put the word sudo in front of the command. S-U-D-O. Then a space. Then the same command.
107. [SHOW: Terminal — password prompt]
108. It'll ask for your password. Type it in. You won't see the characters appear — that's normal. It's a security thing. Just type your password and hit enter.
109. [BEAT]
110. [SHOW: Text on screen — "Windows: Run as Administrator"]
111. On Windows, close your terminal. Right-click on PowerShell and choose "Run as Administrator."
112. Then try the install command again.
113. [BEAT]
114. [SHOW: Terminal — type: claude --version]
115. Alright, let's verify. Type claude dash dash version.
116. [SHOW: Terminal output — Claude Code version number]
117. You see a version number? Beautiful. Step four, done.

---

## STEP 5 — OPEN YOUR TERMINAL (FOR BEGINNERS)

118. [SHOW: Text on screen — "Step 5: Know Your Terminal"]
119. Okay, quick detour. I've been saying "open your terminal" this whole time.
120. Let me actually show you what that means.
121. [BEAT]
122. [SHOW: Mac desktop]
123. On Mac. Hit Command and Space at the same time.
124. [SHOW: Spotlight Search opening]
125. That opens Spotlight. It's the search thing.
126. [SHOW: Spotlight — type: Terminal]
127. Type the word Terminal. Hit Enter.
128. [SHOW: Terminal window opening]
129. And there it is. That's your terminal.
130. [BEAT]
131. [SHOW: Windows desktop]
132. On Windows. Click the Start menu.
133. [SHOW: Start menu — type: PowerShell]
134. Type PowerShell. Click on Windows PowerShell.
135. [SHOW: PowerShell window opening]
136. That's your terminal. Same idea, different look.
137. [BEAT]
138. [SHOW: Terminal with blinking cursor]
139. Both of them do the same thing. You type commands, hit enter, stuff happens.
140. That's literally all a terminal is.

---

## QUICK TERMINAL BASICS — THE ONLY 3 COMMANDS YOU NEED

141. [SHOW: Text on screen — "3 Commands. That's It."]
142. Now, before we go further, let me teach you three terminal commands.
143. Just three. That's all you'll ever need for this course.
144. [BEAT]
145. [SHOW: Terminal — type: ls]
146. Number one. ls. That's a lowercase L and a lowercase S.
147. [SHOW: Terminal output — list of files and folders]
148. It lists what's in your current folder. Think of it like opening a folder on your desktop and seeing what's inside.
149. [BEAT]
150. [SHOW: Terminal — type: cd Documents]
151. Number two. cd. Stands for "change directory." Directory just means folder.
152. [SHOW: Terminal — prompt changes to show new directory]
153. You type cd and then the name of the folder you want to go into.
154. cd Documents takes you into your Documents folder.
155. [SHOW: Terminal — type: cd ..]
156. cd dot dot takes you back up one level.
157. [BEAT]
158. [SHOW: Terminal — type: mkdir my-website]
159. Number three. mkdir. Stands for "make directory." It creates a new folder.
160. [SHOW: Terminal output — new folder created, then ls to verify]
161. mkdir my-website creates a folder called my-website. That's it.
162. [BEAT]
163. [SHOW: Text on screen — "ls = look around / cd = move / mkdir = make a folder"]
164. So. ls to look around. cd to move. mkdir to make a folder.
165. Three commands. You're a hacker now.
166. [BEAT]
167. I'm kidding. But seriously, that's all you need.

---

## STEP 6 — RUN CLAUDE CODE FOR THE FIRST TIME

168. [SHOW: Text on screen — "Step 6: Run Claude Code"]
169. Alright, this is the fun part. Let's actually run Claude Code.
170. [BEAT]
171. [SHOW: Terminal — type: claude]
172. In your terminal, just type claude. One word. Hit enter.
173. [SHOW: Claude Code launching — first-time authentication screen]
174. The first time you run it, it's gonna ask you to authenticate.
175. [SHOW: Authentication flow — browser opening, login prompt]
176. It'll open your browser and ask you to log into your Anthropic account.
177. If you don't have one yet, create one now. It's free to sign up.
178. [BEAT]
179. [SHOW: Anthropic console / account page]
180. Now I should mention — Claude Code itself does use API credits. Anthropic gives you some free credits to start.
181. That's plenty to build your first website. So don't worry about that right now.
182. [BEAT]
183. [SHOW: Terminal — Claude Code is now active, showing the prompt]
184. Okay. Once you're logged in, you should see Claude Code waiting for you. It looks like a chat interface, right there in your terminal.
185. [BEAT]
186. Let's test it. Type something simple.
187. [SHOW: Terminal — type: say hello and tell me a fun fact]
188. Just say "say hello and tell me a fun fact."
189. [SHOW: Claude Code responding with a greeting and a fun fact]
190. [BEAT]
191. Look at that. It works. You just talked to an AI from your terminal.
192. [PAUSE]
193. [SHOW: Terminal — type: /exit]
194. Now type slash exit to close it.
195. [SHOW: Terminal — back to normal prompt]
196. And you're back to your regular terminal. Easy.

---

## STEP 7 — VERIFY EVERYTHING WORKS

197. [SHOW: Text on screen — "Step 7: Final Check"]
198. Last step. Let's just make sure everything is working.
199. [BEAT]
200. We're gonna run four commands real quick.
201. [SHOW: Terminal — type: git --version]
202. git dash dash version.
203. [SHOW: Terminal output — version number with a green checkmark overlay]
204. Check.
205. [SHOW: Terminal — type: node --version]
206. node dash dash version.
207. [SHOW: Terminal output — version number with a green checkmark overlay]
208. Check.
209. [SHOW: Terminal — type: npm --version]
210. npm dash dash version.
211. [SHOW: Terminal output — version number with a green checkmark overlay]
212. Check.
213. [SHOW: Terminal — type: claude --version]
214. claude dash dash version.
215. [SHOW: Terminal output — version number with a green checkmark overlay]
216. Check.
217. [BEAT]
218. [SHOW: All four checkmarks on screen together]
219. Four for four? You're golden.

---

## TROUBLESHOOTING — COMMON ISSUES

220. [SHOW: Text on screen — "Something Not Working?"]
221. Now, if something didn't work, don't panic. Let me cover the most common issues real quick.
222. [BEAT]
223. [SHOW: Terminal — "command not found" error]
224. Number one. "Command not found." This means the program didn't install correctly, or your terminal doesn't know where to find it.
225. [BEAT]
226. First thing to try: close your terminal completely and open a new one. Seriously. That fixes it like half the time.
227. [SHOW: Terminal being closed and reopened]
228. When you install something, sometimes your terminal needs a fresh start to recognize it.
229. [BEAT]
230. [SHOW: Terminal — permission error message]
231. Number two. Permission errors. We talked about this with Claude Code, but it applies to anything.
232. On Mac, try putting sudo in front of the command.
233. On Windows, make sure you're running the terminal as Administrator.
234. [BEAT]
235. [SHOW: Terminal — Node version showing something very old]
236. Number three. Old versions. If something installed but the version number looks really old, just go back to the website and download the latest version.
237. Reinstall it. It'll overwrite the old one.
238. [BEAT]
239. [SHOW: Text on screen — "Still stuck? That's okay."]
240. And if you're still stuck? That's genuinely okay.
241. Every computer is a little different. Sometimes things are weird.
242. Drop a question in the comments or the community and we'll help you out.
243. [BEAT]
244. Don't let a setup issue stop you. We'll get it sorted.

---

## WRAP UP

245. [SHOW: Text on screen — checklist of all 7 steps, all checked off]
246. Alright. Let's recap what you just did.
247. [BEAT]
248. You created a GitHub account.
249. You installed Git.
250. You installed Node.js.
251. You installed Claude Code.
252. You opened your terminal like a pro.
253. You ran Claude Code and talked to it.
254. And you verified everything works.
255. [BEAT]
256. That's seven steps. And you're done. You never have to do any of this again.
257. [PAUSE]
258. The setup is over. The fun starts now.
259. [BEAT]
260. In the next module, we're actually going to build your website.
261. You're gonna talk to Claude Code, and it's gonna create your whole site.
262. [BEAT]
263. [SHOW: Text on screen — "Next: Module 3 — Building Your Website"]
264. I'll see you there.

---

**END OF MODULE 2**
Total lines of dialogue: ~264
Estimated spoken time: ~9 minutes
