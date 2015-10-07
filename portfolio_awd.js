if (Meteor.isClient) 
{
  Template.body.events
({
	'click .closeButton': function()
	{
		console.log("clicked close")
		$('.browserWrapper').addClass('zoomOut')
		Meteor.setTimeout(function(){$('.browserWrapper').addClass('displayNone')}, 
			1200)
	}
	,
	'click #prevLVD': function()
	{
		console.loge('prev lvd')
	},
	'click #nextLVD': function()
	{
		console.log('next lvd')
	}
})

}

if (Meteor.isServer) 
{

}

