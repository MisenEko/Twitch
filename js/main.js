
let servArray = [];

servArray.push(altica = new showStreams('altica',  'altica'))
servArray.push(faily = new showStreams('failyv', 'faily'))
servArray.push(gtalife = new showStreams('gtalife', 'gtalife'))
servArray.push(jumpClick = new showStreams('21jumpclick', '21JumpClick'))
servArray.push(fraternity = new showStreams('fraternity', 'fraternity'))
servArray.push(flashback = new showStreams('flashback', 'flashback'))

servArray[0].launch()

/** launch Altica's streams */
$('#altica').on('click',()=>{
	$('#nav-title').text('Altica')	
	addActive('altica')
	clearRefres(servArray)
})
$('#altica').on('click', altica.launch.bind(altica))


/** launch FailyV's streams */
$('#faily').on('click', ()=>{
	$('#nav-title').text('Faily V')
	addActive('faily')
	clearRefres(servArray)
})
$('#faily').on('click', faily.launch.bind(faily))


/** launch GTA Life's streams */
$('#gtalife').on('click', ()=>{
	$('#nav-title').text('GTA Life')
	addActive('gtalife')
	clearRefres(servArray)
})
$('#gtalife').on('click', gtalife.launch.bind(gtalife))

/** launch 21 Jump Click's streams */
$('#21JumpClick').on('click', ()=>{
	$('#nav-title').text('21 Jump Click')
	addActive('21JumpClick')
	clearRefres(servArray)
})
$('#21JumpClick').on('click', jumpClick.launch.bind(jumpClick))

/** launch Fraternity */
$('#fraternity').on('click', ()=>{
	$('#nav-title').text('FRaternity')
	addActive('fraternity')
	clearRefres(servArray)
})
$('#fraternity').on('click', fraternity.launch.bind(fraternity))

/** launch Flashback */
$('#flashback').on('click', ()=>{
	$('#nav-title').text('FlashBack')
	addActive('flashback')
	clearRefres(servArray)
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








