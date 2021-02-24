

let altica = new showStreams('altica',  'altica')
let faily = new showStreams('failyv', 'faily')
let gtalife = new showStreams('gtalife', 'gtalife')
let jumpClick = new showStreams('21jumpclick', '21JumpClick')
let fraternity = new showStreams('fraternity', 'fraternity')
let flashback = new showStreams('flashback', 'flashback')
altica.launch()

/** launch Altica's streams */
$('#altica').on('click', function(){
	$('#nav-title').text('Altica')
	altica.launch.bind(altica)
	addActive('altica')
	clearRefresh()
})


/** launch FailyV's streams */
$('#faily').on('click', ()=>{
	$('#nav-title').text('Faily V')
	addActive('faily')
	clearRefresh()
})
$('#faily').on('click', faily.launch.bind(faily))


/** launch GTA Life's streams */
$('#gtalife').on('click', ()=>{
	$('#nav-title').text('GTA Life')
	addActive('gtalife')
	clearRefresh()
})
$('#gtalife').on('click', gtalife.launch.bind(gtalife))

/** launch 21 Jump Click's streams */
$('#21JumpClick').on('click', ()=>{
	$('#nav-title').text('21 Jump Click')
	addActive('21JumpClick')
	clearRefresh()
})
$('#21JumpClick').on('click', jumpClick.launch.bind(jumpClick))

/** launch Fraternity */
$('#fraternity').on('click', ()=>{
	$('#nav-title').text('FRaternity')
	addActive('fraternity')
	clearRefresh()
})
$('#fraternity').on('click', fraternity.launch.bind(fraternity))

/** launch Flashback */
$('#flashback').on('click', ()=>{
	$('#nav-title').text('FlashBack')
	addActive('flashback')
	clearRefresh()
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


function clearRefresh(){
	altica.clear()
	faily.clear()
	gtalife.clear()
	jumpClick.clear()	
	fraternity.clear()
	flashback.clear()
}

function addActive(servName){
	$('a').removeClass('active');   
	$('#'+servName).addClass('active');
}








