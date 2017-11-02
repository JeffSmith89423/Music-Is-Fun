function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  albums = []

  function Albums(albumArt, artist, collection, preview, price, title) {
    this.albumArt = albumArt,
      this.artist = artist,
      this.collection = collection,
      this.preview = preview,
      this.price = price,
      this.title = title
  }



  function draw(songList) {
    var template = ''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i]
      song.albumArt = song.albumArt.replace('60x60bb', '250x250bb')
       template += `
       <div class="row">
       <div class="col-sm-4">
       </div>
       <div class="col-sm-4 outline">
           <img class="center" src="${song.albumArt}">
           <h4>${song.artist}</h4>
           <h6>${song.title}</h6>
           <h6>${song.collection}</h6>
           <h6>$ ${song.price}</h6>
           <audio controls class="preview-bar">
               <source src="${song.preview}" type=""> Your browser does not support the audio tag.
           </audio>
       </div>
       <div class="col-sm-3">

       </div>
   </div>
         `

    }
    document.getElementById('song-list').innerHTML = template
  }
} 