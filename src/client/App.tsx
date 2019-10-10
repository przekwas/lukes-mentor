import * as React from 'react';
import { useState } from 'react';
import { Calendar } from 'react-calendar/dist/entry';

const App: React.FC<AppProps> = () => {
	const [date, setDate] = useState<Date>(new Date());
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	const onChange = (date: Date) => setDate(date);

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log({
			title,
			description,
			date
		});
		//await json('/api/events', 'POST', { title, description, date })
	};

	return (
		<section className="row justify-content-center my-3">
			<div className="col-md-6">
				<form className="form-group border p-3 shadow-lg">
					<h4 className="text-center">Schedule a Mentor Session</h4>
					<label>Title of Session</label>
					<input value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className="form-control my-1 shadow-sm" type="text" />
					<label>Describe the Session Goal</label>
					<textarea value={description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} className="form-control my-1 shadow-sm" rows={5}></textarea>
					<label>Pick a Time</label>
					<Calendar className="mx-auto my-1 shadow-sm" onChange={onChange} value={date} />
					<button onClick={onSubmit} className="btn btn-primary btn-block mt-3 shadow">Schedule!</button>
				</form>
			</div>
		</section>
	);
};

interface AppProps {}

export default App;
