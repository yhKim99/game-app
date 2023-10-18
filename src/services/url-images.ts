
const getCroppedImage = (url: string) => {
    const index = url.indexOf('media/');
    const newUrl = url.slice(0, index + 6) + "crop/600/400/" + url.slice(index + 6, url.length);
    console.log(newUrl);
    return newUrl;
}
export default getCroppedImage;