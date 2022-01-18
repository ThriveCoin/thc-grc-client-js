'use strict'

const { GrcHttpClient } = require('..')

const main = async () => {
  const client = new GrcHttpClient({
    grape: 'http://127.0.0.1:30001'
  })
  client.start()

  const pingRes = await client.request('rest:sample:wrk', 'ping', ['john', 'hello'])
  console.log('ping result', pingRes)

  const timeRes = await client.request('rest:sample:wrk', 'getTime', [])
  console.log('time result', timeRes)

  const timeResAll = await client.requestAll('rest:sample:wrk', 'getTime', [])
  console.log('time result on all', timeResAll)
}

main().catch(console.error)
