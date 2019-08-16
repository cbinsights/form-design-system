Unless the perfect api interface is "obvious", optimize for fds component creation, rather than getting the api right.

Developers may have the inclination that they cannot contribute new component that they're working on to this new repo. This may be because they're afraid they haven't built a component that accommodates for all future use cases.

This is the wrong metric. We definitely want to make sure we're not "pre-optimizing" our javascript code in general, and this also applies to fds-component. Bias towards creating the component, and as long as it's build reusable with the best current knowledge we have, with the best practices we have, building and putting that component in fds-components will contribute towards the next team that needs this component, to then build upon the baseline set by making sure the component is here in the first place.

Moreover, developing it here ensures it's free from redux, it's a lot easier (Prettier, etc), you get a lot more manpower and support (UI Platform people will go out of their way to help you develop and review it) and it's one of the best ways to ensure the component you end up building is reusable.