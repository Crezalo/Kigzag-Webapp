const NodeMediaServer = require('node-media-server');
const live_router = require("./routes/creator/livestream_routes");
const livestream_sk_vk = require("./nodeCache");

live_router.loadStreamKeyViewKeyToCache(livestream_sk_vk).then(resp => {
    console.log("Livestream Streamkey => ViewKey Cache Loaded!!!");
}).catch(err => console.log(err));

const config = {
    logType: 1,
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30,
    },
    http: {
        port: 8000,
        allow_origin: '*',
    },
};

const nms = new NodeMediaServer(config);

const getStreamKeyFromStreamPath = (path) => {
    let parts = path.split('/');
    return parts[parts.length - 1];
};

nms.on('preConnect', (id, args) => {
    // console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
    // let session = nms.getSession(id);
    // session.reject();
});

nms.on('postConnect', (id, args) => {
    // console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('doneConnect', (id, args) => {
    // console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('prePublish', async (id, StreamPath, args) => {
    console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    let session = nms.getSession(id);
    let streamkey = getStreamKeyFromStreamPath(StreamPath);
    let viewkey = livestream_sk_vk.get(streamkey);
    console.log(session.publishStreamPath);
    console.log(streamkey);
    session.publishStreamPath = '/live/' + viewkey;
    console.log(session.publishStreamPath);
    // console.log(session);
    // session.reject();
});

nms.on('postPublish', (id, StreamPath, args) => {
    console.log('[NodeEvent on postPublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('donePublish', (id, StreamPath, args) => {
    // console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('prePlay', (id, StreamPath, args) => {
    // console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    // let session = nms.getSession(id);
    // session.reject();
});

nms.on('postPlay', (id, StreamPath, args) => {
    // console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('donePlay', (id, StreamPath, args) => {
    // console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

module.exports = nms;