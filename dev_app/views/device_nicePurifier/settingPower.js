directory.device_nicePurifierSettingPower = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_nicePurifier/settingPower"](data));
        return this;
    }
});