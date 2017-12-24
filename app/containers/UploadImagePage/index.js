import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import styles from './style.css';

export default function UploadImagePage() {
  return (
    <div>
        <H1>
        Upload new image
        </H1>

        <form action="/file-upload"
            className="dropzone"
            id="my-awesome-dropzone">
        </form>

        <form>
        <input type="text" name="name" className="question" id="nme" required autocomplete="off" />
        <label for="nme"><span>Add a title</span></label>
        <input type="text" name="name" className="question" id="nme" required autocomplete="off" />
        <label for="nme"><span>Add a description</span></label>

        <div className="select">
            <span className="arr"></span>
            <select>
            <option>All about that bass</option>
            <option>Dear Future Husband</option>
            <option>Close Your Eyes</option>
            </select>
        </div>

        <input type="submit" value="Submit!" />
        </form>
    </div>
  );
}