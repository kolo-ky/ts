
// бизнес сущность
interface IPayment {
	sum: number;
	from: number;
	to: number;
}

// сущность запросв - разделили бизнес и исполнительнуб логику
interface IPaymentRequest extends IPayment {}

interface ISuccessResponseData extends IPaymentRequest{
	databaseId: number;
}

enum Status { Success = 'success', Failed =  'failed'};

interface IFailedResponseData {
	errorMessage: string;
	errorCode: number;
}

interface ISuccsessResponse {
	status: Status.Success;
	data: ISuccessResponseData;
}

interface IFailedResponse {
	status: Status.Failed;
	data: IFailedResponseData;
}

type ServerResponse = ISuccsessResponse | IFailedResponse;