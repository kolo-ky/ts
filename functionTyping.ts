enum Status {
	PUBLISHED = 'published',
	DRAFT = 'draft',
	DELETED = 'deleted'
}

let request: {
	topicId: string;
	status?: Status;
}

let response: {
	question: string;
	answer: string;
	tags: string[];
	likes: number;
	status: Status;
}

async function getFaqs(req: typeof request): Promise<typeof response[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});

	const data: typeof response[] = await res.json();
	return data;
}