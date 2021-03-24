class Audience {


    constructor(serverRP){
        this.auth = sessionStorage.getItem('untruc');
        this.serverRP = serverRP;
    }

    launch(){
        this.streamData();
        this.audienceRefresh()
    }

    streamData(){  //get streams data for GTA RP specific servers

        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/helix/search/channels?first=30&query='+this.serverRP+'&live_only=true',                 
            dataType:'json',
            headers: {
                    "Client-ID": 'bgbezb2vov7jc4twxauhw3yh30ubbx',
                    "Authorization": "Bearer "+this.auth
                    },

            success: (data) =>{               
                this.streamerGta(data)
                
            },

            error: function(data){
                console.log('error')
                console.log(data)
            }
        })
    }

    streamerGta(data){
        let streamers=[];

        for (let i = 0 ; i < data['data'].length ; i++){
            if(data['data'][i]['game_id'] == 32982){
                if(streamer == 'kaan_altinay'){
                    i++
                }else{
                    streamers.push(data['data'][i]['broadcaster_login']);                
                }                
            }
        }

        this.viewerCount(streamers)
    }

    viewerCount(streamers){
        let viewers = [];
        this.streamerList = streamers;
        let completedCalls = 0;
        for (let i = 0 ; i < this.streamerList.length ; i++){               
        
        $.ajax({
                type: 'GET',
                url: 'https://api.twitch.tv/helix/streams?user_login='+this.streamerList[i]+'',     
                dataType:'JSON',
                headers: {
                        "Client-ID": 'bgbezb2vov7jc4twxauhw3yh30ubbx',
                        "Authorization": "Bearer "+this.auth
                        },                   
                success: (data)=> {
                    console.log(data['data'].length)
                    if(data['data'].length != 0 ){
                        viewers.push([i, this.streamerList[i], data['data'][0]['viewer_count']]);
                    }
                    completedCalls++;
               
                },
                complete: ()=> { 

                  if(completedCalls === streamers.length) {
                      
                      this.audienceTable(viewers)
                       
                  }
               },
                error: function(data){
                    console.log(data)
                }            
            })
        };

    
    }

    audienceTable(viewers){
        $('.table-in').empty()
        for(let i = 0; i < viewers.length; i++){
            for(let y = 0; y < 1; y++){
                $('.table-in').append($('<tr><td>'+viewers[i][y+1]+'</td><td>'+viewers[i][y+2]+'</td><td class="link">Go to the stream</td></tr>'))
            }
        }

        
    }

    audienceRefresh(){
        this.refresh = setInterval(this.streamData.bind(this), 3000)
    }

    clear(){
        clearInterval(this.refresh)
       }


}