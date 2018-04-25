/*
config.js - Configuration for Litecoin
*/

module.exports = {
  mainnet: {
    messagePrefix: 'Litecoin mainnet',
    bip32: {
      public: '0488b21e',
      private: '0488ade4'
    },
    pubKeyHash: '30',
    scriptHash: '05', //or 32
    zcPaymentAddressHash: '169a', //not in ltc
    zcSpendingKeyHash: 'ab36', //not in ltc
    wif: 'b0'
  },
  testnet: {
    messagePrefix: 'Litecoin testnet',
    bip32: {
      public: '043587cf',
      private: '04358394'
    },
    pubKeyHash: '6f',
    scriptHash: 'c4', //or 3a
    zcPaymentAddressHash: '16b6', //not in ltc
    zcSpendingKeyHash: 'ac08', //not in ltc
    wif: 'ef'
  }
};