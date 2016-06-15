function safeclose()
{

	$(".dropper").each(function(){

		if(!$(this).hasClass("hiddendrop"))
		{
			$(this).addClass("hiddendrop");
		}

	});

	$(".clickedflag").removeClass("clickedflag");

}

$(document).ready(function(){
	var section = $("section");
	var headerelem;
	var header;
	var id;
	var links;
	var linkname;
	
	for (var i = 0; i < section.length; i++)
	{
		id = $(section[i]).attr("id");
		headerelem = $(section[i]).find(".section-heading");

		if (headerelem.length < 1)
		{
			header = id;
		}
		else
		{
			header = $(headerelem).html();
			if (header.length < 1)
			{
				header = id;
			}

		}

		if ($(section[i])[0].hasAttribute("data-name"))
		{
			header = $(section[i]).attr("data-name");
			if (header.length < 1)
			{
				continue;
			}
		}
		$(".build-navs").append("<li class='currentmenu'><a class='scroller page-scroll' data-menuid='"+header+"' href='#"+id+"'>"+header+"</a></li>");

		links = $(section[i]).find(".addtomenu");

		if (links.length > 0)
		{

			$(".currentmenu").addClass("hasdrop");

			$(".currentmenu").find("a").append("<span class='caret'></span>");

			$(".currentmenu").append("<table data-dropid='"+header+"' class='dropper hiddendrop dropdowntabledesktop dropdownsizer'><tbody class='currentdrop dropdownsizer'></tbody></table>");


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

				$(".currentdrop").append("<td class='dropdownsizer'><a class='dropdownoption' href='"+$(links[i2]).attr("href")+"'>"+linkname+"</a></td>");
			}

			$(".currentdrop").append("<td class='dividertd'><div class='divider'></div></td>");

		
		}

		$(".currentmenu").removeClass("currentmenu");
		$(".currentdrop").removeClass("currentdrop");

		$(".scroller").off().on("click", function(event){
			if (!$(this).parent().hasClass("hasdrop"))
			{
				safeclose();
				if($('.visible-xs').is(':visible'))
				{
					$(".navbar-toggle").trigger("click");
				}

			}
		});

		$(".navbar-toggle").off().on("click",function(){safeclose();})

		$(".hasdrop").off().on("click", function(event){
			if ($('.visible-xs').is(':visible')) //puhelimen eventti (jos pieni näyttö)
			{

				if( $(this).find(".scroller").hasClass("clickedflag") )
				{

				    $(".clickedflag").removeClass("clickedflag");
				    var $anchor = $(this).find(".scroller");
				    $('html, body').stop().animate({
				        scrollTop: $($anchor.attr('href')).offset().top
				    }, 1500, 'easeInOutExpo');
				    $(".navbar-toggle").trigger("click");
				    //event.preventDefault();

				}
				else
				{
					$(".clickedflag").removeClass("clickedflag");
					$(this).find(".scroller").addClass("clickedflag");
					//event.preventDefault();
				}

				$(".dropper").each(function(){

					if(!$(this).hasClass("hiddendrop"))
					{
						$(this).addClass("hiddendrop");
					}

				}); 

				if ($(this).find("table").hasClass("dropdowntabledesktop"))
				{
					$(this).find("table").removeClass("dropdowntabledesktop");
				}
				$(this).find("table").removeClass("hiddendrop");
			}
			else
			{
			    var $anchor = $(this).find(".scroller");
			    $('html, body').stop().animate({
			        scrollTop: $($anchor.attr('href')).offset().top
			    }, 1500, 'easeInOutExpo');
			    event.preventDefault();
			}
		}).on("mouseover", function(){
			if (!$('.visible-xs').is(':visible')) //desktop
			{
				if (!$(this).find("table").hasClass("dropdowntabledesktop"))
				{
					$(this).find("table").addClass("dropdowntabledesktop");
				}
				$(this).find("table").removeClass("hiddendrop");
			}
		}).on("mouseout", function() { 
			if (!$('.visible-xs').is(':visible'))
			{
				$(this).find("table").addClass("hiddendrop");
			}
		});

	}

	$('[data-spy="scroll"]').each(function () { //refresh dynaamisen menun takia
        $(this).scrollspy('refresh');
    }); 
	
})
