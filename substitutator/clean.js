//
//  clean.js
//
//  Clean script
//  Delete the ./dist folder
//
//  Author: Gabriel Oheix
//  License: GPL v3
//

const { readdir, lstat, unlink, rmdir } = require('fs')
const { EOL } = require('os')

const RED_COLOR = '\x1b[31m'
const DEFAULT_COLOR = '\x1b[0m'


// Delete the ./dist directory

deleteDirectory('./dist')


///


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
    return Promise.reject('Child is neither a file not a directory')
  }
}


function stop(err) {
  if (!err || !err.message) throw err
  console.log(RED_COLOR, err.message, DEFAULT_COLOR, EOL)
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


function p_lstat(path) {
  return new Promise(executor)

  function executor(resolve, reject) {
    lstat(path, function callback(err, stats) {
      if (err)  reject(err)
      resolve(stats)
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
