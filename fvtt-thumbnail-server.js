import { registerSettings } from './settings.js';

Hooks.once('init', async function () {
    console.log('fvtt-thumbnail-server | Initializing module');

    // Register custom module settings
    registerSettings();

    });

FilePicker.prototype.getData = async function(options) {
	const result = this.result;
	const source = this.source;
	let target = decodeURIComponent(source.target);
	const isS3 = this.activeSource === "s3";
	// Sort directories alphabetically and store their paths
	let dirs = result.dirs.map(d => { return {
	  name: decodeURIComponent(d.split("/").pop()),
	  path: d,
	  private: result.private || result.privateDirs.includes(d)
	}});
	dirs = dirs.sort((a, b) => a.name.localeCompare(b.name));
	// Sort files alphabetically and store their client URLs
	let files = result.files.map(f => {
	  let img = f;
	  if ( VideoHelper.hasVideoExtension(f) ) img = "icons/svg/video.svg";
	  else if ( AudioHelper.hasAudioExtension(f) ) img = "icons/svg/sound.svg";
	  return {
	    name: decodeURIComponent(f.split("/").pop()),
	    url: f,
	    img: game.settings.get("fvtt-thumbnail-server", "thumbnailServer") + img
	  }
	});
	files = files.sort((a, b) => a.name.localeCompare(b.name));
	// Return rendering data
	return {
	  bucket: isS3 ? source.bucket : null,
	  canGoBack: this.activeSource !== "",
	  canUpload: this.canUpload,
	  canSelect: !this.options.tileSize,
	  cssClass: [this.displayMode, result.private ? "private": "public"].join(" "),
	  dirs: dirs,
	  displayMode: this.displayMode,
	  extensions: this.extensions,
	  files: files,
	  isS3: isS3,
	  noResults: dirs.length + files.length === 0,
	  request: this.request,
	  source: source,
	  sources: this.sources,
	  target: target,
	  tileSize: this.options.tileSize ? (FilePicker.LAST_TILE_SIZE || canvas.dimensions.size) : null,
	  user: game.user
	}
}
