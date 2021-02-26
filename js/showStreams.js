class showStreams extends twitchAjax{

    constructor(searchServer, idServer){
        super()        
        this.serverRP = searchServer; 
        this.idServer = idServer;
        this.isRunning = false;
    }

    /**
     *  function to launch the app
     */
    launch(){

        let launchFunction = 1;
        $("#slider, #twitch-embed-main , #streamer-logo , #streamer, #stream-title").empty();
        $('#block-1 img').remove();
        
        this.streamData(launchFunction);
        this.clear();
        this.startRefreshThumbNail();
        this.startRefreshCount() ;        
        
    }




/**
 * function to check if a stream is live or not
 * 
 * @param {data from ajax call} data 
 * @param {*} idServer 
 */

    showStream(data, idServer){          //function to play stream on player and add thumbnail on the webpage
                
        
        this.idServer = idServer.charAt(0).toUpperCase() + idServer.slice(1);
        this.slideIndex = 1;
        let firstCall = true;
        this.serverList.forEach(this.updateCountStream.bind(this));
        
            if(data['data'].length === 0){

                $('#streamers-info').hide();
                $('#slider').hide();
                let blank = '<div class="alert alert-danger" id="blank"> Aucun streamer ne diffuse en ce moment de scène lié au serveur : '+ this.idServer + ' </div>';               
                $("#twitch-embed-main").append(blank);

            }else{
                this.gtalist = [];
                this.displayStream(firstCall, data, this.gtalist);
            }
    }

    /**
     * function to get all GTA stream with the server name and show it
     * 
     * @param {check if it's  afirst call or not} firstCall 
     * @param {data from ajax call} data 
     */
    displayStream(firstCall, data){
        
        let y = 1; 
        let gtalist = this.gtaSort(data);
        let gtadata = this.gtaData(data);
        
        let img = '';

        let owl = $('<div class="owl-carousel"></div>')
        $('#slider').append(owl);

        $('#streamers-info').show();
        $('#slider').show();


        for (let i = 0 ; i < gtalist.length ; i++){ 

                img =$('<div class="img-wrapper"><figure><img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_'+gtalist[i]+'-256x144.jpg" alt="image gta rp serveur '+this.idServer+'"><figcaption>'+gtadata[i].display_name+'</figcaption><figure></div>')
                .on("click", (index => {                                
                    return e => { 
                        $("#twitch-embed-main").empty();                                                                    
                        new Twitch.Embed("twitch-embed-main", {
                            width: '80%',
                            height: '80%',
                            channel: gtalist[index],                                    
                            layout: "video",                                        
                            parent: ["embed.example.com", "othersite.example.com"]                                    
                        });

                        $('#streamer-logo').empty();  
                        $('#streamer').html(gtadata[i].display_name);  
                        $('#streamer-logo').append('<img src="'+gtadata[i].thumbnail_url+'">');
                        $('#stream-title').html(gtadata[i].title);
                        document.getElementById('button').setAttribute('href','https://www.twitch.tv/'+gtalist[i]+'');                      

                    };

                })(i));              
                        


                $('.owl-carousel').append(img);
               y++
               
            };

            this.sliderLogic(gtalist.length)


        
        
        /** if first load, so show this stream */
        if(firstCall == true){            
            document.getElementById('button').setAttribute('href','https://www.twitch.tv/'+gtalist[0]+'');                      //href("https://www.twitch.tv/"+this.gtalist[0]+"_")
            new Twitch.Embed("twitch-embed-main", {
                width: '80%',
                height: '80%',
                channel: gtalist[0],
                layout: "video",
                parent: ["embed.example.com", "othersite.example.com"]
            }); 
            
            $('#streamer-logo').empty(); 
            $('#streamer').html(gtadata[0].display_name);                                    
            $('#streamer-logo').append('<img src="'+gtadata[0].thumbnail_url+'">');
            $('#stream-title').html(gtadata[0].title);
        };



    };

    gtaSort(data){
        let gtalist=[];
        let streamer = '';
        for (let i = 0 ; i < data['data'].length ; i++){
            if(data['data'][i]['game_id'] == 32982){
                streamer = data['data'][i]['display_name'].toLowerCase();
                gtalist.push(streamer);
            }
        }
        return gtalist;
    }
    
    gtaData(data){
        let gtaData =[];
        
        for (let i = 0; i < data['data'].length ; i++){
            if(data['data'][i]['game_id'] == 32982){
                gtaData.push(data['data'][i])
            }
        }

        return gtaData;
    }

    sliderLogic(num){
        if(num === 1){
            $('.owl-carousel').owlCarousel({    
                center: true,
                items:1,
                loop:false,
                margin:0,

                
                responsive:{
                    0:{
                        items:2,                      
                        dots:false
                    },
                    960:{
                        items:5,                      
                    },
                    1000:{
                        items:5
                        
                    }
                }
            })
        } else if(num < 5){
            $('.owl-carousel').owlCarousel({ 
                items: 5,
                margin:1,

                
                responsive:{
                    0:{
                        items:2,                      
                        dots:false
                    },
                    960:{
                        items:3,                      
                    },
                    1000:{
                        items:5
                        
                    }
                }
            })
        } else {
            $('.owl-carousel').owlCarousel({ 
                loop: true,
                items: 5,
                margin:1,                
                responsive:{
                    0:{
                        items:2,                      
                        dots:false
                    },
                    960:{
                        items:3,                      
                    },
                    1000:{
                        items:5
                        
                    }
                }
            })
        }
    }

    

}