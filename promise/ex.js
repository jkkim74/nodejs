//Promise ����
var _promise = function (param) {

	return new Promise(function (resolve, reject) {

		// �񵿱⸦ ǥ���ϱ� ���� setTimeout �Լ��� ��� 
		window.setTimeout(function () {

			// �Ķ���Ͱ� ���̸�, 
			if (param) {

				// �ذ�� 
				resolve("�ذ� �Ϸ�");
			}

			// �Ķ���Ͱ� �����̸�, 
			else {

				// ���� 
				reject(Error("����!!"));
			}
		}, 3000);
	});
};

//Promise ����
_promise(true)
.then(function (text) {
	// ������
	console.log(text);
}, function (error) {
	// ���н� 
	console.error(error);
});