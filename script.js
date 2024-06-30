
let myGalleryContainer = document.querySelector('.myGalleryContainer');


myGalleryContainer.querySelectorAll('.myVideo').forEach(myVideo => {
    myVideo.addEventListener('click', function() {
        
        if (this.paused) {
           
            myGalleryContainer.querySelectorAll('.myVideo').forEach(v => v.pause());
            
            this.play();
        } else {
         
            this.pause();
        }
    });
});
