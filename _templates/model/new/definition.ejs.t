---
to: .blueprint/models/<%= name %>.js
---
<%
 NameCapitalized = h.capitalize(name)
%>
module.exports = {
    name : "<%- NameCapitalized  %>",
    definition: <%- h.modelStub(locals, name, {})  %>
}

