import router from '@system.router'

var picker1value = null;
var picker2value = null;

export default {
    data: {
        picker1range: ["1", "2", "3"],
        picker2range: ["较慢", "舒缓", "较快"]
    },
    changeAction1(pv) {
        console.log("左边选中的值：" + pv.newValue)
        picker1value = pv.newValue;
    },
    changeAction2(pv) {
        console.log("右边选中的值：" + pv.newValue)
        picker2value = pv.newValue;
    },
    clickAction() {
        router.replace({
            uri: 'pages/daojishi/daojishi',
            params: {"data1": picker1value, "data2": picker2value}
        })
    },
    onInit() {
        console.log("主页面的onInit被调用")
    },
    onReady() {
        console.log("主页面的onReady被调用")
    },
    onCreate() {
        console.log("主页面的onCreate被调用")
    },
    onShow() {
        console.log("主页面的onShow被调用")
    },
    onDestroy() {
        console.log("主页面的onDestroy被调用")
    }
}