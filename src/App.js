import {extension2Mime,mime2Extension,GetIcon} from './lib';
function App() {
  return (
    <center>
    <h1>Extension to Mime</h1>
    {
      extension2Mime('mp3')
    }<br/>
    <h1>Mime to Extension</h1>
    {
      mime2Extension('video/mp4')
    }
    <h1>Extension to Icon</h1>

    <GetIcon extension="mp4" style={{width:30}}/>
    <h1>Mime Type to Icon</h1>

    <GetIcon mime_type="application/pdf" style={{width:30}}/>
    </center>
  );
}

export default App;
