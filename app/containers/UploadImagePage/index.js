import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import Select from 'components/Select';
import Input from 'components/Input';

import { styles } from './styles.css';

const style = {
    margin: 15,
  };

export class UploadImagePage extends React.PureComponent {

    constructor(props){
        super(props);
        this.state={
          albums: [],
          filesPreview: [],
          filesToBeSent: [],
          printcount: 1,
          imageAlbumId: '',
          imageTitle: '',
          imageDescription: ''
        }
      }
    
    componentDidMount() {
        let getAlbumsAPI = {
          link: 'https://api.imgur.com/3/account/jorje12/albums/',
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Client-ID 9a8bbc05084cd11'
          }
        }
    
        fetch(getAlbumsAPI.link, {
          method: getAlbumsAPI.method,
          headers: getAlbumsAPI.headers
        })
        .then(results => {
          return results.json();
        })
        .then(data => {
          console.log(data);
          let albumsContainer = data.data.map((album, index) => {
            return (
              {id:album.id, title:album.title}
            );
          })
          this.setState({albums: albumsContainer});
          console.log("albums", this.state.albums);
        })
    }

    onDrop(acceptedFiles, rejectedFiles) {
        var filesToBeSent=this.state.filesToBeSent;
        if(filesToBeSent.length < this.state.printcount){
          filesToBeSent.push(acceptedFiles);
          var filesPreview=[];
          for(var i in filesToBeSent){
            filesPreview.push(<div>
              {filesToBeSent[i][0].name}
              <MuiThemeProvider>
              <a href="#"><FontIcon
                className="material-icons customstyle"
                color={blue500}
                styles={{ top:10,}}
              >clear</FontIcon></a>
              </MuiThemeProvider>
              </div>
            )
          }
          this.setState({filesToBeSent,filesPreview});
        }
        else{
          alert("You have reached the limit of printing files at a time")
        }
     }

     onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }

     handleClick(event){
        console.log("handleClick",event);  
        let formData = {};

        var self = this;
        if(this.state.filesToBeSent.length > 0){
          var filesArray = this.state.filesToBeSent;
          // var req = request.post(apiBaseUrl+'fileupload');
          formData = {image:filesArray[0][0], album:this.state.imageAlbumId, title:this.state.imageTitle, description:this.state.imageDescription};
          console.log(formData);

          // for(var i in filesArray){
          //     // console.log("files",filesArray[i][0]);
          //     req.attach(filesArray[i][0].name,filesArray[i][0])
          // }
        }
        else{
          alert("Please upload some files first");
        }

        // let postUploadAPI = {
        //   link: 'https://api.imgur.com/3/image',
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        //     'Authorization': 'Client-ID 9a8bbc05084cd11'
        //   },
        //   body: formData
        // }   
      }

render() {

  return (
    <div className="upload-container">
          <center>
            <form>  
              <div style={style}>
                <Dropzone onDrop={(files) => this.onDrop(files)}>
                  <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
              </div>
            <div>
            Files to be printed are:
            {this.state.filesPreview}
            </div>
            <div>
            {this.state.printingmessage}
            </div>

            <Select albums={this.state.albums} name="album" value={this.state.imageAlbumId} onChange={this.onChange}></Select>
            <Input title = 'Add a title' style={{width:"40%"}} name="title" value={this.state.imageTitle} onChange={this.onChange}></Input>
            <Input title = 'Add a description' name="description" value={this.state.imageDescription} onChange={this.onChange}></Input>

            <MuiThemeProvider>
                <RaisedButton label="Upload Files" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            </MuiThemeProvider>
            </form>

          </center>
        
    </div>
    );
  }
}

export default (UploadImagePage);