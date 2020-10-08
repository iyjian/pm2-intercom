setTimeout(() => {
  if (process.env.NODE_APP_INSTANCE === '0') {
    console.log(`instance: ${process.env.NODE_APP_INSTANCE} try to broadcast a message at: ${+new Date()}`)
    process.send({
      topic: 'broadcast:message31',
      data: {
        messageTimestamp: +new Date(),
        instance: process.env.NODE_APP_INSTANCE
      }
    })
  }
}, 5000)
  
process.on('message', packet => {
  console.log(`instance: ${process.env.NODE_APP_INSTANCE} delay: ${+new Date() - packet.data.messageTimestamp}`)
})
