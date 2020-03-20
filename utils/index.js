//登录成功后跳转
export function goPage(type, path) {

	switch (type) {
		case 'navigateTo':
			uni.navigateTo({
				url: path
			});
			break;
		case 'redirectTo':
			uni.redirectTo({
				url: path
			});
			break;
		case 'reLaunch':
			uni.reLaunch({
				url: path
			});
			break;
		case 'switchTab':
			uni.switchTab({
				url: path
			});
			break;
	}

}
