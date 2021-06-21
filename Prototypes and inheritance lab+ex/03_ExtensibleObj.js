function solve() {
    let proto = {};
    let instance = Object.create(proto);

    instance.extend = function (templates) {
        Object.entries(templates).forEach(([k, v]) => {
            if (typeof v === "function") {
                proto[k] = v;
            }
            instance[k] = v;
        });
    }
    return instance;
}