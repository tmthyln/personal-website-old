function hfun_postcard(params)
    title = params[1]
    description = params[2]
    date = length(params) ≥ 3 ? "<em>$(params[3])</em>" : ""
    link = length(params) ≥ 4 ? params[4] : "#"
    image = length(params) ≥ 5 ? """<img class="blog-img" src="$(params[5])" />""" : ""

    """
    <div class="blog-card">
        $(image)
        <div class="text-overlay">
            <h2>$(title)</h2>
            $(date)
            <p>$(description) &nbsp;&nbsp;<a href="$(link)" class="read-more">Read More</a></p>
        </div>
    </div>
    """
end

function hfun_bar(vname)
  val = Meta.parse(vname[1])
  return round(sqrt(val), digits=2)
end

function hfun_m1fill(vname)
  var = vname[1]
  return pagevar("index", var)
end

function lx_baz(com, _)
  # keep this first line
  brace_content = Franklin.content(com.braces[1]) # input string
  # do whatever you want here
  return uppercase(brace_content)
end
