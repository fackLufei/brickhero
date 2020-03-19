export default class UniMap {
	constructor () {
		this.location = null

	}
	/* 获取定位授权 */
	getAuthorizeInfo() {
		let this_ = this
		uni.authorize({
			scope: 'scope.userLocation',
			success(res) { 
				this.getLocationInfo()
				console.log("定位授权成功")
			},
			fail() {
				console.log("定位拒绝授权")
			}
		})
	}
	/* 获取定位信息 */
	getLocationInfo() {
		let this_ = this
		uni.getLocation({
			type: 'wgs84',
			success (res) {
				const { longitude, latitude } = res
				uni.request({
                    header:{
                        "Content-Type": "application/text"
                    },
                    url:'http://apis.map.qq.com/ws/geocoder/v1/?location='+latitude+','+longitude+'&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35',
                    success(res) {  
                        if(res.statusCode===200){
							console.log("获取中文街道地理位置成功")
							console.log(res.data.result)
							this_.location = JSON.stringify( res.data.result)
                        }else{
                            console.log("获取信息失败，请重试！")
                        }
                     }
                });
			}
		})
	}
	/* 获取位置列表 */
	chooseLocation() {
		uni.chooseLocation({
			success: (data)=> {
	          console.log(data)
			}
		})
	}
}