module.exports = {
    xmlToObj: (xml) => {
        let root = {};

        let name = null;
        let obj = root;

        const stack = [root];

        xml.replace(/</g, '\n<')
           .replace(/>/g, '>\n')
           .replace(/\n\n/g ,'\n')
           .split('\n')
           .forEach((element) => {
                const tag = element.match('<(/?)([^>]+)>');

                if(tag) {
                    if(tag[1] === '/') {
                        obj = stack.pop();
                    } else {
                        name = tag[2];

                        let parent = obj;
                        obj = {};

                        if(parent[name] && !Array.isArray(parent[name])) {
                            parent[name] = [parent[name]];
                        }

                        if(Array.isArray(parent[name])) {
                            parent[name].push(obj);
                        } else {
                            parent[name] = obj;
                        }

                        stack.push(parent);
                   }
                } else {
                    if(element.trim().length > 0) {
                        obj.value = element;
                    }
                }
            });

        (function flatten(node) {
            if(Array.isArray(node)) {
                node.forEach((element) => flatten(element));
            } else {
                Object.keys(node).forEach((key) => {
                    if(Object.keys(node[key]).length === 1 && typeof node[key].value !== 'undefined') {
                        node[key] = node[key].value;
                    } else {
                        flatten(node[key]);
                    }
                });
            }
        }(root));

        return root;
    }
}
