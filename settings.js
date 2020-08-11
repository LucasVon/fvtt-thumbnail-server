export const registerSettings = function() {
    game.settings.register("fvtt-thumbnail-server", "thumbnailServer", {
        name: "Thumbnail Server",
        hint: "Enter the URL of the thumbnail reverse proxy server. The expected usage with this module is to set up nginx to generate and serve thumbnails simply using a reverse proxy server. Example: https://i.example.com/",
        scope: "world",
        config: true,
        default: "",
        type: String
      });
}
