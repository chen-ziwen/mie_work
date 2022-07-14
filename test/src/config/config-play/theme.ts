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
                checked: '/assets/images/config/checked.png',
                delete: '/assets/images/config/delete.png',
                top: '/assets/images/config/top.png',
                copy: '/assets/images/config/copy.png',
                gift: '/assets/images/config/gift.png',

            },
            checked: {
                checked: '/assets/images/config/checked_p.png',
                delete: '/assets/images/config/delete_p.png',
                top: '/assets/images/config/top_p.png',
                copy: '/assets/images/config/copy_p.png',
                gift: '/assets/images/config/gift.png',
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
                checked: '/assets/images/config/bchecked.png',
                delete: '/assets/images/config/bdelete.png',
                top: '/assets/images/config/btop.png',
                copy: '/assets/images/config/bcopy.png',
                gift: '/assets/images/config/bgift.png',
            },
            checked: {
                checked: '/assets/images/config/bchecked.png',
                delete: '/assets/images/config/bdelete.png',
                top: '/assets/images/config/btop.png',
                copy: '/assets/images/config/bcopy.png',
                gift: '/assets/images/config/bgift.png',
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
                checked: '/assets/images/config/pchecked.png',
                delete: '/assets/images/config/pdelete.png',
                top: '/assets/images/config/ptop.png',
                copy: '/assets/images/config/pcopy.png',
                gift: '/assets/images/config/pgift.png',
            },
            checked: {
                checked: '/assets/images/config/pchecked_p.png',
                delete: '/assets/images/config/pdelete_p.png',
                top: '/assets/images/config/ptop_p.png',
                copy: '/assets/images/config/pcopy_p.png',
                gift: '/assets/images/config/pgift.png',
            }
        },
    },
}

export {
    theme,
}