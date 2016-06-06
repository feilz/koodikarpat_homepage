$(document).ready(function(){
	var section = $("section");
	var header;
	var id;
	
	for (var i = 0; i < section.length; i++)
	{
		id = $(section[i]).attr("id");
		header = $(section[i]).find(".section-heading").html();
		if (header.length < 1)
		{
			header = id;
		}
		
		$(".build-navs").append("<li><a class='page-scroll' href='#"+id+"'>"+header+"</a></li>");
	}
	
	
})