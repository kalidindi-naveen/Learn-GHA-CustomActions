const core=require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
function run(){
  core.notice('Running From Custom JS Action');
  core.notice('Say-Hi From NK');

  const bucket = core.getInput('bucket',{ required: true});
  const bucketRegion = core.getInput('bucket-region',{ required: true });
  const distFolder = core.getInput('dist-folder',{ required: true });

  const s3url=`s3://${bucket}`
  exec.exec(`aws s3 sync ${distFolder} ${s3url} --region ${bucketRegion}`)
}
run();