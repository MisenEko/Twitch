
let servArray = [];
let audienceArray = [];

servArray.push(altica = new showStreams('altica',  'altica'))
audienceArray.push(audienceAltica = new Audience('altica'))
servArray.push(faily = new showStreams('failyv', 'faily'))
audienceArray.push(audienceFaily = new Audience('faily'))
servArray.push(gtalife = new showStreams('gtalife', 'gtalife'))
audienceArray.push(audienceGtaLife = new Audience('gtalife'))
servArray.push(jumpClick = new showStreams('21jumpclick', '21JumpClick'))
audienceArray.push(audience21J = new Audience('21jumpclick'))
servArray.push(fraternity = new showStreams('fraternity', 'fraternity'))
audienceArray.push(audienceFra = new Audience('fraternity'))
servArray.push(flashback = new showStreams('flashback', 'flashback'))
audienceArray.push(audienceFlash = new Audience('flashback'))

servArray[0].launch()
audienceAltica.launch()

/** launch Altica's streams */
$('#altica').on('click',()=>{
	$('#nav-title').text('Altica')	
	addActive('altica')
	clearRefres(servArray)
	clearRefres(audienceArray)
})
$('#altica').on('click', altica.launch.bind(altica))
$('#altica').on('click', audienceAltica.launch.bind(audienceAltica))


/** launch FailyV's streams */
$('#faily').on('click', ()=>{
	$('#nav-title').text('Faily V')
	addActive('faily')
	clearRefres(servArray)
	clearRefres(audienceArray)
})
$('#faily').on('click', faily.launch.bind(faily))
$('#faily').on('click', audienceFaily.launch.bind(audienceFaily))


/** launch GTA Life's streams */
$('#gtalife').on('click', ()=>{
	$('#nav-title').text('GTA Life')
	addActive('gtalife')
	clearRefres(servArray)
	clearRefres(audienceArray)
})
$('#gtalife').on('click', gtalife.launch.bind(gtalife))

/** launch 21 Jump Click's streams */
$('#21JumpClick').on('click', ()=>{
	$('#nav-title').text('21 Jump Click')
	addActive('21JumpClick')
	clearRefres(servArray)
	clearRefres(audienceArray)
})
$('#21JumpClick').on('click', jumpClick.launch.bind(jumpClick))

/** launch Fraternity */
$('#fraternity').on('click', ()=>{
	$('#nav-title').text('FRaternity')
	addActive('fraternity')
	clearRefres(servArray)
	clearRefres(audienceArray)
})
$('#fraternity').on('click', fraternity.launch.bind(fraternity))

/** launch Flashback */
$('#flashback').on('click', ()=>{
	$('#nav-title').text('FlashBack')
	addActive('flashback')
	clearRefres(servArray)
	clearRefres(audienceArray)
})
$('#flashback').on('click', flashback.launch.bind(flashback))


/** Quick button to have white background */
$('.fa-lightbulb').on('click', function(){
	 	$('#light').toggleClass('grey')
})

$( '#topheader .navbar-nav a' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});



function clearRefres(array){
	array.forEach(element => {
		element.clear();
	});
}

function addActive(servName){
	$('a').removeClass('active');   
	$('#'+servName).addClass('active');
}








