---
to: .blueprint/models/<%= name %>.json
---
<%
 NameCapitalized = h.capitalize(name)
%>
{
    "name" : "<%- NameCapitalized  %>",
    "definition": <%- h.modelStub(locals, name, {})  %>
}

