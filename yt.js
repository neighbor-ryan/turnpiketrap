$(document).ready(function() {
    const video = $('iframe')
    // console.log()
    const width = video.width()
    const height = parseInt(width * 9 / 16)
    video.attr('height', height)
})
