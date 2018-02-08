export const getSavesList = () => {
    const saves = localStorage.getItem('saves');
    if (saves) {
        return JSON.parse(saves);
    }
    return [];
};

export const addNewSave = save => {
    const saves = localStorage.getItem('saves');
    if (saves) {
        const parsed = JSON.parse(saves);
        parsed.unshift(save);
        localStorage.setItem('saves', JSON.stringify(parsed));
    } else {
        localStorage.setItem('saves', JSON.stringify([save]));
    }
};
