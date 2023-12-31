import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function ActivityForm() {

    const {activityStore} = useStore();

    const {selectedActivity, closeForm, createActivity, editActivity, loading} = activityStore;

    const initialState = selectedActivity ?? {
        id: "",
        title: "",
        date: "",
        description: "",
        category: "",
        city: "",
        venue: ""
    };

    const [activity, setActivity] = useState<Activity>(initialState);

    function handleSubmit() {
        activity.id ? editActivity(activity) : createActivity(activity);
    }

    function handleInputChange(evenet: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = evenet.target;
        setActivity({...activity, [name]: value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit' loading={loading} />
                <Button floated='right' type='button' content='Cancel' onClick={() => closeForm()} />
            </Form>
        </Segment>
    );
});