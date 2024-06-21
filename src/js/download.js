import fetch from 'cross-fetch';
// download video from blob https.
var videoUrl = 'blob:https://xxx.youtube.com/'
fetch(videoUrl)
  .then(response => response.blob())
  .then(blob => {
    // Use the data from the "blob" URL here
    console.log(blob);
  })
  .catch(error => {
    console.error('Error fetching blob:', error);
  });
