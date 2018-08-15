import section from './sectionWwBuilderC.vue'

const name = "wwbuilder_C";

const addComponent = function () {
    if (window.vm) {
        window.vm.addComponent(name, section);
        console.log('wwbuilder_C add Component : ', { name: name, section: section })
        return true;
    }
    return false;
}

if (!addComponent()) {
    const iniInterval = setInterval(function () {
        if (addComponent()) {
            clearInterval(iniInterval);
        }
    }, 10);
}