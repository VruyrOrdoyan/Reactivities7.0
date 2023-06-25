import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdite: (activity: Activity) => void;
    deleteActivity: (id: string) => void
};

export default function ActivityDashboard(
    {
        activities, 
        selectedActivity, 
        selectActivity, 
        cancelActivity,
        editMode,
        openForm,
        closeForm,
        createOrEdite,
        deleteActivity
    }: Props) {

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelActivity}  
                    openForm={openForm}
                    
                    />}
                {   
                    editMode && 
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdite={createOrEdite} />
                }
            </Grid.Column>
        </Grid>
    );
};