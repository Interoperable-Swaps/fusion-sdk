import {Address} from '@1inch/limit-order-sdk'
import {NetworkEnum} from '../constants.js'

export const CHAIN_TO_WRAPPER = {
    [NetworkEnum.ETHEREUM]: new Address(
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    ),
    [NetworkEnum.BINANCE]: new Address(
        '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    ),
    [NetworkEnum.ARBITRUM]: new Address(
        '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
    ),
    [NetworkEnum.SEPOLIA]: new Address(
        '0xf531B8F309Be94191af87605CfBf600D71C2cFe0'
    ),
    [NetworkEnum.ETHERLINK_TESTNET]: new Address(
        '0xB1Ea698633d57705e93b0E40c1077d46CD6A51d8'
    ),
    [NetworkEnum.TEZOS]: new Address(
        '0xB1Ea698633d57705e93b0E40c1077d46CD6A51d8'
    )
}
