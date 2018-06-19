$(function () {
    //1.自动轮播 定时器 setInterval(函数名，时间)

    /**
        autoPlay方法，实现自己动：
        开始的时候，设置第一张图片的索引默认为 0，动一下索引 + 1 ，
        如果动到最后一张的时候在动就默认在为 0 (索引大于索引最大值时默认回到最小)
    */
    var curItem = 0;/*索引*/
    var len = $(".list-left ul li").length;  //索引的长度  12
    function autoPlay() {
        curItem++;
        if (curItem > len-1) {
            curItem = 0;
        };
        /**
        eq获取索引，从第一个开始
        siblings获取同辈元素
        */
        showCur();
    };
    setInterval(autoPlay, 3000);

    //2.左侧点击模块，右侧跳转到相应的图片
    /**
        获取当前点击的图片的索引
        index()->搜索与参数表示的对象匹配的元素，并返回相应元素的索引值。

    */
    $(".list-left ul li").click(function () {
        curItem = $(this).index();
        showCur();
    });
    //3.右侧点击图片，左侧跳转到相应的模块
    //左按钮
    $(".list-right .left-btn").click(function () {
        curItem--;
        if (curItem < 0) {
            curItem = len - 1;
        }
        showCur();
    });
    //右按钮
    $(".list-right .right-btn").click(function () {
        curItem++;
        if (curItem > len - 1) {
            curItem = 0;
        }
        showCur();
    });
    //公共方法
    function showCur() {
        //移动到当前的块上，加上list_cutL索引，同级的去掉list_cutLi索引
        $(".list-left ul li").eq(curItem).addClass("list_cutLi").siblings("li").removeClass("list_cutLi");
        //一张图片宽268，*索引就是移动的宽度
        var leftVal = 268 * curItem;
        //$(".right-box-main").css('left', -leftVal);
        //0.5秒内向左移动图片
        $(".right-box-main").animate({ left: -leftVal }, 500);
    };
})