// ページ読込時に関数を実行する

const indexModule = (() => {
	//UsersモジュールのfetchAllUsersメソッドを呼び出す
	return usersModule.fetchAllUsers();
})()