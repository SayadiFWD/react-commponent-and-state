React.js
React is a user interface component libreary.
react interact with DOM using virtual DOM.
In a process called "reconcilition react detects that the state of the app has changed,then it will update the vurtual DOM,taking note of which nodes have changed due to the state change.
Finally,once it knows which node have changed it will only change those specific nodes on the actual DOM.