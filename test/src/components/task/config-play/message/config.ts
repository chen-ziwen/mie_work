import { reactive, ref } from "vue";

const data = reactive([
    { songName: '多想在平庸的生活拥抱你', userName: '方严UI', score: 9999, },
    { songName: '说书先生', userName: 'Asz阿狸', score: 0, },
    { songName: '死海之境', userName: '可可想在开花店', score: 1.2 + 'w', },
    { songName: '当时无人能懂', userName: '大黄狗', score: 520, },
    { songName: '我故意把名字取的很长，这样才能看到省略号啦啦啦啦阿拉啦', userName: '不当人', score: 0, },
    { songName: 'Rox-说书先生', userName: '咚咚版', score: 1314 },
    { songName: 'summertime sadness', userName: '我是故意把名字取得这么长，这样才可以才可以测试一些边界情况啦啦啦啦', score: 10.2 + 'w', },
    { songName: '不再见', userName: '其实也很好', score: 3, },
])

const data2 = reactive([
    { songName: '不要无聊的时候才想我', userName: '车力宏', score: '1.9w', time: 78360000, show: { msg: '点歌成功', display: true } },
    { songName: '多想在遇见你', userName: '理论理论大师', score: 0, time: 70360000, show: { msg: '点播失败，用户频繁点歌', display: false } },
    { songName: '荷塘月色', userName: '可可想开花店YAY', score: 1.2 + 'w', time: 85360000, show: { msg: '点歌成功', display: true } },
    { songName: '当时无人能懂', userName: '大黄狗', score: 520, time: 55360000, show: { msg: '点歌成功', display: true } },
    { songName: '其实你不懂我i', userName: '不当人', score: 0, time: 75390000, show: { msg: '点播失败，用户频繁点歌', display: false } },
    { songName: 'Alex pinia', userName: '咚咚版', score: 1314, time: 65300000, show: { msg: '点歌成功', display: true } },
    { songName: '多想在平庸的生活拥抱你', userName: 'hello我是谁dasdasdasdasdas', score: 10.2 + 'w', time: 70360800, show: { msg: '点歌成功', display: true } },
    { songName: '我故意把名字取的很长，这样才能看到省略号啦啦啦啦阿拉啦', userName: '其实也很好', score: 3, time: 65360000, show: { msg: '点播失败，用户频繁点歌', display: false } },
    { songName: '当时无人能懂', userName: '大黄狗', score: 520, time: 105360000, show: { msg: '点播失败，用户频繁点歌', display: false } },
    { songName: '很多天我不能睡', userName: '罪孽深重', score: '5w+', time: 45360000, show: { msg: '点歌成功', display: true } },

])



// 置顶功能
function topping(index: number) {
    [data[index], data[0]] = [data[0], data[index]];
    [data2[index], data2[0]] = [data2[0], data2[index]]
}

// 删除功能
function del(index: number) {
    data.splice(index, 1)
    data2.splice(index, 1)
}
// 添加功能
function a() {
    data.push({ songName: '很多天我不能睡', userName: '罪孽深重', score: '5w+', },)
}




export { data, data2, topping, a, del }
