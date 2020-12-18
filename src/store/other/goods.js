export default {
    //这个声明的是哪个模块下面的
    namespaced: true,
    //存储商品的公共数据
    state: {
        num: 333,
        total: 0,
        goodsList: [
            { id: 1, num: 1, goods_name: "火柴" },
            { id: 2, num: 1, goods_name: "火柴111" },
            { id: 3, num: 1, goods_name: "火柴2222" },
        ]
    },
    //过滤数据
    getters: {},
    mutations: {
        //进行数据的修改
        addGoodsNum(state, payload) {
            if (payload.type == "+") {
                state.goodsList[payload.index].num++
            }
            if (payload.type == "-") {
                state.goodsList[payload.index].num--
            }
            let totalNum = 0
            state.goodsList.forEach(item => {
                totalNum += item.num
            })
            state.total = totalNum
        }
    },
    actions: {}
}