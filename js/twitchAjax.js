class twitchAjax{      

        constructor(){
            this.serverList = ['altica', 'faily', 'gtalife','21jumpclick', 'FRaternity', 'flashback'];
            this.auth = sessionStorage.getItem('untruc') 
                       
        }

        streamData(functionId){  //get streams data for GTA RP specific servers
            functionId = functionId
            $.ajax({
                type: 'GET',
                url: 'https://api.twitch.tv/helix/search/channels?first=30&query='+this.serverRP+'&live_only=true',                 
                dataType:'json',
                headers: {
                        "Client-ID": 'bgbezb2vov7jc4twxauhw3yh30ubbx',
                        "Authorization": "Bearer "+this.auth
                        },

                success: (streamList) =>{
                    this.streamList = streamList
                    if(functionId === 1){ 

                        this.showStream(this.streamList, this.idServer);
                     
                    } else if (functionId === 2){

                        this.succesThumbnail(this.streamList)
                    
                    }

                },

                error: function(data){
                    console.log('error')
                    console.log(data)
                }
            })
        } 
        
        viewerCount(streamer){  //get streams data for GTA RP specific servers
            let viewers = [];

            streamer.forEach((element, index) => {                
            
                $.ajax({
                    type: 'GET',
                    url: 'https://api.twitch.tv/helix/streams?user_login='+element+'',        
                    dataType:'json',
                    headers: {
                            "Client-ID": 'bgbezb2vov7jc4twxauhw3yh30ubbx',
                            "Authorization": "Bearer "+this.auth
                            },

                    success: (data) =>{
                        console.log(data)
                        viewers.push([element, data['data'][0]['viewer_count']])
                        if(index === streamer.length-1){
                            this.audience(viewers)
                        }
                    },

                    error: function(data){
                        console.log(data)
                    }            
                })

            });
     
        } 

        /**
         * Update stream's thumbnail every 1 minutes
         */

        startRefreshThumbNail (){
            this.thumbnailRefresh = setInterval( this.updateThumbNailStream.bind(this) ,300000)  
        }

        /**
         * clear interval to stop refreshing thumbnails
         */

        clear(){ 
            clearInterval(this.thumbnailRefresh)
        }

        /**
         * get 
         */

        updateThumbNailStream(){
            let functionId=2

            $('#carousel').empty()
            $('#slider').empty()
            this.streamData(functionId)
        }

        succesThumbnail(data){
            this.streamlist = data
            let y = 1            
            let listLength = this.streamlist['data'].length 
            let firstCall = false; 
                         
            
                if(listLength === 0){
                   
                    $('#streamers-info').hide()
                    $('#carousel').hide()                    
                    $("#twitch-embed-main").empty()
                    $("#twitch-embed-main").append(this.blank)

                }else{                                           
                        this.displayStream(firstCall, this.streamlist)
                    }
            
            
        }
        


        /**
         * Update Count Stream to see how much live stream on each server
         */

        startRefreshCount (){
            setInterval( ()=>{
                this.serverList.forEach(this.updateCountStream.bind(this));
            },30000) 
        }

        updateCountStream(element, index){

            $.ajax({
                type: 'GET',
                url: 'https://api.twitch.tv/helix/search/channels?first=30&query='+element+'&live_only=true', /** gta V id = 32982 */
                dataType:'json',
                headers: {
                        "Client-ID": 'bgbezb2vov7jc4twxauhw3yh30ubbx',
                        "Authorization": "Bearer "+this.auth
                        },

                success: this.succesResolve.bind(element, index),

                error: this.handleError
            })
        }

        

        

        succesResolve(index , streamList) {
            let onlineNumber = 0;

                 for (let i = 0 ; i < streamList['data'].length ; i++){
                    if(streamList['data'][i]['game_id'] == 32982) {
                        onlineNumber++
                    }
                }
                    
                    $("#"+index).text(onlineNumber)
                     onlineNumber = 0
        }

        handleError(data){  
            
                        console.log('error')
                    
        } 


}