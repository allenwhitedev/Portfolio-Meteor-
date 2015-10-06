if (Meteor.isClient) 
{
  Template.body.events
({
	'click .closeButton': function()
	{
		console.log("clicked close")
		$('.browserWrapper').addClass('fadeOutLeft')
		Meteor.setTimeout(function(){$('.browserWrapper').addClass('displayNone')}, 
			1200)
	}
})

}

if (Meteor.isServer) 
{

}

