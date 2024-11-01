import { MainActions } from "./main.actions";
import { mainReducer } from "./main.feature";

describe('Main Feature', () => {
    it('should add new item to the list', () => {
        const result = mainReducer(undefined, MainActions.addTask({name: 'New Task'}));
        expect(result.itemsList.length).toBe(1);
    });

    it('should remove item from the list', () => {
        const result = mainReducer({itemsList: [{id: 1, name: 'Task 1'}]}, MainActions.removeTask({id: 1}));
        expect(result.itemsList.length).toBe(0);
    });
});