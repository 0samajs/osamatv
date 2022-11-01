module.exports = {

   getChannel: async (channelID) => {
      try {
         const response = await fetch(process.env.API_URL + 'channels/' + channelID, {
            method: 'get',
            headers: { 'Content-type': 'application/json', },
         })
         const data = await response.json()
         return data
      } catch (err) {
         console.error(err)
      }
   }
}