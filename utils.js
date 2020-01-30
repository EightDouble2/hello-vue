//函数对象
var Utils = function () {
    //私有属性
    var username;

    //私有方法
    var setUsername = function (username) {
        this.username = username;
    }

    var getUsername = function () {
        return this.username;
    }

    //共有方法
    return {
        setUsername: function (username) {
            setUsername(username);
        },

        getUsername: function () {
            return getUsername();
        }
    }
}();