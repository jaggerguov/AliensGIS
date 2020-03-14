/**
     * @method: _utcToBeiJingTime utc时间转化为北京时间
     * @param {String} beiJingTime  YYYY-MM-DD HH:MM:SS
     * @return: utc对应的北京时间
     */
    _utcToBeiJingTime(beiJingTime){
        let utcTime = Cesium.JulianDate.fromDate(new Date(beiJingTime));
        let utcAdd8Hours = Cesium.JulianDate.addHours(utcTime, 8, new Cesium.JulianDate());
        return utcAdd8Hours;
    }

   /**
     * @method: _drawTrack 绘制轨迹
     * @param {String}  _startTime 开始时间
     * @param {String}  _endTime   结束时间
     * @param {Array}  pointsArr   轨迹点位数据
     * @param {Object}  trackStyle 轨迹线的样式
     * @param {Number}  defaultMultiplier 时间倍率  rgba()
     */
    _drawTrack(_startTime, _endTime, pointsArr, trackStyle, defaultMultiplier) {
        let { image, model, width =  6, color = [255, 0, 0, 255], outlineColor =  [255, 0, 0, 255], outlineWidth = 1 } = trackStyle || {};
        // 起始时间
        let startTime = this._utcToBeiJingTime(_startTime).toString();
        // 结束时间
        let endTime =  this._utcToBeiJingTime(_endTime).toString();
        let property = {
            'epoch' : startTime,
            'cartographicDegrees':pointsArr,
            // 'interpolationAlgorithm': 'LINEAR',
            'forwardExtrapolationType': 'HOLD',
            'interpolationAlgorithm': 'LAGRANGE',
            'interpolationDegree': 1
        };
        let czml = [
            {
            'id': 'car',
            'name' : '轨迹数据',
            'description' : '<p>动态轨迹</p >',
            'availability': startTime + '/' + endTime,
            'model': {
                'gltf': model || './Model/CesiumMilkTruck.glb',
                'minimumPixelSize':100,
            'minimumScale':10
            },
            'path': {
                'material': {
                    'polylineOutline': {
                        'color':{
                            'rgba':color
                        },
                        'outlineColor': {
                            'rgba': outlineColor
                        },
                        'outlineWidth': outlineWidth
                    }
                },
                'width': width,
                'leadTime': pointsArr[pointsArr.length - 4], // 路线提前执行时间
                'trailTime': pointsArr[pointsArr.length - 4],  //路线跟踪时间