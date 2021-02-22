

let altica = new showStreams('altica',  'altica')
let faily = new showStreams('failyv', 'faily')
let gtalife = new showStreams('gtalife', 'gtalife')
let jumpClick = new showStreams('21jumpclick', '21JumpClick')
let fraternity = new showStreams('fraternity', 'FRaternity')
altica.launch()

/** launch Altica's streams */
$('#altica').on('click', ()=>{
	$('#nav-title').text('Altica')
	clearRefresh()
})
$('#altica').on('click', altica.launch.bind(altica))

/** launch FailyV's streams */
$('#faily').on('click', ()=>{
	$('#nav-title').text('Faily V')
	clearRefresh()
})
$('#faily').on('click', faily.launch.bind(faily))


/** launch GTA Life's streams */
$('#gtalife').on('click', ()=>{
	$('#nav-title').text('GTA Life')
	clearRefresh()
})
$('#gtalife').on('click', gtalife.launch.bind(gtalife))

/** launch 21 Jump Click's streams */
$('#21JumpClick').on('click', ()=>{
	$('#nav-title').text('21 Jump Click')
	clearRefresh()
})
$('#21JumpClick').on('click', jumpClick.launch.bind(jumpClick))

/** launch Fraternity */
$('#fraternity').on('click', ()=>{
	$('#nav-title').text('FRaternity')
	clearRefresh()
})
$('#fraternity').on('click', fraternity.launch.bind(fraternity))


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
}








