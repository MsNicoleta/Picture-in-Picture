const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element,then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata =() =>{
            videoElement.play();
        };
    } catch(error){
        //Catch Error Here
        console.log('whops,error here:',error);
    }
    
}
button.addEventListener('click', async () => {
//desable button
button.disabled =true;
// Start picture in picture
await videoElement.requestPictureInPicture();
//Reser Button
button.disabled =false;
});
//On Load
selectMediaStream();