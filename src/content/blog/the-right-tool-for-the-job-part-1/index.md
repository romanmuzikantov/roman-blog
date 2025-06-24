---
title: "The Right Tool for The Job: The Not so Comprehensive Guide (Part 1)"
description: "An introduction to a few topics I feel like are important to consider when choosing a low-code/no-code platform."
date: "06/24/2025"
draft: false
---

# The Right Tool for The Job: The Not so Comprehensive Guide (Part 1)

Not so long ago I wrote a LinkedIn post to celebrate a certification I obtained as an Outsystems Tech Lead, in this post I wrote about my views on using low-code/no-code platforms to build an application versus the ‘traditional’ way of coding an application. I’d like to write a bit more about this subject now that I’m not limited to a defined amount of characters.

I’ll start by saying that it’s called ‘The Not so Comprehensive Guide’ because there isn’t one right tool that fits all the needs and requirements of all the projects and teams out there. But there are, I think, some things to keep in mind when picking a tool from the ocean of platforms available, and that’s what I’ll be writing about. Those are general topics that are mostly focused on my experience using low-code/no-code platforms while having a traditional development background.

I’ve decided to write it in two parts after having laid out all the subjects I wanted to write about, I noticed there were quite a few, thus it might have been a bit too long to read (and to write for me).

# My experience

Before diving into the details of this article I think that now is a good time to talk a bit more about what my experience as a software engineer has been so far, this might give a bit more context on how I ended up using low-code/no-code tools.

I’ve been working professionally as a software engineer for about 5 years now, during which I spent 2 years using actively low-code platforms, but I feel like I’ve been floating inside the ‘developer’ ecosystem for way longer than that. I vaguely remember watching and helping my father build a PC, trying to learn C to create my own game as a kid thinking that would be easy (that was a a bit too ambitious), learning how to make my first website, reading books from Uncle Bob, following Casey Muratori’s Handmade Hero series… I know that some people have a lot of trouble finding their own path, but I had the chance to realise very early what I wanted my path to be (or at least one of my path).

So naturally I spent a lot of time keeping myself informed on the new trends, the new technologies, learning the new cool framework, but one thing that got through my radar almost undetected was the low-code/no-code movement.

Well it’s not entirely correct, I did hear about it a long time ago, I did hear about tools like Wix, WordPress or Shopify of course, I was just not that much interested in them at that time, I wanted to code and I wanted to make everything from scratch myself (even though you can almost always say that there is some kind of abstraction, so you very rarely do anything from scratch in theory). I went with the assumption that those tools were simply not made for me and that the output would be of lesser quality than the output of doing the ‘work’ myself, and to be honest I don’t know what it would have been because I never took the time to even try it.

That’s it, after that I simply discarded anything that was outside of the ‘traditional’ coding path (and to be fair, there is just so many exciting things to learn in tech that at some point you have to choose what to focus on), while the low-code/no-code ecosystem got bigger and bigger.

Then at some point in my career, I became open to new opportunities, I wasn’t actively looking but I got contacted by a few recruiters, one recruiter was looking for a software engineer profile for technologies I never heard of, then during our conversation the low-code/no-code terms came up and my first thought was: ‘Oh no, that’s not for me’.

Still, my curiosity took over and I gave it a chance, I made some research and I tried one of the technologies we talked about during our conversation, it was Outsystems. I really was impressed by the capabilities and by the amount of functionalities I was able to implement in just a few nights, and there it was, through hands-on experimentation and research, I gradually immersed myself in that ecosystem.

Two years later, I don't regret taking that step one bit for two main reasons, I discovered incredible tools and developed a more open-minded perspective about the right approaches to building applications.

## Closed Source/Open Source

One thing that often comes up as an argument against low-code tools is that they mostly are black boxes, we do not know what’s under the hood and have no control over it, meaning that if any issue arises with the tool itself you are entirely dependent on the provider of the said tool. And I mostly agree with that, I do prefer using open source tools, I’m more comfortable understanding what’s under the hood before using abstractions.

Now, I have two things to say about this, first of all there are really good open source low-code/no-code tools out there, with a very good support and funding, Supabase and n8n are really great examples of this, they often work great to build a backend or an automation solution.

Second, for some solutions we have to differentiate the tool itself from the output of that tool, what I mean by that is that for some tools you might not hold the control over the tool that you use to build your application but you might still hold the control over the code that you get as an output, I’ll talk more about this in the “Code Export” section.

## Data ownership & security

Many people understandably prefer keeping control over where their data is stored, whether it is in the cloud service of their choosing or on-premise. I think that most readers will agree that maintaining control over your business’s (or your own) data is crucial.

This concern appears to be well understood and taken seriously in the community, as most serious low-code tools propose on-premise hosting or facilitate data export to prevent vendor lock-in. To my knowledge, Supabase, Xano, and Outsystems serve as excellent examples of this approach.

Tools like Xano take security very seriously, and I particularly appreciate their approach specifically since they've made it a central focus. They comply with numerous security standards (GDPR, SOC2, HIPAA…) and continuously work to expand their compliance. They also provide robust security features for data access, such as Role-Based Access Controls. Similarly, Supabase excels in this area with its granular approach using RLS (Row Level Security).

I believe this topic deserves more attention, and I plan to write a detailed post about backend tools in the future.

## Code Export

Back to the subject of solution ownership, some tools offer code export capabilities for your applications. This serves as an excellent safeguard against a common concern: "What happens if the platform goes out of business?". Most tools I know tend to try to have a comforting answer to this question, but as a software engineer I feel like there is no greater solution than being able to export quality code out of the tool and being able to keep working on your application without having to rely entirely on the low-code/no-code tool.

Of course, code export alone isn't sufficient, the exported code must be well-written and easily comprehensible for any developer. It should also use widely-adopted technologies to avoid getting locked into obscure systems that few developers understand.

In this section, I want to highlight WeWeb, which is actually the only low-code tool I use that really fits this particular need. When you build with WeWeb, what you end up with is a Vue.js app, something you can push straight to a GitHub repo. Since Vue.js is a pretty popular and well-supported framework, it makes it a lot easier to hand things off to developers later on if you decide to go the custom route. It’s a nice middle ground between the ease of low-code and the flexibility of traditional development.

I’ve got to admit, WeWeb has a special place in my heart. There’s a lot I appreciate about how it works, and I’ll probably do a separate post at some point to dive deeper into what makes it such a solid tool.

## Extensibility

When you’re choosing the technologies to use to build your project it’s essential to know and understand the limitations of said technologies, by choosing a tech blindly you take the risk to find yourself in a quite difficult position later on when you realise that some of the things you need could be too hard to make or in the worst case, impossible to make. At which point you’ll have to make a difficult decision: cutting off some of the features ? keeping the features but delaying the project ? remake everything ?… 

All of that could become very unpleasant, and could be avoided by taking some time at the beginning of the project to really think through what are the specific needs of the project and which tech responds to those needs the best.

Traditional development has the advantage to be really flexible, of course you should still look out for what’s the best language and framework to use for your needs, but when it comes to a low-code/no-code tool you should really look into what the tool provides in it’s default components and how extensible it is, some requirements might be a bit too niche for a low-code tool to provide a default implementation, so it might require to get your hands dirty and do some custom development if the tool allows it.

To be honest, none of the low-code/no-code tools I know is restricted to the provided components, they all provide some way to go out of the paved road, but my advice remains: make your own researches based on your requirements at the start of the project before making any decision.

## Optimisation

Optimisation can come in many ways and in the scope of this post it’s mainly dependent on two things, the technologies you use and the way you use them. The first requires from you to choose the right technologies for your needs, some might be better for handling server/client interaction while some might provide better support for SEO for example. Choosing the right tech can be vital to the success of your project.

The way you use them requires from you to be rigorous and understand what are some good practices to follow in order to prevent finding yourself with an app that loads too long or that crashes on less performant devices.

With traditional development, you’re mostly setting things up yourself, unless you’ve got AI lending a hand with the code. It’s built for developers, so there’s an expectation that you already know the best practices. But no-code tools also aim to serve people who don’t have a development background, and that’s where things can get tricky. Those users might not be as familiar with things like optimisation, which can lead to issues down the line if the tool doesn’t help guide them through it.

Take data loading, for example. No-code tools often make it super easy to hook up data sources and pull information into your app. But I’ve noticed that some platforms will load *everything* right at startup by default. Depending on the size of your app, that can turn into a serious bottleneck, especially if you’re not aware of how it impacts performance during those first crucial moments of the user experience.

Overall, I really believe that giving non-developers access to these tools is a game changer. It opens the door to deeper collaboration and faster iteration. But when it comes to larger or more complex projects, having experienced developers involved is still important to avoid common pitfalls, whether that’s around performance, scalability, or even security.

## Branching

I don’t think it would be too controversial to say that branches are a must have for most projects, whether you work with a team or alone. Now in traditional development branching is usually provided by Git or any other SCM, so no worries over there. When it comes to low-code/no-code you mostly have to rely on the platform to give you access to that feature, unfortunately I feel like that this is something that is missing a lot currently, very few tools provide it: Supabase and Xano, there might be others but those are the ones I know.

Without a proper branching solution you can fall into two types of issues, if you work on a project with other collaborators, every time you’re going to push your changes you’ll need to merge it with the changes of others (if the tool has any source control management solution in place of course) with the risk of having conflicts or breaking features that your collaborators might need. Now how the conflicts are handled is another issue, when a conflict arises you should have the ability to choose granularly what to keep as it is and what to override, without that it would be simply too complicated to work as a team on one project. Then even if you’re not working in a team, branching is still a really valuable tool, let’s say you’re currently developing something big that takes a lot of time, and another priority arises, you have to put aside the bigger ‘thing’ you’re working on to work on the feature that takes the priority, now you find yourself with two features being developed at the same time on the same “branch” and you have to either take time to hide one feature to push the other to production with the risk of pushing bugs alongside it or wait to finish everything before pushing to production. With branching all you would need to do is create a branch per feature and only merge the branches when the feature is done.

You could implement something like feature flags, which could help a bit with the last issue, but that won’t entirely replace the benefits of branching.

# Conclusion

That’s it for the first part, there is still quite a few topics I’d like to write about that will come up in the second part but I hope that this already gives a good idea of what, I feel like, are some crucial points to consider when choosing a technology for a project in the low-code/no-code ecosystem.
