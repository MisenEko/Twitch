class showStreams extends twitchAjax{

    constructor(searchServer, url, logoImg, idServer){
        super()
        this.thumbmail = [];  
        this.serverRP = searchServer;
        this.url = url;
        this.logoImg = logoImg;
        this.idServer = idServer;
        this.isRunning = false;
        this.gtalist=[]
        this.img = '';
        this.token = '';
        this.streamer = '';
        this.blank = '';
       

    }

    /**
     *  function to launch the app
     */
    launch(){

        let launchFunction = 1
        $("#carousel, #twitch-embed-main , #streamer-logo , #streamer, #stream-title").empty();
        $('#block-1 img').remove()
        
        this.streamData(launchFunction)        
                           
               
        this.active()
        this.clear()
        this.startRefreshThumbNail()
        this.startRefreshCount() 
        
        
    }

    active(){            
        $('a').removeClass('active')    
        $('#'+this.idServer).addClass('active')
    }


/**
 * function to check if a stream is live or not
 * 
 * @param {data from ajax call} data 
 * @param {*} idServer 
 */

    showStream(data, idServer){          //function to play stream on player and add thumbnail on the webpage
                
        this.streamList = data;
        this.idServer = idServer.charAt(0).toUpperCase() + idServer.slice(1);
        this.slideIndex = 1;
        let firstCall = true;
        this.serverList.forEach(this.updateCountStream.bind(this))
        
            if(this.streamList['data'].length === 0){

                $('#streamers-info').hide()
                $('#carousel').hide()
                this.blank = '<div class="alert alert-danger" id="blank"> Aucun streamer ne diffuse en ce moment de scène lié au serveur : '+ this.idServer + ' </div>'                
                $("#twitch-embed-main").append(this.blank)

            }else{
                this.gtalist = [];
                this.displayStream(firstCall, this.streamList, this.gtalist)
            }
    }

    /**
     * function to get all GTA stream with the server name and show it
     * 
     * @param {check if it's  afirst call or not} firstCall 
     * @param {data from ajax call} data 
     */
    displayStream(firstCall, data){
        this.gtalist=[];
        this.streamlist = data ;      
        
        let y = 1;
        if(firstCall == false){};
        $('#streamers-info').show();
        $('#carousel').show();

        for (let i = 0 ; i < this.streamList['data'].length ; i++){             
            
            if(this.streamList['data'][i]['game_id'] == 32982){ 
                
                this.gtalist.push(this.streamList['data'][i]['display_name'])                        
                this.img =$('<figure class="slide"><img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_'+this.gtalist[i]+'-256x144.jpg" alt="image gta rp serveur '+this.idServer+'"><figcaption>'+y+'.     '+this.streamList['data'][i]['display_name']+'</figcaption></figure>')
                .on("click", (index => {                                
                    return e => { 
                        $("#twitch-embed-main").empty();                                                                    
                        new Twitch.Embed("twitch-embed-main", {
                            width: '80%',
                            height: '80%',
                            channel: this.gtalist[index],                                    
                            layout: "video",                                        
                            parent: ["embed.example.com", "othersite.example.com"]                                    
                        });

                        $('#streamer-logo').empty()  
                        $('#streamer').html(this.streamList['data'][i]['display_name'])                                    
                        $('#streamer-logo').append('<img src="'+this.streamList['data'][i]['thumbnail_url']+'">')
                        $('#stream-title').html(this.streamList['data'][i]['title'])
                        document.getElementById('button').setAttribute('href','https://www.twitch.tv/'+this.gtalist[i]+'')                         

                    };

                })(i));

                
                        
                $('#carousel').append(this.img)
               y++
               
            };
        };
        
        /** if first load, so show this stream */
        if(firstCall == true){            
            document.getElementById('button').setAttribute('href','https://www.twitch.tv/'+this.gtalist[0]+'')                      //href("https://www.twitch.tv/"+this.gtalist[0]+"_")
            new Twitch.Embed("twitch-embed-main", {
                width: '80%',
                height: '80%',
                channel: this.gtalist[0],
                layout: "video",
                parent: ["embed.example.com", "othersite.example.com"]
            }); 
            
            $('#streamer-logo').empty(); 
            $('#streamer').html(this.streamList['data'][0]['display_name']);                                    
            $('#streamer-logo').append('<img src="'+this.streamList['data'][0]['thumbnail_url']+'">');
            $('#stream-title').html(this.streamList['data'][0]['title']);
        };



    };
    

    

}