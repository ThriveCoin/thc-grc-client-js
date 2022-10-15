'use strict'

const GrcClientBase = require('./grc.client.base')
const { PeerRPCClient } = require('grenache-nodejs-ws')

class GrcWsClient extends GrcClientBase {
  /**
   * @param {Object} opts
   * @param {number} [opts.timeout] - Grc call timeout
   * @param {string} opts.grape - Grape URL
   */
  constructor ({ grape, timeout = 15000 }) {
    super({ grape, timeout })

    this._peerClient = new PeerRPCClient(this._link, { timeout })
  }
}

module.exports = GrcWsClient
