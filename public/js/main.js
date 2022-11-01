// let sourceUrl = 'https://streaming.softwarecreation.it/AlmaTv/AlmaTv/playlist.m3u8'
// const sourceUrl = 'https://go5.gocast2.com:999/hls/laligauk.m3u8?md5=XZ9urwg1Smuy5n9ZUj6vww&expires=1667257800'

const apiUrl = 'http://127.0.0.1:8000/'
var proxy = 'https://cors-anywhere.herokuapp.com/';

async function getChannel(channelID) {
   try {
      const response = await fetch(apiUrl + 'channel/' + String(channelID), {
         method: 'get',
         // mode: 'cors',
         headers: {
            'Content-type': 'application/json',
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Dest': document,
            'Sec-Fetch-Mode': 'navigate',
            DNT: 1,
            // 'Access-Control-Allow-Origin': '*',
            'url_type': 1,
            // 'user_agent': "HDPlayer/3.5.47 (Linux;Android 12) ExoPlayerLib/2.14.1",
            // 'user-agent': "HDPlayer/3.5.47 (Linux;Android 12) ExoPlayerLib/2.14.1",
         }
      })
      const data = await response.json()
      console.log(data.data)
      let sourceUrl = "https://s13.tntendirect.com/m6/live/playlist.m3u8"
      if (Hls.isSupported()) {
         var video = document.getElementById('video');
         var hls = new Hls();
         hls.loadSource(sourceUrl);
         hls.attachMedia(video);
         hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
         });
      }
      // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
      // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
      // This is using the built-in support of the plain video element, without using hls.js.
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
         video.src = sourceUrl;
         video.addEventListener('canplay', function () {
            video.play();
         });
      }
   } catch (err) {
      console.error(err)
   }
}

getChannel(1421)



// content-length: 2028
// content-type: application/json
// date: Mon, 31 Oct 2022 22:31:12 GMT
// server: uvicorn

// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.5
// Connection: keep-alive
// DNT: 1
// Host: 127.0.0.1:8000
// Sec-Fetch-Dest: document
// Sec-Fetch-Mode: navigate
// Sec-Fetch-Site: none
// Sec-Fetch-User: ?1
// Sec-GPC: 1
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0
// GET /channel/1421 HTTP/1.1
// Host: 127.0.0.1:8000
// User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
// Accept-Language: en-US,en;q=0.5
// Accept-Encoding: gzip, deflate, br
// DNT: 1
// Connection: keep-alive
// Upgrade-Insecure-Requests: 1
// Sec-Fetch-Dest: document
// Sec-Fetch-Mode: navigate
// Sec-Fetch-Site: none
// Sec-Fetch-User: ?1
// Sec-GPC: 1