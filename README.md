# Personal Portfolio of Past and Present (and Potentially Pondering) Projects
This website contains a portfolio of miscellaneous projects and things I've done, from significant school projects to teaching notes to side projects to one-off mathematical tangents.

Originally built with Vue, then converted to Nuxt, but Javascript-based was abandoned in 
favor of a simpler yet powerful Franklin/Julia-based generator (with minimal Javascript).

Built with Franklin.jl.

## Build & Deployment
Commits to the `dev` branch trigger the github workflow, which pushes the built and 
optimized files to the root directory of the master branch.

Cloudflare Pages (beta) is set up to build off of the master branch.
