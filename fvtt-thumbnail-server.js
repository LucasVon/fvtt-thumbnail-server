Hooks.on("init", () => {
  const oldFilePickerOptions = FilePicker.defaultOptions;
  Object.defineProperty(FilePicker, "defaultOptions", {
    get: () => {
      return mergeObject(oldFilePickerOptions, {
        template: "modules/fvtt-thumbnail-server/filepicker.html",
        classes: ["filepicker"],
        width: 500,
        tabs: [{navSelector: ".tabs"}],
        resizable: true
      });
    }
  });
  console.log(FilePicker.defaultOptions.template);
});
