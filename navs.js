$(document).ready(function(){
    var section = $("section");
    var header;
    var id;
    var links;
    var linkname;
    
    for (var i = 0; i < section.length; i++)
    {
        id = $(section[i]).attr("id");
        header = $(section[i]).find(".section-heading").html();
        if (header.length < 1)
        {
            header = id;
        }

        if ($(section[i]).attr("data-name"))
        {
            header = $(section[i]).attr("data-name");
        }

        links = $(section[i]).find(".addtomenu");
        
        if (links.length > 0)
        {
            $(".build-navs").append("<li class='dropdown'><a href='#"+id+"' class='dropdown-toggle page-scroll' data-toggle='dropdown'>"+header+" a</a><ul class='dropdown-menu dropdown-menu-left currentmenu'></ul></li>");

            for (var i2 = 0; i2 < links.length; i2++)
            {
                if ($(links[i2]).attr("data-name"))
                {
                    linkname = $(links[i2]).attr("data-name");
                }
                else
                {
                    linkname = $(links[i2]).html();
                }

                $(".currentmenu").append("<li><a href='"+$(links[i2]).attr("href")+"'>"+linkname+"</a></li>");
            }

            $(".currentmenu").append("<li role='separator' class='divider'></li>");
            $(".currentmenu").removeClass("currentmenu");

        }  
        else
        {
            $(".build-navs").append("<li><a class='page-scroll' data-menuid='"+header+"' href='#"+id+"'>"+header+"</a></li>");
        }

    }
    
})