import extensions from './data/mime_to_extension.json';
const mime2Extension = (mime) => {
    let extension = extensions[mime];
    if(!extension) extension= "unknown"
    return (extension);
}
export default mime2Extension;