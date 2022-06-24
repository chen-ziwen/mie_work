import { reactive, ref } from "vue";

interface orderData {
    key: string;
    songName: string;
    message: string
}

const orderData = reactive([
    { userId: "1", songName: '你一定能够成为你想要去成为的人', userName: '六只小熊', id: 666, 'dsa': 888 },
    { userId: "2", songName: '十年', userName: '奥特之王' },
    { userId: "3", songName: '再见', userName: '不见的秘密人事' },
    { userId: "4", songName: '广东爱情故事', userName: '气球杀疯了' },
    { userId: "5", songName: '成都', userName: '二百五520' },
    { userId: "6", songName: '我永远不会停下前行的脚步', userName: '窗前白月' },
    { userId: "7", songName: '终点起点', userName: '笛子月林' },
    { userId: "8", songName: '年少的欢喜', userName: '一把火' },
    { userId: "9", songName: 'Dear John', userName: 'Hikuutel' },
    { userId: "10", songName: 'lot to learn', userName: '我不知道的夏天还远吗' },
    { userId: "11", songName: '此间少年', userName: '栀豆青' },

])
const EventContext = ref({ messageId: '5962856', songName: '在你看不见的地方我是存在的', message: '已在队列中，无需重复点歌。' })

let newData = [
    { messageId: '5962856', songName: '在你看不见的地方我是存在的', message: '已在队列中，无需重复点歌。' },
    { messageId: '6962856', songName: '我不认识你', message: '已在队列中，无需重复点歌。' },
    { messageId: '5862856', songName: '你好', message: '已在队列中，无需重复点歌。' },
    { messageId: '7962856', songName: '你在南方的艳阳里', message: '点歌成功' },
];
const eventData = JSON.parse(JSON.stringify(newData))
let i = 20;
// 推入
function pushData() {
    orderData.push({ userId: i++ + '', songName: '广东爱情故事', userName: '我不知道的夏天还远吗' })
}
// 从数组中随机删除一项
function del() {
    const random = ~~(Math.random() * orderData.length);
    orderData.splice(random, 1);
}
function replace() {
    console.log('lalalla', eventData);

    if (newData.length < 1) {
        newData = JSON.parse(JSON.stringify(eventData))
    }
    EventContext.value = newData.shift() || { messageId: '777777', songName: '十年', message: '已在队列中，无需重复点歌。' }
}

// 推入第一项

export {
    orderData,
    EventContext,
    pushData,
    del,
    replace
    // data,
}