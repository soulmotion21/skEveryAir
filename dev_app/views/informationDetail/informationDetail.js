directory.informationDetail = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        var self = this;
        App.util.setReloader();
        // 헤더 바인딩
        App.view.subHeader.render();

        var data = App.vars.oSchoolDetail.oDeviceInfo[App.vars.oSchoolDetail.nIdx];

        // 템플릿팅
        self.$el.html(templete["informationDetail/informationDetail"](data));
        $('.wrap_contents').html(self.$el).removeClass('wrap_contents_gray');

        var rootData = App.vars.oSchoolDetail.oDeviceInfoRoot[App.vars.oSchoolDetail.nIdx];

        if(rootData.callCenterInfoUrl === ""){
            $('._callCenterInfoUrl').addClass('txt_info_off');
        } else if(rootData.dvcGuideUrl ==="1"){
            $('._dvcGuideUrl').remove()
        } else if (rootData.dvcGuideUrl === "" ){
            $('._dvcGuideUrl').addClass('txt_info_off');
        }

    }
});