---
title: Interviews Suck
date: "2020-02-12T23:46:37.121Z"
description: "Software engineering interview pains"
project: code
tags: ["career", "learning", "interview"]
---

I'm convinced no one likes interviews. Candidates dread it. Interviewers, hiring managers, and companies don't like wasting time, especially if the candidate is lacking.

It makes sense for employers to run due diligence when considering a candidate to fill in a role. They wouldn't want to hire someone just to find out a couple of days later they don't know what they are doing. That's not only detrimental to the team but a drain in the bank. Similarly, a candidate shouldn't work for a company that raises many red flags like toxic work cultures and teams with poor direction and management.

Interviews are two-way streets: candidates should take the opportunity to interview the team and ask questions to learn about the company for fit.

<figure>
  <img src="./women-interview.jpg" alt="women interviewing">
  <figcaption>Women interviewing. Photo by <a href="https://www.pexels.com/@divinetechygirl">Christina Morillo</a></figcaption>
</figure>

I think we can agree interviews are smart to carry out for both parties. However, I'm not convinced there's a perfect way of running them. A recent article from [Hired on the State of Software Engineers](https://hired.com/page/state-of-software-engineers/) stated:

> Only 31% think coding exams effectively test their aptitude, while two-thirds say most coding exams are irrelevant to the daily job of an engineer.

Along with that metric, `42%` of people said the coding exam is the most stressful part.

Isn't that a rubbish experience for the candidates? How useful are the types of problems employers ask candidates to solve? Is being good at memorizing a very specific set of algorithms and problems useful for 99% of them? While it may be practical to measure some basic set of skills of computer science fundamentals, aren't most companies putting an unreasonable amount of pressure on their candidates and turning away potentially awesome people?

## Why the fundamentals?

I remember [Gayle Laakmann McDowell](https://crackingthecodinginterview.com) mentioned top tier FAANG companies stress the fundamentals because they want to hire the cream of the crop and find it worth their while to sacrifice potentially great candidates to prevent false positives. The reasoning: exceptional candidates with strong problem-solving skills can still test as false positives, but at least there will be "less" of them. Less time is wasted. Less time is spent to find talent.

Sure, that can tough to swallow if you never heard that before. Solution: If you don't like it, then just don't interview at those companies! There are tons of companies that don't interview that way. It stinks, but I don't think this is going to change any time soon.

## My recent experience

It's no secret I was unemployed up until recently. One of my previous posts celebrated my freedom, but also realistically I had been thinking about my retirement. I need to start working again to fuel my future!

As a side note, I'm a frontend engineer so I get the extra special awkward experience of not knowing how employers would interview me. They were usually one or a mixture of the following types of roles:

- frontend
- backend
- full-stack (frontend and backend)
- full-stack unicorn (all of the above, but they want you to design too!!)

As a part of the job search process, I started to study. I knew I'd have to cram in the standard "irrelevant" things employers like to test you on, especially with the added fact that I didn't know how I would be interviewed:

- Search and sort algorithms (merge and binary are popular)
- Data Structures (hash maps and trees are hot)
- Time and space complexity (Big-O)

On top of those standards and since I advertise myself as frontend, I generally also go over these fundamentals:

- event loop, async/await
- closures, hoisting, "this", prototypal inheritance, event bubbling
- SEO, semantics, accessibility
- CSS specificity, grid systems, reset/normalization, responsive/adaptive design, shadow dom
- React's virtual dom, hooks
- cross-site scripting
- performance optimization

## Interview process

As is standard for software engineering roles, the general process for every company I talked to looked like this:

- Introductory phone call: this was done by either the recruiter or hiring manager
- Technical screening: this was either a take-home or a phone + screen share with an engineer on the team where you code live to some sample problem(s)
- Onsite: generally a half-day ordeal where you sit in 45minute sessions with different team members to do some whiteboarding, more technical problem solving, drilled on design systems, and a behavioral round.

### Introductory call

Take this call as an opportunity to learn about the company. Depending on who you talk to, you may not get all your questions answered. For example, I generally take this time to ask about the engineering team structure, the tech stack, and the projects they are working on. However, recruiters may not know all the details here, but hiring managers may.

<figure>
  <img src="./woman-phone.jpg" alt="woman on phone">
  <figcaption>Get ready for that big phone call. Photo by <a href="https://www.pexels.com/@breakingpic">Breakingpic</a></figcaption>
</figure>

Sometimes you get to talk to the VP of Engineering. This is a great time to drill them on how they build the team and their engineering vision. If they cannot provide coherent answers, this is a great big red flag.

If you don't like the product, service, values, or goals of the company, use that to gauge whether or not you would like to take the next steps. The entire purpose of the introductory call is for them to get to know a bit about you and for the company to sell you the idea of the job, team, and company.

Being able to weed out your candidacy at this stage is important for you to save time.

### Technical screening

I had several different types of technical screenings, and spoiler alert, I do have a favorite.

- Take home: the hiring manager or recruiter will send you a problem to solve. It can be either timed or untimed, vague, open-ended, or concrete. Every problem and team is different. I've had time ranges from 1 hour, 4 hours, and unlimited (with a caveat of "people generally take half a day, but do what feels good for you"). Some of the timed ones are recorded with actual timestamps on a website, and some are timed problems sent to you with an agreed hour of the day.
- Peer: you are on a screen share interview with someone from the company's engineering team and they will ask you questions as you code live for them to see your style, debugging, and problem-solving skills

Sometimes it's a mixture of the screenings above are used. Don't feel incompetent if a company requires more than one screening: it may be a normal part of their process.

<figure>
  <img src="./css.jpg" alt="zoomed in css">
  <figcaption>Code tunnel vision is real when you are running out of time. Photo by <a href="https://www.pexels.com/@negativespace">Negative Space</a></figcaption>
</figure>

Example sites companies asked me to use screenings. All of them had pre-generated links or profiles to use for the actual screening:

- One company I interviewed with used a third party called [Karat](https://karat.com/) to do engineering technical interviews. They advertise themselves as a bias-free and positive candidate experience-oriented interview platform. I can only assume this is to save the company their own engineering time and weed out weak candidates. The Karat experience was nice as they had built-in video, voice, and coding environment
- [Hacker Rank](https://www.hackerrank.com/): I hate this one the most. The format is very loud and distracting and I had a hard time focusing.
- [Coderpad](https://coderpad.io/)
- [Code Signal](https://codesignal.com)
- [Triplebyte](https://triplebyte.com/)

I prefer the takehome exams because more often than not they were more practical and relevant to my skill set and for the position. One I've had recently was not relevant to my job, so that was a bit annoying.

### Onsite

Each company has their onsite slightly differently, but it's common to see the following themes:

- 1 short 5-10 minute introductory with recruiter, HR, or hiring manager providing you with the interview format
- 2-3 45 min-1 hr rounds with different engineers focusing on problem-solving (design system, whiteboard, data structures, time/space complexity)
- 1 behavioral round (what are your strengths/weaknesses, etc). This can be someone non-technical (product or designer) or someone more senior (VP or director).

<figure>
  <img src="./whiteboard.jpg" alt="whiteboarding">
  <figcaption>Whiteboarding. Photo by <a href="https://www.pexels.com/@divinetechygirl">Christina Morillo</a></figcaption>
</figure>

Some companies will kick you out if you perform poorly during the early stages (savage) and some will keep you around until the end (hopefully they like you).

I've sat in on a couple of interviews where the last round was me sitting at a table full of people representing different teams: engineering, product, design, and customer support. It was a two-way round-robin of questions and answers, an excellent environment to get to see the dynamics of the team and to learn about the company quickly.

## Closing thoughts

Although I don't have a solution for the perfect interview for both the company and candidate, I think two things stand out from my recent experience:

Practical takehomes are beneficial to learn a candidate's coding style and problem-solving skills. Candidates also get to carve out time to focus on the problem in the comfort of their environment without an over-the-shoulder peer.
Onsite team round tables are great for many eyes to assess a potential new colleague and provide candidates the lens to see actual company culture. Though I can see it being disruptive to teams, it seems invaluable to get an excellent candidate vetted by multiple teams.

<figure>
  <img src="./laptop-coffee.jpg" alt="laptop and coffee">
  <figcaption>Grab your laptop, get some coffee, and get comfortable. It'll be a while. Photo by <a href="https://www.pexels.com/@negativespace">Negative Space</a></figcaption>
</figure>

I hope better interview processes and experiences are created in the future to save everyone time and stress.
