# Principles

I'm going to use "Chip" as an example token / component in the following principles

## Presentational focused over business focused

So my perception of what we’ve been doing so far, that we want to get away from, is accommodating the business case rather than the abstracted presentational case.

http://mbootstrap.com/docs/forms/chips

So take this Chip…. It only renders a Chip. Now… there “could” technically be a business case for anything here: the ability to render the Chip as a text link, or a button, or an input… the possibilities are endless. The problem is that there are so many different business cases, and the business cases are evolving and changing. The idea is that behind optimizing not for the business case 

## Alignment with design (which helps developers in the long run)

The way design / product look at these things, is they know they have a design “Chip” in their library that they can pull from and use when they start working on a new feature (there’s a longer explanation but this is simple enough). One of the things we want to improve, is the interaction and collaboration between developers and designers, and this is something that can potentially get in the way. So we could assume "Chip" is a tag based on the specific business cases... but it’s “also” used as a filter in other use cases. If we went ahead and optimized for the immediate business case, we’ve created a different semantic grouping, and `Chips` now starts to mean something different than what it means to designers. This will get designers confused, and developers confused. 

## Components should only do as much as it needs to

You could technically take 5 components and combine them underneath the hood and have it all just work. The problem (outside of what was previously mentioned) is it not only creates a larger surface api, it creates a more irrelevant api than necessary. Developers may get the wrong idea and think that certain props are "ok" to use with certain variations, and what a Component does becomes so muddied as to become entirely unhelpful, or becomes an opening to add "more" components into that one component.

## The value of the UI Component “Library” is flexibility, the value of a UI “component” is being rigid.

(I like the Unix philosophy that Adam has instead of a lot of this)

There’s a functional library called “Ramda”. It’s a functional library thats composed of very small methods. From these methods, you can compose for your desired end result.

This is a very similar idea that we want to achieve on UI platform. When we’re building out components, we’re going: “What’s the smallest thing to accommodate for here in this component that makes sense?” and then we let those components be composed, to achieve the desired end result.

The thing to note, is we actually don’t want developers modifying the underlying components “at all” pretty much. The benefit of the components is their rigidity and assumed correctness. Anytime you see a Chip in the repo, is 100% guaranteed to be a Chip as expected by product and design, there’s no miscommunication or crossed lines there. If we allow this component that’s rigid visually by design to be altered, it moves us away from that model of “one function that does one thing well”. Now if the Chip is incorrect, or should be modified (let’s say we “could” make an argument that we should allow chips to be text links) then those sort of decisions should be bubbled up to a discussion or a PR, and we change Chips to allow props.

This is the powerful stuff that really helps us all be on the same page and start iterating super fast.

So the goal of the “library” itself, is to provide flexibility. You’re free to import any component and render them conditionally, or we’ll have components that are meant to wrap other components to provide margin / padding / layout changes (these are coming soon!). But it’s still the same principle: the components do as little as makes sense, and you compose to get your desired effect.

One last thing here: I could easily have like 6 different `Chip` components… one for medium sized blue, one for small sized gray, etc. This for the most part is an unhelpful abstraction. Things “purely” theme related (e.g. we change the color scheme but it still looks like a chip, just like the others), or size related, are generally ok. There can’t be a set of rules around this because it all just depends on what makes sense for that specific use case… long story short, smallest UI components that make sense, that are generally rigid and immune from visual change, but you’re free to change their orientation and layout by composition, either through layout components we’ll provide you, or using your own.

Also, for all those reasons, moving forward, we’ll be disabling classNames on all UI components for both existing ones, and future ones (Flex / FlexItem / ButtonGroup / Chips / Toasts / etc). We want to make sure these items can be referred to consistently, and it also lessens the chance that changes on the UI component library CSS side breaks other sites.
