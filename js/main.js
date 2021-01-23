

let altica = new showStreams('alticarp', 'https://alticarp.fr/', 'img/altica.png', 'altica')
let faily = new showStreams('failyv','http://www.failyv.com/', 'img/failyV.png', 'faily')
let gtalife = new showStreams('gtalife', 'https://www.gtaliferp.fr/index.php', 'img/gta-life.png', 'gtalife')
let jumpClick = new showStreams('21jumpclick', 'https://www.gtaliferp.fr/index.php', 'img/gta-life.png', '21JumpClick')
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
}








