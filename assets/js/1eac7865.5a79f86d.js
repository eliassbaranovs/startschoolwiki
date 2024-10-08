"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5927],{1782:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(4848),i=s(8453);const t={sidebar_label:"My Mastermind",sidebar_position:3,description:"A complete guide to the Game Guessing Program - a fun and challenging game where players guess a series of unique numbers from 0 to 8."},l="My_mastermind",o={id:"Season 01/My Mastermind",title:"My_mastermind",description:"A complete guide to the Game Guessing Program - a fun and challenging game where players guess a series of unique numbers from 0 to 8.",source:"@site/docs/Season 01/My Mastermind.md",sourceDirName:"Season 01",slug:"/Season 01/My Mastermind",permalink:"/startschoolwiki/docs/Season 01/My Mastermind",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"My Mastermind",sidebar_position:3,description:"A complete guide to the Game Guessing Program - a fun and challenging game where players guess a series of unique numbers from 0 to 8."},sidebar:"tutorialSidebar",previous:{title:"My Ngram",permalink:"/startschoolwiki/docs/Season 01/My Ngram"},next:{title:"My Printf",permalink:"/startschoolwiki/docs/Season 01/My Printf"}},a={},d=[{value:"\ud83d\ude80 Key Features",id:"-key-features",level:2},{value:"\ud83d\udcdd Game Rules",id:"-game-rules",level:2},{value:"\u2699\ufe0f How the Program Works",id:"\ufe0f-how-the-program-works",level:2},{value:"\u26a0\ufe0f Error Handling",id:"\ufe0f-error-handling",level:2},{value:"\ud83d\udee0\ufe0f Example Usage",id:"\ufe0f-example-usage",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"my_mastermind",children:"My_mastermind"})}),"\n",(0,r.jsxs)(n.p,{children:["Welcome to the ",(0,r.jsx)(n.strong,{children:"Game Guessing Program"}),", where players guess a series of unique numbers from ",(0,r.jsx)(n.code,{children:"0"})," to ",(0,r.jsx)(n.code,{children:"8"}),". Below are the key rules and features of the game."]}),"\n",(0,r.jsx)(n.h2,{id:"-key-features",children:"\ud83d\ude80 Key Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Supports Flags"}),": Use ",(0,r.jsx)(n.code,{children:"-c"})," and ",(0,r.jsx)(n.code,{children:"-t"})," flags in any order and simultaneously."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Unique Digits"}),": Each guess consists of digits from ",(0,r.jsx)(n.code,{children:"0"})," to ",(0,r.jsx)(n.code,{children:"8"}),", with no duplicates."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Input Validation"}),": Invalid guesses (non-digits, wrong length, duplicates) don't advance the round."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Graceful Exit"}),": Exit cleanly anytime with ",(0,r.jsx)(n.code,{children:"Ctrl + D"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"-game-rules",children:"\ud83d\udcdd Game Rules"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Digits"}),": The game uses only digits from ",(0,r.jsx)(n.code,{children:"0 to 8"})," (no duplicates)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Valid Length"}),": Guesses must match the required length."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Invalid Inputs"}),": Non-digit, wrong length, or duplicate digits trigger an error but don't advance the round."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-how-the-program-works",children:"\u2699\ufe0f How the Program Works"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Flags"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-c"}),": Configuration mode"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-t"}),": Testing mode"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Exit"}),": ",(0,r.jsx)(n.code,{children:"Ctrl + D"})," for graceful exit without crashing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Correct Guess Display"}),": For testing, the correct answer is shown at the end."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-error-handling",children:"\u26a0\ufe0f Error Handling"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Non-digit input"}),"\n",(0,r.jsx)(n.li,{children:"Wrong length (too long/short)"}),"\n",(0,r.jsx)(n.li,{children:"Duplicate digits"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These will trigger an error without advancing the round."}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-example-usage",children:"\ud83d\udee0\ufe0f Example Usage"}),"\n",(0,r.jsx)(n.p,{children:"Run the game with flags:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./game -c -t\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(6540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);