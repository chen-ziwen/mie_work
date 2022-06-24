export const widgets = {
    category: [
        { name: '全部', id: 100 },
        { name: '弹幕', id: 101 },
        { name: '礼物', id: 102 },
        { name: '详情', id: 103 },
        { name: '统计', id: 104 },
        { name: '其他', id: 105 },
    ],
    category2: [
        { name: '全部', id: 200 },
        { name: '抽奖', id: 201 },
        { name: '心愿', id: 202 },
        { name: '综合', id: 203 },
        { name: '音乐', id: 204 },
        { name: '排行', id: 205 },
        { name: '时钟', id: 206 },
        { name: '倒计时', id: 207 },
        { name: '其他', id: 208 }
    ],

    plug: [
        //抽奖类
        { name: '大转盘', en: 'wheel', plugkey: [100, 200, 102, 201] },
        { name: '天选之人', en: 'luckyman', plugkey: [100, 200, 101, 102, 201] },
        //弹幕类
        { name: '聊天信息', en: 'chat-bubble', plugkey: [100, 200, 101, 102] },
        { name: '聊天信息(旧版)', en: 'chitchat', plugkey: [100, 200, 101, 102], oldplug: true },
        //礼物类
        { name: '礼物闪烁', en: 'giftrecentsimple', plugkey: [100, 200, 102] },
        { name: '礼物滚动', en: 'gift-scroll', plugkey: [100, 200, 102] },
        { name: '礼物滚动(旧版)', en: 'footer', plugkey: [100, 200, 102], oldplug: true },
        { name: '礼物列表', en: 'chitgift', plugkey: [100, 200, 102] },
        { name: '高亮礼物', en: 'gift-hight-light', plugkey: [100, 200, 102] },
        { name: '礼物加播', en: 'giftencore', plugkey: [100, 200, 102] },
        { name: '简洁礼物', en: 'recentgift', plugkey: [100, 200, 102] },
        { name: '礼物计数', en: 'giftcount', plugkey: [100, 200, 102] },
        { name: '礼物留言板', en: 'giftboard', plugkey: [100, 200, 102] },
        //综合类
        { name: '综合弹幕', en: 'blive', plugkey: [100, 200, 101, 203] },
        { name: '综合记录', en: 'comprehenrecord', plugkey: [100, 200, 203] },
        { name: '综合记录(旧版)', en: 'comprehen', plugkey: [100, 200, 208] },
        { name: '表情展示', en: 'complex-icon-show', plugkey: [100, 200, 101, 102, 203] },
        { name: '表情展示(旧版)', en: 'iconshow', plugkey: [100, 200, 101, 102, 203], oldplug: true },
        // //心愿类
        { name: '心愿目标', en: 'goals', plugkey: [100, 200, 102, 202] },
        // //排行类
        { name: '排行榜', en: 'rank-list', plugkey: [100, 200, 102, 205] },
        { name: '排行榜(旧版)', en: 'ranking', plugkey: [100, 200, 102, 205], oldplug: true },
        { name: '今日榜一', en: 'top', plugkey: [100, 200, 102, 205] },
        { name: '妖娆猫', en: 'cat', plugkey: [100, 200, 101, 102, 205] },
        { name: '沙发', en: 'sofa', plugkey: [100, 200, 101, 102, 205] },
        // // 欢迎类
        { name: '简洁欢迎', en: 'welcomestyles', plugkey: [100, 200, 101] },
        //统计类
        { name: '人气/关注统计', en: 'statsimple', plugkey: [100, 200, 104, 208] },
        { name: '动态横幅', en: 'bannerfans', plugkey: [100, 200, 105, 203] },
        // //社交类
        { name: '社交公告板', en: 'socail-board', plugkey: [100, 200, 105, 208] },
        { name: '简洁社交', en: 'social-simple', plugkey: [100, 200, 105, 208] },
        { name: '社交信息(旧版)', en: 'social', plugkey: [100, 200, 105, 208], oldplug: true },
        // //详情类
        { name: '菜单横幅', en: 'detail-banner', plugkey: [100, 200, 103, 208] },
        { name: '菜单横幅(旧版)', en: 'bannermenu', plugkey: [100, 200, 103, 208], oldplug: true },
        { name: '礼物文本', en: 'detail-gift', plugkey: [100, 200, 102, 103] },
        { name: '详情滚动', en: 'detail-scroll', plugkey: [100, 200, 103, 208] },
        { name: '详情', en: 'detail', plugkey: [100, 200, 103, 208] },
        { name: '详情信息(旧版)', en: 'remind', plugkey: [100, 200, 103, 208], oldplug: true },
        { name: '列表挂件', en: 'listwidget', plugkey: [100, 200, 103, 208] },
        // //音乐类
        { name: '歌名显示', en: 'music-now-playing', plugkey: [100, 200, 105, 204] },
        { name: '音乐点播', en: 'music-lyric', plugkey: [100, 200, 101, 204] },
        { name: '音乐点播(旧版)', en: 'mplayer', plugkey: [100, 200, 101, 204], oldplug: true },
        // //按键类
        { name: '键盘', en: 'keyboard', plugkey: [100, 200, 105, 208] },
        { name: '鼠标', en: 'mouse', plugkey: [100, 200, 105, 208] },
        { name: '方向', en: 'keyarrow', plugkey: [100, 200, 105, 208] },
        { name: '投票互动', en: 'voteinteract', plugkey: [100, 200, 101, 102] },
        { name: '计分板', en: 'scorecard', plugkey: [100, 200, 101, 102] },
        // // { name: '心愿目标', en: 'lottietest', plugkey: 112, oldplug: true },
        // //时钟类
        { name: '实时时间', en: 'showtime', plugkey: [100, 200, 105, 206] },
        { name: '时尚钟表', en: 'fashionclock', plugkey: [100, 200, 105, 206] },
        // //倒计时类
        { name: '日期倒计', en: 'count-down-day', plugkey: [100, 200, 105, 207] },
        { name: '日期倒计(旧版)', en: 'datecountdown', plugkey: [100, 200, 105, 207], oldplug: true },
        { name: '挂钟', en: 'schedule', plugkey: [100, 200, 105, 207] },
        { name: '直播倒计时', en: 'countdown', plugkey: [100, 200, 105, 207] },
        // //背景色类
        { name: '颜色填充', en: 'color-fill', plugkey: [100, 200, 105, 208] },
    ],
}
