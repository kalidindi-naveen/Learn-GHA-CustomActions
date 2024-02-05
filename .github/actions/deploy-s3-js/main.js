const core=require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
function run(){
  core.notice('Running From Custom JS Action');
  core.notice('Say-Hi From NK');
}
run();