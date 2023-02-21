const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const {v4:uuid} = require('uuid')
const {format} = require('date-fns')

const eventLog = async (msg) =>{
    console.log(`${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`)
}