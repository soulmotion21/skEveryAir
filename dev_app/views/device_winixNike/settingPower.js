directory.device_winixNikeSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winixNike/settingPower"](data));
        return this;
    }
});