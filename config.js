// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的小羊肖恩",  // 同上...
        "今天是你的生日",
        "这是我们相遇以后的",
        "第十个生日了哦",
        "现在也依旧记得第一次见你",
        "你那闪闪发光的样子",
        "我们曾热烈地缠绕在一起",
        "我们相拥",
        "我们哭泣",
        "原来和你相知已经那么久了",
        "また 触れたくて",
        "ただ 眩しくて",
        "数えた日の夢からさよならが",
        "怎么会彼此错过那些日子",
        "未能在你身边的时光",
        "遗憾得我现在竟想要落泪",
        "喜欢你 真的好喜欢你",
        "我爱你",
        "若非黄土白骨",
        "定当不离不弃",
        "你要快乐 你要幸福",
        "你要依旧是那颗小太阳",
        "照亮我阴暗的角落",
        "生日快乐♥",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小羊肖恩": "./imgs/1.jpg",
        "生日快乐": "./imgs/7.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
