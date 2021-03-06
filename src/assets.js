class AssetMan {
  constructor() {
    this.images = {};
    this.audios = {};
  }
  addImage(name, src) {
    const image = new Image();
    image.src = src;
    this.images[name] = image;
  }
  addAudio(name, src) {
    this.audios[name] = new Audio(src);
  }
}

export {AssetMan};
