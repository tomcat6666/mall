export default {
    namespaced: true,
    state: {
        num: 111,
        total: 1,
        castList: [
            { id: 1, num: 1, title: "jindada" },
            { id: 2, num: 2, title: "XIAOLIZI" },
            { id: 3, num: 1, title: "好先生" }
        ]
    },
    getters: {},
    mutations: {
        //进行数量加减
        totalNumadd(state, plaload) {
            if (plaload.state == "+") {
                state.castList[plaload.index].num++
            }
            if (plaload.state == "-") {
                state.castList[plaload.index].num--
            }
            //循环更新num中的数据
            let numTotal = 0
            state.castList.forEach(item => {
                numTotal += item.num
            });
            state.total = numTotal
        }
    },
    actions: {}
}