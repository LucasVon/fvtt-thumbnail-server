Hooks.on('renderFilePicker', (app, html, data) => {
  console.log(data);
  data.files.forEach(function(image) {
    image.img = "https://play.erewar.com/" + image.img;
  });
  console.log(data);
});
