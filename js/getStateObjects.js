function getVacation(image, location) {
    const id = _getVacationId();
    let isSelected = false;

    function _getVacationId() {
        const vName = location || "";
        return `Vacation_${vName}_${Math.ceil(Math.random() * 999)}`;
    }


    return { image, location, id, isSelected };
}