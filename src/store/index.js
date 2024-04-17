import Vuex from "vuex";
import words from "./modules/words";
import activeComponent from "./modules/activeComponent";

export default new Vuex.Store({
    modules: {
        words,
        activeComponent,
    },
});
