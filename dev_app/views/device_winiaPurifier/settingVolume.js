directory.device_winiaPurifierSettingVolume= Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function (data) {
        this.$el.html(templete["device_winiaPurifier/settingVolume"](data));
        return this;
    }
});