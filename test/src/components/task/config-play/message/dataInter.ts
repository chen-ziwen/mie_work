interface Color<T> {
    headback: T; // 顶部一行的颜色
    conf: T;  // 顶部配置项的按钮色
    contentback: T; // 内容的背景色
    tagtext: T;  // 标签的文本色
    songtext: T;  // 歌名文本色
    contenttext: T;  // 正文文本色
    checkedback: T; // 鼠标移动到列表显示的高亮色
    uncheckedback: T; // 鼠标未移动到列表的基础色
    footline: T; // 标签分类的下划线色
    timeback: T; // 点播记录的时间背景色
    tick: T;  //点播记录打钩的按钮色
    cross: T; // 点播记录打叉的按钮色

}
interface Icon<T> {
    checked: T;
    delete: T;
    top: T;
    copy: T;
    gift: T;
}
interface AllIcon {
    checked: Icon<string>;
    uncheck: Icon<string>;
}

export interface MyTheme {
    key: string,
    color: Color<string>,
    icon: AllIcon,
}