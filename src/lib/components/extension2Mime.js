import mimes from './data/extension_to_mime.json';
const extension2Mime = (mime) => {
    let extension = mimes[mime];
    if(!extension) extension= "Unknown"
    return (extension);
}
 
export default extension2Mime;