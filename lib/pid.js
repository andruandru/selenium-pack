
var fs = require('fs');


//TODO: Find windows equivalent
var PID_FILE_PATH = "/tmp/selenium.pid";

module.exports = {

  getRunning: function() {

    var pid = null;

    try {
      pid = fs.readFileSync(PID_FILE_PATH, { encoding: String() }).toString();
    } catch(e) {
      pid = null;
    }

    return pid;
  },
  save: function(pid) {
    fs.writeFileSync(PID_FILE_PATH, pid);
  },
  delete: function() {
    fs.unlinkSync(PID_FILE_PATH);
  },
  getPidFilePath: function() {
    return PID_FILE_PATH;
  }

}