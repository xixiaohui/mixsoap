<template>

  <div class="item">
    <div class="player">
      <video-player class="vjs-custom-skin"
                    :options="playerOptions"
                    :playsinline="true"
                    @ready="playerReadied($event)"></video-player>
    </div>
  </div>

</template>

<script>
import videojs from 'video.js'

export default {
  name: "AudioTrack",

  props:{
    url:String,
  },

  data(){
    return {
      playerOptions: {
        height: '300',
        playbackRates: [0.7, 1, 1.3, 1.5, 1.7],
        sources: [{
          type: "video/mp4",
          src: this.url
        }],
        poster: "https://i.pinimg.com/600x315/9e/df/af/9edfaf9d82b6d107b25cbe6824926572.jpg",
      }
    }
  },

  methods:{
      playerReadied(player) {
        const track = new videojs.AudioTrack({
          id: 'my-spanish-audio-track',
          kind: 'translation',
          label: 'Spanish',
          language: 'es'
        })
        player.audioTracks().addTrack(track)
        // Get the current player's AudioTrackList object.
        const audioTrackList = player.audioTracks()
        // Listen to the "change" event.
        audioTrackList.addEventListener('change', function() {
          // Log the currently enabled AudioTrack label.
          for (let i = 0; i < audioTrackList.length; i++) {
            const track = audioTrackList[i]
            if (track.enabled) {
              videojs.log(track.label)
              return
            }
          }
        })
      }
  }

}
</script>

<style lang="scss" scoped>
  .item{
    margin: 30px 20px 30px 20px;

  }

  .player{

  }
</style>