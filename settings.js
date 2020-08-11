export const registerSettings = function() {
    game.settings.register("fvtt-thumbnail-server", "thumbnailServer", {
        name: "Thumbnail Server",
        hint: "Enter the URL of the thumbnail server. Foundry will expect the thumbnail to be located in the exact same path as the actual image. Example: https://i.example.com/",
        scope: "world",
        config: true,
        type: String,
        default: false
      });
}
