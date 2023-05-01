import { observable, action } from 'mobx';

class TeamStore {
    @observable formData: any = {};

    @action setFormData(formData: any) {
        this.formData = formData;
    }
}

export default new TeamStore();
