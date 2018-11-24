//
//  clean.js
//
//  Clean script
//  Delete the ./dist folder
//
//  Author: Gabriel Oheix
//  License: GPL v3
//

const { readdir, unlink, rmdir } = require('fs')
const { lstat, access, constants } = require('fs')
const { EOL } = require('os')

const RED_COLOR = '\x1b[31m'
const DEFAULT_COLOR = '\x1b[0m'


// Delete the ./dist directory

deleteIfExists('./dist')


///


function deleteIfExists(directory) {
  return p_access_ok(directory)
    .then(getDirectory)
    .then(deleteDirectory)
    .catch(resume)

  function getDirectory() {
    return directory
  }

  function resume() {
    return
  }
}


function deleteDirectory(path) {
  return p_readdir(path)
    .then(deleteChildren)
    .then(getPath)
    .then(p_rmdir)
    .catch(stop)

  function deleteChildren(files) {
    const promises = files.map(addPath).map(deleteFileOrDirectory)
    return Promise.all(promises)
  }

  function addPath(current) {
    return path + '/' + current
  }

  function getPath() {
    return path
  }
}


function deleteFileOrDirectory(fullPath) {
  return p_lstat(fullPath)
    .then(detectAndDelete)

  function detectAndDelete(stats) {
    if (stats.isDirectory())  return deleteDirectory(fullPath)
    if (stats.isFile())  return p_unlink(fullPath)
    return Promise.reject(new Error('Child is neither a file not a directory'))
  }
}


function stop(err) {
  if (err && err.message)  console.log(RED_COLOR, err.message, DEFAULT_COLOR, EOL)
  if (err && !err.message)  console.log(RED_COLOR, 'Failure with no error message', EOL, err, DEFAULT_COLOR, EOL)
  if (!err)  console.log(RED_COLOR, 'Failure with unspecified error', DEFAULT_COLOR, EOL)
  process.exit(1)
}


function trace(command, info) {
  console.log(command, info)
}


///


function p_readdir(path) {
  return new Promise(executor)

  function executor(resolve, reject) {
    readdir(path, function callback(err, files) {
      if (err)  reject(err)
      resolve(files)
    })
  }
}


function p_unlink(path) {
  return new Promise(executor)

  function executor(resolve, reject) {
    trace('unlink ', path)
    unlink(path, function callback(err) {
      if (err)  reject(err)
      resolve()
    })
  }
}


function p_rmdir(path) {
  return new Promise(executor)

  function executor(resolve, reject) {
    trace('rmdir ', path)
    rmdir(path, function callback(err) {
      if (err)  reject(err)
      resolve()
    })
  }
}


function p_lstat(path) {
  return new Promise(executor)

  function executor(resolve, reject) {
    lstat(path, function callback(err, stats) {
      if (err)  reject(err)
      resolve(stats)
    })
  }
}


function p_access_ok(path) {
  return new Promise(executor)

  function executor(resolve, reject) {
    access(path, constants.F_OK, function callback(err) {
      if (err)  reject(err)
      resolve()
    })
  }
}
