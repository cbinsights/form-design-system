#!/bin/sh
#!/bin/sh
# [ $(git rev-parse HEAD) = $(git ls-remote $(git rev-parse --abbrev-ref @{u} | \
# sed 's/\// /g') | cut -f1) ] && echo up to date || echo not up to date

# Usage: 

jscodeshift --verbose 1 --extensions js,jsx -t $@ --parser babylon