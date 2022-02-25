import {Client} from "@lumeweb/bcurl"

export class NodeClient extends Client {
    constructor(...args: any[]);

    addFilter(...args: any[]): void;

    auth(...args: any[]): void;

    broadcast(...args: any[]): void;

    broadcastClaim(...args: any[]): void;

    estimateFee(...args: any[]): void;

    execute(...args: any[]): Promise<object>;

    getBlock(...args: any[]): void;

    getBlockHeader(...args: any[]): void;

    getCoin(...args: any[]): void;

    getCoinsByAddress(...args: any[]): void;

    getCoinsByAddresses(...args: any[]): void;

    getEntry(...args: any[]): void;

    getHashes(...args: any[]): void;

    getInfo(...args: any[]): void;

    getMempool(...args: any[]): void;

    getNameStatus(...args: any[]): void;

    getTX(...args: any[]): void;

    getTXByAddress(...args: any[]): void;

    getTXByAddresses(...args: any[]): void;

    getTip(...args: any[]): void;

    rescan(...args: any[]): void;

    reset(...args: any[]): void;

    resetFilter(...args: any[]): void;

    send(...args: any[]): void;

    sendClaim(...args: any[]): void;

    setFilter(...args: any[]): void;

    watchChain(...args: any[]): void;

    watchMempool(...args: any[]): void;

    static captureRejectionSymbol: any;

    static captureRejections: boolean;

    static defaultMaxListeners: number;

    static errorMonitor: any;

    static getEventListeners(emitterOrTarget: any, type: any): any;

    static init(opts: any): void;

    static kMaxEventTargetListeners: any;

    static kMaxEventTargetListenersWarned: any;

    static listenerCount(emitter: any, type: any): any;

    static on(emitter: any, event: any, options: any): any;

    static once(emitter: any, name: any, options: any): any;

    static setMaxListeners(n: any, eventTargets: any): void;

    static usingDomains: boolean;

}

export class WalletClient {
    constructor(...args: any[]);

    abandon(...args: any[]): void;

    addSharedKey(...args: any[]): void;

    all(...args: any[]): void;

    auth(...args: any[]): void;

    backup(...args: any[]): void;

    close(...args: any[]): void;

    createAccount(...args: any[]): void;

    createAddress(...args: any[]): void;

    createBid(...args: any[]): void;

    createCancel(...args: any[]): void;

    createChange(...args: any[]): void;

    createFinalize(...args: any[]): void;

    createOpen(...args: any[]): void;

    createRedeem(...args: any[]): void;

    createRenewal(...args: any[]): void;

    createReveal(...args: any[]): void;

    createRevoke(...args: any[]): void;

    createTX(...args: any[]): void;

    createTransfer(...args: any[]): void;

    createUpdate(...args: any[]): void;

    createWallet(...args: any[]): void;

    dispatch(...args: any[]): void;

    execute(...args: any[]): Promise<object>;

    getAccount(...args: any[]): void;

    getAccounts(...args: any[]): void;

    getAuctionByName(...args: any[]): void;

    getAuctions(...args: any[]): void;

    getBalance(...args: any[]): void;

    getBids(...args: any[]): void;

    getBidsByName(...args: any[]): void;

    getBlock(...args: any[]): void;

    getBlocks(...args: any[]): void;

    getCoin(...args: any[]): void;

    getCoins(...args: any[]): void;

    getHistory(...args: any[]): void;

    getInfo(...args: any[]): void;

    getKey(...args: any[]): void;

    getLast(...args: any[]): void;

    getLocked(...args: any[]): void;

    getMaster(...args: any[]): void;

    getName(...args: any[]): void;

    getNames(...args: any[]): void;

    getNonce(...args: any[]): void;

    getPending(...args: any[]): void;

    getRange(...args: any[]): void;

    getResource(...args: any[]): void;

    getReveals(...args: any[]): void;

    getRevealsByName(...args: any[]): void;

    getTX(...args: any[]): void;

    getWIF(...args: any[]): void;

    getWallets(...args: any[]): void;

    importAddress(...args: any[]): void;

    importPrivate(...args: any[]): void;

    importPublic(...args: any[]): void;

    init(...args: any[]): void;

    join(...args: any[]): void;

    leave(...args: any[]): void;

    lock(...args: any[]): void;

    lockCoin(...args: any[]): void;

    none(...args: any[]): void;

    open(...args: any[]): void;

    removeSharedKey(...args: any[]): void;

    rescan(...args: any[]): void;

    resend(...args: any[]): void;

    resendWallet(...args: any[]): void;

    retoken(...args: any[]): void;

    send(...args: any[]): void;

    setPassphrase(...args: any[]): void;

    sign(...args: any[]): void;

    unlock(...args: any[]): void;

    unlockCoin(...args: any[]): void;

    wallet(...args: any[]): void;

    zap(...args: any[]): void;

    static captureRejectionSymbol: any;

    static captureRejections: boolean;

    static defaultMaxListeners: number;

    static errorMonitor: any;

    static getEventListeners(emitterOrTarget: any, type: any): any;

    static init(opts: any): void;

    static kMaxEventTargetListeners: any;

    static kMaxEventTargetListenersWarned: any;

    static listenerCount(emitter: any, type: any): any;

    static on(emitter: any, event: any, options: any): any;

    static once(emitter: any, name: any, options: any): any;

    static setMaxListeners(n: any, eventTargets: any): void;

    static usingDomains: boolean;

}

export namespace NodeClient {
    class EventEmitter {
        constructor(opts: any);

        addListener(type: any, listener: any): any;

        emit(type: any, args: any): any;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(type: any): any;

        listeners(type: any): any;

        off(type: any, listener: any): any;

        on(type: any, listener: any): any;

        once(type: any, listener: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any, ...args: any[]): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;

        static EventEmitter: any;

        static captureRejectionSymbol: any;

        static captureRejections: boolean;

        static defaultMaxListeners: number;

        static errorMonitor: any;

        static getEventListeners(emitterOrTarget: any, type: any): any;

        static init(opts: any): void;

        static kMaxEventTargetListeners: any;

        static kMaxEventTargetListenersWarned: any;

        static listenerCount(emitter: any, type: any): any;

        static on(emitter: any, event: any, options: any): any;

        static once(emitter: any, name: any, options: any): any;

        static setMaxListeners(n: any, eventTargets: any): void;

        static usingDomains: boolean;

    }

}

export namespace WalletClient {
    class EventEmitter {
        constructor(opts: any);

        addListener(type: any, listener: any): any;

        emit(type: any, args: any): any;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(type: any): any;

        listeners(type: any): any;

        off(type: any, listener: any): any;

        on(type: any, listener: any): any;

        once(type: any, listener: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        rawListeners(type: any): any;

        removeAllListeners(type: any, ...args: any[]): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;

        static EventEmitter: any;

        static captureRejectionSymbol: any;

        static captureRejections: boolean;

        static defaultMaxListeners: number;

        static errorMonitor: any;

        static getEventListeners(emitterOrTarget: any, type: any): any;

        static init(opts: any): void;

        static kMaxEventTargetListeners: any;

        static kMaxEventTargetListenersWarned: any;

        static listenerCount(emitter: any, type: any): any;

        static on(emitter: any, event: any, options: any): any;

        static once(emitter: any, name: any, options: any): any;

        static setMaxListeners(n: any, eventTargets: any): void;

        static usingDomains: boolean;

    }

}
