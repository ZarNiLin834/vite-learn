import { addBtnHandler, alertBtnHandler } from './handler';
import { addBtn } from './selectors';

const listener = () => {
    addBtn.addEventListener("click",addBtnHandler);
    alertBtn.addEventListener("click",alertBtnHandler)
};

export default listener;
