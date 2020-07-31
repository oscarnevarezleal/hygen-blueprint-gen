---
to: .blueprint/models/<%= name %>.js
---
module.exports = {
    name : "<%- name  %>",
    definition: <%- h.modelStub(name, {})  %>
}

