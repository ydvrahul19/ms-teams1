# Video Meeting

Video Meeting is a video conference website that lets you stay in touch with all your friends.

Developed with ReactJS, Node.js, SocketIO, WebRTC.


![IMG_20210713_164638](https://user-images.githubusercontent.com/85828386/125443717-20630cca-e2b7-4015-a95c-4d25d2a05864.jpg)

### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

### `Getting Started`
Run npm 
cd src
node app.js

### `Features`

* Is 100% free and open-source
* No account needed
* Toggling of video stream
* Toggling of audio stream (mute & unmute)
* Unlimited users
* Messaging chat and video streaming in real-time
* Screen sharing to present documents, slides, and more
* Everyting is peer-to-peer thanks to webrtc

### `Note`
### `Sample Scenario:`
* You have a meeting at 9 A.M, you may run the script anytime before 9 A.M. and the script will automatically join the meeting when the join button is available.
* The script will then automatically join the next meeting scheduled at e.g.:- 10 A.M. AFTER the organiser ends the meeting.
* If the organiser does not end the meeting i.e the organiser leaves the meeting instead of ending the meeting, the script will leave the meeting after the strength of the meeting falls down to 10 or any minimum value set by the user.
