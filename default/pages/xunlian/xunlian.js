import router from '@system.router'

var picker1value = null;
var picker2value = null;

var picker1Seconds = null;
var picker2Seconds = null;

var timer1 = null;
var timer2 = null;
var timer3 = null;

var counter = 0;

export default {
    data: {
        seconds: 0,
        isshow: true,
        huxi: "吸气",
        percent: "0",
        duration: "",
        count: ""
    },
    clickAction() {
        clearInterval(timer1);
        timer1 = null;

        clearInterval(timer2);
        timer2 = null;

        clearInterval(timer3);
        timer3 = null;

        router.replace({
            uri: 'pages/index/index'
        })
    },
    run1() {
        this.seconds--;
        if(this.seconds == 0) {
            clearInterval(timer1);
            timer1 = null;
            this.isshow = false;
        }
    },
    run2() {
        counter++;
        if(counter == picker1Seconds / picker2Seconds) {
            clearInterval(timer2);
            timer2 = null;
            this.huxi = "已完成";
        }else{
            if(this.huxi == "吸气"){
                this.huxi = "呼气"
            }else if(this.huxi == "呼气"){
                this.huxi = "吸气"
            }
        }
    },
    run3() {
        this.percent = (parseInt(this.percent) + 1).toString();
        if(parseInt(this.percent) < 10) {
            this.percent = "0" + this.percent;
        }
        if(parseInt(this.percent) == 100) {
            this.percent = "0";
        }
        if(timer2 == null) {
            clearInterval(timer3);
            timer3 = null;
            this.percent = "100";
        }
    },
    onInit() {
        console.log("训练页面的onInit被调用")

        console.log("接收到左边选择器传过来的值：" + this.key1)
        console.log("接收到右边选择器传过来的值：" + this.key2)

        picker1value = this.key1;
        picker2value = this.key2;

        if(picker1value == "1") {
            picker1Seconds = 60;
        }else if(picker1value == "2") {
            picker1Seconds = 120
        }else if(picker1value == "3") {
            picker1Seconds = 180
        }

        if(picker2value == "较慢") {
            picker2Seconds = 6
        }else if(picker2value == "舒缓") {
            picker2Seconds = 4
        }else if(picker2value == "较快") {
            picker2Seconds = 2
        }

        this.seconds = picker1Seconds;

        this.duration = picker2Seconds + "s";
        this.count = (picker1Seconds / picker2Seconds).toString();
    },
    onReady() {
        console.log("训练页面的onReady被调用")
    },
    onCreate() {
        console.log("训练页面的onCreate被调用")
    },
    onShow() {
        console.log("训练页面的onShow被调用")

        timer1 = setInterval(this.run1, 1000);
        timer2 = setInterval(this.run2, picker2Seconds * 1000);
        timer3 = setInterval(this.run3, picker2Seconds / 100 * 1000);
    },
    onDestroy() {
        console.log("训练页面的onDestroy被调用")
    }
}