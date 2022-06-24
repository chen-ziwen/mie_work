const theme = {
    white: {
        key: 'white',
        color: {
            headback: 'rgba(244,244,244)',
            contentback: 'rgba(255,255,255)',
            tagtext: 'rgba(153,153,153)',
            songtext: 'rgba(51, 51, 51)',
            contenttext: 'rgba(51,51,51)',
            checkedback: 'rgba(237,237,237)',
            uncheckedback: 'rgba(244,244,244)',
            footline: 'rgba(46, 204, 156)',
            timeback: 'rgba(121, 187, 255)',
            conf: 'rgba(155,155,155)',
            tick: 'rgba(46, 204, 156)',
            cross: 'rgba(245, 108, 108)',

        },
        icon: {
            uncheck: {
                checked: '/assets/image/config/checked.png',
                delete: '/assets/image/config/delete.png',
                top: '/assets/image/config/top.png',
                copy: '/assets/image/config/copy.png',
                gift: '/assets/image/config/gift.png',

            },
            checked: {
                checked: '/assets/image/config/checked_p.png',
                delete: '/assets/image/config/delete_p.png',
                top: '/assets/image/config/top_p.png',
                copy: '/assets/image/config/copy_p.png',
                gift: '/assets/image/config/gift.png',
            }
        },
    },
    black: {
        key: 'black',
        color: {
            headback: 'rgba(255,255,255,0.08)',
            contentback: 'rgba(22,22,22)',
            tagtext: 'rgba(153,153,153)',
            songtext: 'rgba(237,237,237)',
            contenttext: 'rgba(237,237,237)',
            checkedback: 'rgba(237,237,237,0.09)',
            uncheckedback: 'rgba(255,255,255,0.04)',
            footline: 'rgba(46, 204, 156)',
            timeback: 'rgba(121, 187, 255)',
            conf: 'rgba(255,255,255)',
            tick: 'rgba(46, 204, 156)',
            cross: 'rgba(245, 108, 108)',
        },
        icon: {
            uncheck: {
                checked: '/assets/image/config/bchecked.png',
                delete: '/assets/image/config/bdelete.png',
                top: '/assets/image/config/btop.png',
                copy: '/assets/image/config/bcopy.png',
                gift: '/assets/image/config/bgift.png',
            },
            checked: {
                checked: '/assets/image/config/bchecked.png',
                delete: '/assets/image/config/bdelete.png',
                top: '/assets/image/config/btop.png',
                copy: '/assets/image/config/bcopy.png',
                gift: '/assets/image/config/bgift.png',
            }
        },
    },
    pink: {
        key: 'pink',
        color: {
            headback: 'rgba(255,255,255,0.15)',
            contentback: 'linear-gradient(142deg,#F17FAC, #F79F9F)',
            tagtext: 'rgba(255,255,255)',
            songtext: 'rgba(255, 255, 255)',
            contenttext: 'rgba(235,43,109)',
            checkedback: 'rgba(227, 65, 122, 0.25)',
            uncheckedback: 'rgba(227, 65, 122, 0.15)',
            footline: 'rgba(235, 43, 109)',
            timeback: 'rgba(237, 73, 128)',
            conf: 'rgba(255,255,255)',
            tick: 'rgba(119, 230, 240)',
            cross: 'rgba(244, 45, 115)',
        },
        icon: {
            uncheck: {
                checked: '/assets/image/config/pchecked.png',
                delete: '/assets/image/config/pdelete.png',
                top: '/assets/image/config/ptop.png',
                copy: '/assets/image/config/pcopy.png',
                gift: '/assets/image/config/pgift.png',
            },
            checked: {
                checked: '/assets/image/config/pchecked_p.png',
                delete: '/assets/image/config/pdelete_p.png',
                top: '/assets/image/config/ptop_p.png',
                copy: '/assets/image/config/pcopy_p.png',
                gift: '/assets/image/config/pgift.png',
            }
        },
    },
}

export {
    theme,
}