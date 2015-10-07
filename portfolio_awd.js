var lvdPics = ['pf_lvd1.png', 'pf_lvd2.png', 'pf_lvd3.png'] 

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
		if (Session.get('currPic') == 'pf_lvd3.png')
		{
			$('#nextLVD').addClass('navArrowActive')
			Session.set('currPic', 'pf_lvd2.png')
		}
		else if (Session.get('currPic') == 'pf_lvd2.png')
		{
			$('#prevLVD').removeClass('navArrowActive')
			Session.set('currPic', 'pf_lvd1.png')
		}
		else
			console.log('No more pics in this direction')
	},
	'click #nextLVD': function()
	{
		if (Session.get('currPic') == 'pf_lvd1.png')
		{
			$('#prevLVD').addClass('navArrowActive')
			Session.set('currPic', 'pf_lvd2.png')
		}
		else if (Session.get('currPic') == 'pf_lvd2.png')
		{
			Session.set('currPic', 'pf_lvd3.png')
			$('#nextLVD').removeClass('navArrowActive')
		}
		else
			console.log('No more pics in this direction')
	}
})

// Template.lvd.onCreated({Session.set('currPic', 'pf_lvd2')})

Template.lvd.helpers
({
	'currPic': function()
	{
		return Session.get('currPic')
	}
})

}

if (Meteor.isServer) 
{

}

