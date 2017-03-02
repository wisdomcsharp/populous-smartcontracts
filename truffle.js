module.exports = {
    networks: {
        "ropsten": {
            network_id: 3,
            host: "localhost",
            port: 8545,
            before_timeout: 200000, //  <=== NEW
            test_timeout: 300000, //  <=== NEW
            gas: 4712388
        },
        "testrpc": {
            network_id: "*",
            host: "localhost",
            port: 8545,
            before_timeout: 200000, //  <=== NEW
            test_timeout: 300000, //  <=== NEW
            gas: 4712388
        },
        "private": {
            network_id: 666,
            host: "localhost",
            port: 8545,
            before_timeout: 200000, //  <=== NEW
            test_timeout: 300000, //  <=== NEW
            gas: 4712388
        },
    }
};