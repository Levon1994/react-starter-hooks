import CreateActionCreator  from 'helpers/createActionCreator';
import { TEAMMEMBERS } from 'configs/types';

export const fetchTeamMembers = _ => CreateActionCreator.read({
    path: 'team-members',
    type: TEAMMEMBERS,
});

export const addTeamMembers = (data) => CreateActionCreator.create({
    path: 'team-members',
    type: TEAMMEMBERS,
    body: data
});

export const updateTeamMembers = (teamMemberId, data) => CreateActionCreator.update({
    path: `team-members/${teamMemberId}`,
    type: TEAMMEMBERS,
    body: data
});

export const deleteTeamMembers = (teamMemberId) => CreateActionCreator.delete({
    path: `team-members/${teamMemberId}`,
    type: TEAMMEMBERS
});
