import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import Select from 'components/Select';
import Input from 'components/Input';

const style = {
    margin: 15,
  };

export class UploadImagePage extends React.PureComponent {

    constructor(props){
        super(props);
        this.state={
          filesPreview:[],
          filesToBeSent:[],
          printcount:10,
        }
      }
    

    onDrop(acceptedFiles, rejectedFiles) {
        // console.log('Accepted files: ', acceptedFiles[0].name);
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

     handleClick(event){
        // console.log("handleClick",event);
        // var self = this;
        // if(this.state.filesToBeSent.length>0){
        //   var filesArray = this.state.filesToBeSent;
        //   var req = request.post(apiBaseUrl+'fileupload');
        //   for(var i in filesArray){
        //       // console.log("files",filesArray[i][0]);
        //       req.attach(filesArray[i][0].name,filesArray[i][0])
        //   }
        //   req.end(function(err,res){
        //     if(err){
        //       console.log("error ocurred");
        //     }
        //     console.log("res",res);
        //     alert("File printing completed")
        //   });
        // }
        // else{
        //   alert("Please upload some files first");
        // }
      }

render() {

  return (
    <div>

          <center>
            <form>  
            <div>
                You can upload up to {this.state.printcount} files at a time.
            </div>

            <Dropzone onDrop={(files) => this.onDrop(files)}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <div>
            Files to be printed are:
            {this.state.filesPreview}
            </div>
            <div>
            {this.state.printingmessage}
            </div>

            <Select albums={[{id:"1", title:"Album 1"}, {id:"2", title:"Album 2"}]}></Select>
            <Input title = 'Add a title' style={{width:"40%"}}></Input>
            <Input title = 'Add a description'></Input>

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