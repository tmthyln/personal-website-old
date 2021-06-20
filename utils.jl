using Dates

function hfun_postcard(params)
    page_rpath = strip(params[1], ['/'])
    title = pagevar(page_rpath, "title")
    description = pagevar(page_rpath, "desc")
    println(pagevar(page_rpath, "rss"))
    date = pagevar(page_rpath, "date")
    formatted_date = "$(dayname(date)), $(monthabbr(date)) $(day(date)), $(year(date))"
    link = params[1]
    image = length(params) ≥ 2 ? """<img class="card-img-top" src="$(params[2])" />""" : ""#"<div class="card-img-top" style="background-color: blue"></div>"""

    """
    <div class="post-card card bg-dark text-white border-light mb-4">
        $(image)
        <div class="card-body">
            <a href="$(link)"><h2 class="card-title">$(title)</h2></a>
            <small class="posted-date card-text">$(formatted_date)</small>
            <p class="card-text mt-3">$(description) &nbsp;&nbsp;<a href="$(link)" class="read-more">Read More</a></p>
        </div>
    </div>
    """
end

function hfun_timerange(params)
    start = params[1]
    ending = params[2]
    title = params[3]
    description = length(params) ≥ 4 ? params[4] : ""

    """
    <div>
      <div class="title">$title</div>
      <div class="info">$description</div>
    </div><span class="number"><span>$ending</span><span>$start</span></span>
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
