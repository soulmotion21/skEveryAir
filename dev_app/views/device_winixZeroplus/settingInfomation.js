directory.device_winixZeroplusSettingInfomation = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixZeroplus/settingInfomation"](data));
        return this;
    }
});