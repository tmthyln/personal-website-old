@def title = "A Defense and Attack of Julia"
@def blogpost = true
@def tags = ["julia", "programming"]
@def date = Date(2020, 10, 15)
@def rss = "Recently, I was discussing a slow computational problem with some colleagues where they needed to use MATLAB to develop, but the solution was too slow to compute for any meaningfully sized inputs. When Julia was suggested, it was passed off as a meme, so I felt obligated to talk about why I choose to use Julia."

Composability by Default
Recently, I needed to work with a novel machine learning model that used FFT with . At the time, PyTorch did not really support complex numbers, so a decent chunk of the original codebase in Python was reimplementing things like batch division of complex numbers. Making a prototype in Julia, however, was a breeze. I was anticipating something to be incompatible along the way, but every time I added a new component, each part happened to still remain composable with everything else (e.g. adding FFTs didn't break the autodifferentiation or compatibility with CUDA). This also makes the burden of needing to choose a particular set of compatible libraries (an ecosystem of packages) much alleviated. When implementing my own convolution, I have choices, all of which integrate equally well with the other operations: I can use the lower level `conv` functions supplied in Flux's NNLib, or I can write my own for-loops (which are just as fast, due to other features of Julia), or write it in einsum notation with Tullio.jl.

As a result, the phrase "_____ is not supported in this library" is less often heard with Julia libraries. Of course, sometimes it does still take work to make sure APIs are compatible and iron out various little bugs, but it is generally incredibly easy to make something work across multiple libraries.


Community
Of course, there are amazing people in the Julia community, but the language community also has its share of problems. When 

# cons
discovery