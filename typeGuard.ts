interface IPayment {
 	sum: number;
 	from: number;
 	to: number;
}

enum PaymentStatus {
 	Success = 'success',
 	Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
 	errorMessage: string;
 	errorCode: number;
}

 interface IResponseSuccess {
 	status: PaymentStatus.Success;
 	data: IDataSuccess;
 }

 interface IResponseFailed {
 	status: PaymentStatus.Failed;
 	data: IDataFailed;
}

type ServerResponse = IResponseSuccess | IResponseFailed

const isResponseSuccess = (response:ServerResponse): response is IResponseSuccess => {
	return response.status === PaymentStatus.Success;
}

const getResponse = (response:  ServerResponse): number => {
	if(isResponseSuccess(response)) {
		return response.data.databaseId;
	} else {
		throw new Error(response.data.errorMessage);
	}
}