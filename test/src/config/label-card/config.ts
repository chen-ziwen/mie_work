
export const allTag = {
    'all-app': ['all-origin', 'bullet', 'gift', 'detail', 'census', 'other'],
    'all-origin': ['all-app', 'luck-draw', 'goal', 'comprehen', 'music', 'rank', 'clock', 'count-down', 'other'],
}

export const widgets = {
    // 这个结构已经做了关联
    origin: [
        { name: '全部', id: 'all-origin', allow: [...allTag["all-origin"]] },
        { name: '弹幕', id: 'bullet', allow: ['all-app', 'luck-draw', 'comprehen', 'music', 'rank'] },
        { name: '礼物', id: 'gift', allow: ['all-app', 'luck-draw', 'goal', 'comprehen', 'rank'] },
        { name: '详情', id: 'detail', allow: ['all-app', 'other'] },
        { name: '统计', id: 'census', allow: ['all-app', 'other'] },
        { name: '其他', id: 'other', allow: ['all-app', 'music', 'clock', 'count-down', 'other'] },
    ],
    app: [
        { name: '全部', id: 'all-app', allow: [...allTag['all-app']] },
        { name: '抽奖', id: 'luck-draw', allow: ['all-origin', 'bullet', 'gift'] },
        { name: '心愿', id: 'goal', allow: ['all-origin', 'gift'] },
        { name: '综合', id: 'comprehen', allow: ['all-origin', 'bullet', 'gift', 'other'] },
        { name: '音乐', id: 'music', allow: ['all-origin', 'bullet', 'other'] },
        { name: '排行', id: 'rank', allow: ['all-origin', 'bullet', 'gift'] },
        { name: '时钟', id: 'clock', allow: ['all-origin', 'other'] },
        { name: '倒计时', id: 'count-down', allow: ['all-origin', 'other'] },
        { name: '其他', id: 'other', allow: ['all-origin', 'detail', 'census', 'other'] }
    ],

    plug: [
        //抽奖类
        { name: '大转盘', en: 'wheel', cate: { 'origin': ['all-origin', 'bullet', 'gift'], 'app': ['all-app', 'luck-draw'] } },
        { name: '天选之人', en: 'luckyman', cate: { 'origin': ['all-origin', 'bullet', 'gift'], 'app': ['all-app', 'luck-draw'] } },
        //弹幕类
        { name: '聊天信息', en: 'chat-bubble', cate: { 'origin': ['all-origin', 'bullet'], 'app': ['all-app', 'other'] } },
        { name: '聊天信息(旧版)', en: 'chitchat', cate: { 'origin': ['all-origin', 'bullet'], 'app': ['all-app', 'other'] } },
        //礼物类
        { name: '礼物闪烁', en: 'giftrecentsimple', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'other'] } },
        { name: '礼物滚动', en: 'gift-scroll', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'other'] } },
        { name: '礼物滚动(旧版)', en: 'footer', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'other'] }, oldplug: true },
        { name: '礼物列表', en: 'chitgift', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'other'] } },
        { name: '高亮礼物', en: 'gift-hight-light', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'other'] } },
        { name: '礼物加播', en: 'giftencore', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'other'] } },
        { name: '简洁礼物', en: 'recentgift', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'other'] } },
        { name: '礼物计数', en: 'giftcount', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'other'] } },
        { name: '礼物留言板', en: 'giftboard', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'other'] } },
        //综合类
        { name: '综合弹幕', en: 'blive', cate: { 'origin': ['all-origin', 'bullet'], 'app': ['all-app', 'comprehen'] } },
        { name: '综合记录', en: 'comprehenrecord', cate: { 'origin': ['all-origin', 'bullet'], 'app': ['all-app', 'comprehen'] } },
        { name: '综合记录(旧版)', en: 'comprehen', cate: { 'origin': ['all-origin', 'bullet'], 'app': ['all-app', 'comprehen'] } },
        { name: '表情展示', en: 'complex-icon-show', cate: { 'origin': ['all-origin', 'bullet', 'gift'], 'app': ['all-app', 'comprehen'] } },
        { name: '表情展示(旧版)', en: 'iconshow', cate: { 'origin': ['all-origin', 'bullet', 'gift'], 'app': ['all-app', 'comprehen'] }, oldplug: true },
        // //心愿类
        { name: '心愿目标', en: 'goals', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'goal'] } },
        // //排行类
        { name: '排行榜', en: 'rank-list', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'rank'] } },
        { name: '排行榜(旧版)', en: 'ranking', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'rank'] } },
        { name: '今日榜一', en: 'top', cate: { 'origin': ['all-origin', 'gift'], 'app': ['all-app', 'rank'] } },
        { name: '妖娆猫', en: 'cat', cate: { 'origin': ['all-origin', 'bullet', 'gift'], 'app': ['all-app', 'rank'] } },
        { name: '沙发', en: 'sofa', cate: { 'origin': ['all-origin', 'bullet', 'gift'], 'app': ['all-app', 'rank'] } },
        // // 欢迎类
        { name: '简洁欢迎', en: 'welcomestyles', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'ohter'] } },
        //统计类
        { name: '人气/关注统计', en: 'statsimple', cate: { 'origin': ['all-origin', 'census'], 'app': ['all-app', 'other'] } },
        { name: '动态横幅', en: 'bannerfans', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'comprehen'] } },
        // //社交类
        { name: '社交公告板', en: 'socail-board', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'other'] } },
        { name: '简洁社交', en: 'social-simple', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'other'] } },
        { name: '社交信息(旧版)', en: 'social', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'other'] } },
        // //详情类
        { name: '菜单横幅', en: 'detail-banner', cate: { 'origin': ['all-origin', 'detail'], 'app': ['all-app', 'other'] } },
        { name: '菜单横幅(旧版)', en: 'bannermenu', cate: { 'origin': ['all-origin', 'detail'], 'app': ['all-app', 'other'] }, oldplug: true },
        { name: '礼物文本', en: 'detail-gift', cate: { 'origin': ['all-origin', 'gift', 'detail'], 'app': ['all-app', 'other'] } },
        { name: '详情滚动', en: 'detail-scroll', cate: { 'origin': ['all-origin', 'detail'], 'app': ['all-app', 'other'] } },
        { name: '详情', en: 'detail', cate: { 'origin': ['all-origin', 'detail'], 'app': ['all-app', 'other'] } },
        { name: '详情信息(旧版)', en: 'remind', cate: { 'origin': ['all-origin', 'detail'], 'app': ['all-app', 'other'] } },
        { name: '列表挂件', en: 'listwidget', cate: { 'origin': ['all-origin', 'detail'], 'app': ['all-app', 'other'] } },
        // //音乐类
        { name: '歌名显示', en: 'music-now-playing', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'music'] } },
        { name: '音乐点播', en: 'music-lyric', cate: { 'origin': ['all-origin', 'bullet'], 'app': ['all-app', 'music'] } },
        { name: '音乐点播(旧版)', en: 'mplayer', cate: { 'origin': ['all-origin', 'bullet'], 'app': ['all-app', 'music'] }, oldplug: true },
        // //按键类
        { name: '键盘', en: 'keyboard', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'other'] } },
        { name: '鼠标', en: 'mouse', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'other'] } },
        { name: '方向', en: 'keyarrow', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'other'] } },
        { name: '投票互动', en: 'voteinteract', cate: { 'origin': ['all-origin', 'bullet', 'gift'], 'app': ['all-app', 'comprehen'] } },
        { name: '计分板', en: 'scorecard', cate: { 'origin': ['all-origin', 'bullet', 'gift'], 'app': ['all-app', 'comprehen'] } },
        // // { name: '心愿目标', en: 'lottietest', plugkey: 112, oldplug: true },
        // //时钟类
        { name: '实时时间', en: 'showtime', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'clock'] } },
        { name: '时尚钟表', en: 'fashionclock', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'clock'] } },
        // //倒计时类
        { name: '日期倒计', en: 'count-down-day', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'count-down'] } },
        { name: '日期倒计(旧版)', en: 'datecountdown', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'count-down'] }, oldplug: true },
        { name: '挂钟', en: 'schedule', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'count-down'] } },
        { name: '直播倒计时', en: 'countdown', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'count-down'] } },
        // //背景色类
        { name: '颜色填充', en: 'color-fill', cate: { 'origin': ['all-origin', 'other'], 'app': ['all-app', 'other'] } },
    ],
}
