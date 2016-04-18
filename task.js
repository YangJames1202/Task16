var aqiData = {};
var cityInput = document.getElementById("aqi-city-input");
var aqiInput = document.getElementById("aqi-value-input");

function addAqiData() {
    var city = cityInput.value.trim();
    var aqi = aqiInput.value.trim();

    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！")
        return;
    }
    if(!aqi.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return;
    }
    aqiData[city] = aqi;
}

function renderAqiList() {
    var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData){
        items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>"
    }
    document.getElementById("aqi-table").innerHTML = city ? items : "";
}

function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").addEventListener("click", addBtnHandle)
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.city);
    })
}

init();